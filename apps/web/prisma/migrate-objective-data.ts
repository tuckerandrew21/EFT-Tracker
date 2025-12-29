import "dotenv/config";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";

/**
 * Migrate existing objective data from `map` (single) to `maps[]` (array).
 *
 * This script:
 * 1. Finds all objectives with a non-null `map` field
 * 2. Sets `maps = [map]` (wraps single value in array)
 * 3. For objectives with null map, sets `maps = []` (empty array)
 *
 * Safe to run multiple times - idempotent.
 */

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("Starting objective data migration (map → maps[])...\n");

  // Get all objectives
  const objectives = await prisma.objective.findMany({
    select: {
      id: true,
      map: true,
      maps: true,
      description: true,
    },
  });

  console.log(`Found ${objectives.length} total objectives`);

  let migrated = 0;
  let skipped = 0;
  let alreadyMigrated = 0;

  for (const obj of objectives) {
    // Skip if maps[] already has values (already migrated)
    if (obj.maps && obj.maps.length > 0) {
      alreadyMigrated++;
      continue;
    }

    // Determine new maps array value
    const newMaps = obj.map ? [obj.map] : [];

    // Update the objective
    await prisma.objective.update({
      where: { id: obj.id },
      data: { maps: newMaps },
    });

    if (obj.map) {
      migrated++;
    } else {
      skipped++; // No map to migrate, just set empty array
    }
  }

  console.log(`\n✅ Migration complete!`);
  console.log(`   - Migrated: ${migrated} objectives (map → maps[])`);
  console.log(`   - Set empty: ${skipped} objectives (no map → empty [])`);
  console.log(`   - Already done: ${alreadyMigrated} objectives (had maps[])`);

  // Verification
  const withMaps = await prisma.objective.count({
    where: { maps: { isEmpty: false } },
  });
  const withoutMaps = await prisma.objective.count({
    where: { maps: { isEmpty: true } },
  });

  console.log(`\nVerification:`);
  console.log(`   - Objectives with maps[]: ${withMaps}`);
  console.log(`   - Objectives without maps[]: ${withoutMaps}`);
}

main()
  .catch((e) => {
    console.error("Migration failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
