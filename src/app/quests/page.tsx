import { auth } from "@/lib/auth";

export default async function QuestsPage() {
  const session = await auth();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Quest Tracker</h1>
      <p className="text-muted-foreground mb-8">
        {session
          ? `Welcome back, ${session.user?.email}! Your progress will be saved.`
          : "Sign in to save your quest progress."}
      </p>
      <div className="p-8 border rounded-lg bg-muted/50 text-center">
        <p className="text-muted-foreground">
          Quest tree visualization coming in Phase 2...
        </p>
      </div>
    </div>
  );
}
