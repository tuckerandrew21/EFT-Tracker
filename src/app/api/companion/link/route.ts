import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import bcrypt from "bcrypt";
import crypto from "crypto";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/lib/auth/auth-options";

/**
 * POST /api/companion/link - Generate a new companion token
 *
 * Generates a secure token for linking the Tauri companion app to a user's account.
 * Token is shown ONCE and cannot be retrieved later.
 */
export async function POST(request: NextRequest) {
  try {
    // 1. Check session authentication
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Unauthorized - No valid session" },
        { status: 401 }
      );
    }

    // 2. Parse request body
    const body = await request.json();
    const { deviceName, gameMode } = body;

    // Validate deviceName (optional but recommended)
    if (deviceName && typeof deviceName !== "string") {
      return NextResponse.json(
        { error: "Invalid deviceName - must be a string" },
        { status: 400 }
      );
    }

    // Validate gameMode (optional, defaults to PVP if provided)
    if (gameMode && !["PVP", "PVE"].includes(gameMode)) {
      return NextResponse.json(
        { error: "Invalid gameMode - must be PVP or PVE" },
        { status: 400 }
      );
    }

    // 3. Check device limit (5 per user)
    const tokenCount = await prisma.companionToken.count({
      where: {
        userId: session.user.id,
        revokedAt: null, // Only count active tokens
      },
    });

    if (tokenCount >= 5) {
      return NextResponse.json(
        {
          error:
            "Device limit reached - You can have a maximum of 5 active companion tokens. Please revoke an existing token to generate a new one.",
        },
        { status: 429 }
      );
    }

    // 4. Generate token: cmp_ + 32 hex characters
    const rawToken = `cmp_${crypto.randomBytes(16).toString("hex")}`;

    // 5. Hash token with bcrypt (cost factor 10 for ~100ms)
    const hashedToken = await bcrypt.hash(rawToken, 10);

    // 6. Store hashed token with last 4 chars as hint
    const tokenHint = rawToken.slice(-4);
    const companionToken = await prisma.companionToken.create({
      data: {
        userId: session.user.id,
        token: hashedToken,
        tokenHint: tokenHint,
        deviceName: deviceName || "Unnamed Device",
        gameMode: gameMode || "PVP",
        lastSeen: new Date(),
      },
    });

    // 7. Return unhashed token ONCE (never stored in plain text)
    return NextResponse.json(
      {
        token: rawToken,
        deviceName: companionToken.deviceName,
        createdAt: companionToken.createdAt.toISOString(),
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error generating companion token:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

/**
 * GET /api/companion/link - List all active companion tokens
 *
 * Returns all non-revoked tokens for the authenticated user.
 */
export async function GET() {
  try {
    // 1. Check session authentication
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Unauthorized - No valid session" },
        { status: 401 }
      );
    }

    // 2. Query active tokens (not revoked)
    const tokens = await prisma.companionToken.findMany({
      where: {
        userId: session.user.id,
        revokedAt: null,
      },
      orderBy: {
        createdAt: "desc",
      },
      select: {
        id: true,
        deviceName: true,
        gameMode: true,
        lastSeen: true,
        createdAt: true,
        // Explicitly exclude hashed token from response
      },
    });

    // 3. Return token list with ISO date strings
    return NextResponse.json(
      tokens.map((token) => ({
        id: token.id,
        deviceName: token.deviceName,
        gameMode: token.gameMode,
        lastSeen: token.lastSeen.toISOString(),
        createdAt: token.createdAt.toISOString(),
      })),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error listing companion tokens:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
