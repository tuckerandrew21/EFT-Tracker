import bcrypt from "bcrypt";
import { prisma } from "@/lib/prisma";

/**
 * Validates a companion token and returns user information
 *
 * This function:
 * 1. Validates token format (cmp_[32 hex chars])
 * 2. Finds all non-revoked tokens
 * 3. Compares with bcrypt hash (O(n) operation)
 * 4. Updates lastSeen timestamp
 * 5. Returns user info if valid
 *
 * Performance Note: Does O(n) bcrypt comparisons where n = number of active tokens.
 * For typical usage (5 tokens per user, <1000 total users), this is acceptable.
 * If it becomes a bottleneck, consider adding a non-hashed token prefix index.
 */
export async function validateCompanionToken(token: string): Promise<{
  valid: boolean;
  userId?: string;
  userName?: string;
  error?: string;
}> {
  // 1. Validate format: cmp_ + 32 hex characters
  if (!/^cmp_[a-f0-9]{32}$/.test(token)) {
    return { valid: false, error: "Invalid token format" };
  }

  // 2. Find all non-revoked tokens (must fetch all to compare hashes)
  const tokens = await prisma.companionToken.findMany({
    where: { revokedAt: null },
    include: { user: true },
  });

  // 3. Compare with bcrypt (can't query by hash directly)
  for (const record of tokens) {
    const match = await bcrypt.compare(token, record.token);
    if (match) {
      // 4. Update lastSeen timestamp
      await prisma.companionToken.update({
        where: { id: record.id },
        data: { lastSeen: new Date() },
      });

      // 5. Return user info
      return {
        valid: true,
        userId: record.userId,
        userName: record.user.name || record.user.email,
      };
    }
  }

  return { valid: false, error: "Invalid or revoked token" };
}
