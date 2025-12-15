import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { validateCompanionToken } from "@/lib/auth/validate-companion-token";

/**
 * POST /api/companion/status - Validate companion token and return user info
 *
 * This endpoint validates a companion token from the Authorization header
 * and returns user information with quest statistics.
 */
export async function POST(request: NextRequest) {
  try {
    // 1. Extract token from Authorization header
    const authHeader = request.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json(
        { valid: false, error: "Missing or invalid Authorization header" },
        { status: 401 }
      );
    }

    const token = authHeader.substring(7); // Remove "Bearer " prefix

    // 2. Validate token using shared utility
    const validation = await validateCompanionToken(token);

    if (!validation.valid) {
      return NextResponse.json(
        { valid: false, error: validation.error },
        { status: 401 }
      );
    }

    // 3. Query quest stats grouped by status
    const questStats = await prisma.questProgress.groupBy({
      by: ["status"],
      where: { userId: validation.userId },
      _count: { status: true },
    });

    // 4. Build stats object with all statuses
    const stats = {
      completed: 0,
      inProgress: 0,
      available: 0,
      locked: 0,
    };

    // Map database results to stats object
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

    // 5. Return flat response (NOT nested)
    return NextResponse.json(
      {
        valid: true,
        userId: validation.userId,
        userName: validation.userName,
        stats,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error validating companion token:", error);
    return NextResponse.json(
      { valid: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
