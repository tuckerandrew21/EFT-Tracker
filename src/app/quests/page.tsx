import { auth } from "@/lib/auth";
import { QuestsClient } from "./QuestsClient";

export default async function QuestsPage() {
  const session = await auth();

  return (
    <div className="h-[calc(100vh-4rem)] flex flex-col">
      <div className="px-4 py-3 border-b bg-background">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold">Quest Tracker</h1>
          <p className="text-sm text-muted-foreground">
            {session
              ? `Tracking progress for ${session.user?.email}`
              : "Sign in to save your progress"}
          </p>
        </div>
      </div>
      <QuestsClient />
    </div>
  );
}
