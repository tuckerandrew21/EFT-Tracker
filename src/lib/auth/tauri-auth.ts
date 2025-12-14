/**
 * Tauri Authentication Helpers
 *
 * Handles authentication for the Tauri companion app.
 * Uses token-based authentication (companion tokens).
 */

import { tauriApiClient } from "../api/tauri-client";

/**
 * Check authentication status using companion token
 */
export async function checkAuthStatus(): Promise<{
  user: { id: string; email: string; name?: string } | null;
}> {
  try {
    const session = await tauriApiClient.get<{
      user?: { id: string; email: string; name?: string };
    }>("/api/auth/session");

    return {
      user: session.user || null,
    };
  } catch (error) {
    console.error("Failed to check auth status:", error);
    return { user: null };
  }
}

/**
 * Sign out the user (clear companion token)
 */
export async function signOut(): Promise<void> {
  try {
    await tauriApiClient.post("/api/auth/signout", {});
  } catch (error) {
    console.error("Failed to sign out:", error);
    throw error;
  }
}
