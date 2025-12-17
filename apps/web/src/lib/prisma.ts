import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

function createPrismaClient() {
  // Lazy import env to avoid validation errors during build time
  // env.ts validates required env vars, which aren't available during 'next build'
  // Using dynamic require prevents the module from being evaluated at import time
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { env } = require("./env") as typeof import("./env");

  const pool = new Pool({
    connectionString: env.DATABASE_URL,
    // Connection pool configuration optimized for Neon Free Tier
    // Neon Free Tier limit: 20 total connections
    max: 10, // Maximum connections in pool (50% of Neon limit)
    idleTimeoutMillis: 30000, // Close idle connections after 30 seconds
    connectionTimeoutMillis: 10000, // Fail fast if connection takes >10 seconds
  });
  const adapter = new PrismaPg(pool);
  return new PrismaClient({ adapter });
}

// Lazy initialization: store in global object but don't initialize until first use
if (!globalForPrisma.prisma) {
  globalForPrisma.prisma = undefined;
}

export function getPrismaClient() {
  if (!globalForPrisma.prisma) {
    globalForPrisma.prisma = createPrismaClient();
  }
  return globalForPrisma.prisma;
}

// For backwards compatibility, export as a getter
export const prisma = new Proxy({} as PrismaClient, {
  get(target, prop) {
    const client = getPrismaClient();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (client as any)[prop];
  },
});
