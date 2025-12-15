import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { validateCompanionToken } from "@/lib/auth/validate-companion-token";

// Status mapping: Companion app ’ Database
const statusMap = {
  STARTED: "IN_PROGRESS",
  COMPLETED: "COMPLETED",
  FAILED: "AVAILABLE",
} as const;

type CompanionStatus = keyof typeof statusMap;

interface QuestEvent {
  questId: string;
  status: string;
  timestamp: string;
}

/**
 * POST /api/companion/sync - Sync quest progress from companion app
 *
 * This endpoint accepts quest status updates from the Tauri companion app
 * and updates the database accordingly. It handles status mapping, validation,
 * and auto-unlocking of dependent quests.
 */
export async function POST(request: NextRequest) {
  try {
    // 1. Extract and validate token
    const authHeader = request.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json(
        { success: false, error: "Missing or invalid Authorization header" },
        { status: 401 }
      );
    }

    const token = authHeader.substring(7);
    const validation = await validateCompanionToken(token);

    if (!validation.valid) {
      return NextResponse.json(
        { success: false, error: validation.error },
        { status: 401 }
      );
    }

    // 2. Parse and validate request body
    const body = await request.json();
    const { events } = body;

    if (!Array.isArray(events) || events.length === 0) {
      return NextResponse.json(
        { success: false, error: "Invalid events array" },
        { status: 400 }
      );
    }

    // 3. Validate event format
    const failedEvents: Array<{
      questId: string;
      status: string;
      reason: string;
    }> = [];

    for (const event of events as QuestEvent[]) {
      if (!event.questId || !event.status) {
        failedEvents.push({
          questId: event.questId || "unknown",
          status: event.status || "unknown",
          reason: "Missing questId or status",
        });
      }
    }

    if (failedEvents.length > 0) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid event format",
          failedEvents,
        },
        { status: 400 }
      );
    }

    // 4. Process updates in transaction
    const result = await prisma.$transaction(async (tx) => {
      let syncedCount = 0;
      const failed: typeof failedEvents = [];

      for (const event of events as QuestEvent[]) {
        const { questId, status } = event;

        // Map status from companion format to database format
        const mappedStatus = statusMap[status as CompanionStatus];
        if (!mappedStatus) {
          failed.push({
            questId,
            status,
            reason: `Invalid status: ${status}`,
          });
          continue;
        }

        // Verify quest exists
        const quest = await tx.quest.findUnique({
          where: { id: questId },
        });

        if (!quest) {
          failed.push({
            questId,
            status,
            reason: "Quest not found",
          });
          continue;
        }

        // Update or create quest progress
        await tx.questProgress.upsert({
          where: {
            userId_questId: {
              userId: validation.userId!,
              questId,
            },
          },
          update: {
            status: mappedStatus,
            updatedAt: new Date(),
          },
          create: {
            userId: validation.userId!,
            questId,
            status: mappedStatus,
          },
        });

        syncedCount++;

        // Auto-unlock dependent quests if this quest was completed
        if (mappedStatus === "COMPLETED") {
          // Find quests that depend on this quest
          const dependencies = await tx.questDependency.findMany({
            where: { dependsOnId: questId },
            include: {
              quest: {
                include: {
                  dependencies: true,
                },
              },
            },
          });

          for (const dep of dependencies) {
            // Check if all dependencies for the dependent quest are met
            const allDeps = dep.quest.dependencies;
            const completedDeps = await tx.questProgress.count({
              where: {
                userId: validation.userId!,
                questId: { in: allDeps.map((d) => d.dependsOnId) },
                status: "COMPLETED",
              },
            });

            // If all dependencies are met, unlock the quest
            if (completedDeps === allDeps.length) {
              await tx.questProgress.upsert({
                where: {
                  userId_questId: {
                    userId: validation.userId!,
                    questId: dep.questId,
                  },
                },
                update: {
                  status: "AVAILABLE",
                  updatedAt: new Date(),
                },
                create: {
                  userId: validation.userId!,
                  questId: dep.questId,
                  status: "AVAILABLE",
                },
              });
            }
          }
        }
      }

      // Query updated stats
      const questStats = await tx.questProgress.groupBy({
        by: ["status"],
        where: { userId: validation.userId },
        _count: { status: true },
      });

      const stats = {
        completed: 0,
        inProgress: 0,
        available: 0,
        locked: 0,
      };

      questStats.forEach((stat) => {
        const status = stat.status.toLowerCase();
        if (status === "completed") {
          stats.completed = stat._count.status;
        } else if (status === "in_progress") {
          stats.inProgress = stat._count.status;
        } else if (status === "available") {
          stats.available = stat._count.status;
        } else if (status === "locked") {
          stats.locked = stat._count.status;
        }
      });

      return { syncedCount, failed, stats };
    });

    // 5. Return success or partial success
    if (result.failed.length > 0) {
      return NextResponse.json(
        {
          success: false,
          error: "Some events failed to sync",
          synced: result.syncedCount,
          failedEvents: result.failed,
          stats: result.stats,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        synced: result.syncedCount,
        stats: result.stats,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error syncing quest progress:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
