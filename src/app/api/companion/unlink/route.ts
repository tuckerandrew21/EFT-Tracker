import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/lib/auth/auth-options";

/**
 * DELETE /api/companion/unlink - Revoke a companion token
 *
 * This endpoint soft-deletes a companion token by setting its revokedAt timestamp.
 * The token will no longer be valid for authentication after revocation.
 */
export async function DELETE(request: NextRequest) {
  try {
    // 1. Check session authentication
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json(
        { success: false, error: "Unauthorized - No valid session" },
        { status: 401 }
      );
    }

    // 2. Parse request body
    const body = await request.json();
    const { tokenId } = body;

    if (!tokenId || typeof tokenId !== "string") {
      return NextResponse.json(
        { success: false, error: "Missing or invalid tokenId" },
        { status: 400 }
      );
    }

    // 3. Find token and verify ownership
    const token = await prisma.companionToken.findUnique({
      where: { id: tokenId },
    });

    if (!token) {
      return NextResponse.json(
        { success: false, error: "Token not found or already revoked" },
        { status: 404 }
      );
    }

    if (token.userId !== session.user.id) {
      return NextResponse.json(
        {
          success: false,
          error: "Forbidden - Token belongs to another user",
        },
        { status: 403 }
      );
    }

    if (token.revokedAt) {
      return NextResponse.json(
        { success: false, error: "Token already revoked" },
        { status: 404 }
      );
    }

    // 4. Soft delete: set revokedAt timestamp
    await prisma.companionToken.update({
      where: { id: tokenId },
      data: { revokedAt: new Date() },
    });

    // 5. Return success
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error revoking companion token:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
