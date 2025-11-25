import type { Metadata } from "next";
import { auth } from "@/lib/auth";
import { QuestsClient } from "./QuestsClient";
import { GuestBanner } from "@/components/guest-banner";

export const metadata: Metadata = {
  title: "Quest Tracker - EFT Quest Tracker",
  description:
    "Track your Escape from Tarkov quest progress with an interactive dependency tree visualization.",
};

export default async function QuestsPage() {
  const session = await auth();

  return (
    <div className="h-[calc(100vh-4rem)] md:h-[calc(100vh-4.5rem)] flex flex-col">
      <GuestBanner />
      <div className="px-3 md:px-4 py-2 md:py-3 border-b bg-background">
        <div className="container mx-auto flex items-center justify-between gap-2">
          <div className="min-w-0">
            <h1 className="text-xl md:text-2xl font-bold">Quest Tracker</h1>
            <p className="text-xs text-muted-foreground hidden sm:block">
              Click a quest to cycle status: Available → In Progress → Completed
            </p>
          </div>
          {session && (
            <div className="text-right shrink-0">
              <p className="text-xs md:text-sm text-muted-foreground truncate max-w-[150px] md:max-w-none">
                {session.user?.email}
              </p>
            </div>
          )}
        </div>
      </div>
      <QuestsClient />
    </div>
  );
}
