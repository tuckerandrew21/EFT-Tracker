import "dotenv/config";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";

/**
 * Backfill ObjectiveProgress records for users with completed quests.
 *
 * This script:
 * 1. Finds all QuestProgress records with status = COMPLETED
 * 2. For each completed quest, gets all objectives
 * 3. Creates ObjectiveProgress records with completed = true
 *
 * This ensures existing quest completions are reflected in the new
 * objective-level tracking system.
 *
 * Safe to run multiple times - uses upsert (idempotent).
 */

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("Backfilling ObjectiveProgress for completed quests...\n");

  // Get all completed quest progress records
  const completedProgress = await prisma.questProgress.findMany({
    where: { status: "COMPLETED" },
    select: {
      userId: true,
      questId: true,
      quest: {
        select: {
          title: true,
          objectives: {
            select: { id: true },
          },
        },
      },
    },
  });

  console.log(`Found ${completedProgress.length} completed quests`);

  let created = 0;
  let skipped = 0;
  const usersProcessed = new Set<string>();

  for (const progress of completedProgress) {
    usersProcessed.add(progress.userId);

    for (const objective of progress.quest.objectives) {
      // Check if ObjectiveProgress already exists
      const existing = await prisma.objectiveProgress.findUnique({
        where: {
          userId_objectiveId: {
            userId: progress.userId,
            objectiveId: objective.id,
          },
        },
      });

      if (existing) {
        skipped++;
        continue;
      }

      // Create ObjectiveProgress for this completed quest
      await prisma.objectiveProgress.create({
        data: {
          userId: progress.userId,
          objectiveId: objective.id,
          completed: true,
          syncSource: "WEB", // Backfilled from web progress
        },
      });
      created++;
    }
  }

  console.log(`\n✅ Backfill complete!`);
  console.log(`   - Created: ${created} ObjectiveProgress records`);
  console.log(`   - Skipped (already exist): ${skipped}`);
  console.log(`   - Users processed: ${usersProcessed.size}`);

  // Verification
  const totalObjectiveProgress = await prisma.objectiveProgress.count();
  const completedObjectiveProgress = await prisma.objectiveProgress.count({
    where: { completed: true },
  });

  console.log(`\nVerification:`);
  console.log(
    `   - Total ObjectiveProgress records: ${totalObjectiveProgress}`
  );
  console.log(`   - Completed: ${completedObjectiveProgress}`);
}

main()
  .catch((e) => {
    console.error("Backfill failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
