import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">EFT Quest Tracker</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Track your Escape from Tarkov quest progress across all traders with
          dependency visualization and wiki integration.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/quests">View Quests</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/register">Get Started</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
