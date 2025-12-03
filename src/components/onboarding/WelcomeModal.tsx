"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  MousePointerClick,
  Filter,
  Trophy,
  Target,
  Sparkles,
} from "lucide-react";

interface WelcomeModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onGetStarted: () => void;
}

const tips = [
  {
    icon: MousePointerClick,
    title: "Click to Complete",
    description:
      "Click any available quest to mark it as completed. Click again to reset.",
  },
  {
    icon: Filter,
    title: "Filter by Trader",
    description:
      "Use the filter dropdown to focus on specific traders or quest types.",
  },
  {
    icon: Target,
    title: "Track Your Level",
    description:
      "Set your PMC level to see which quests are available at your level.",
  },
  {
    icon: Trophy,
    title: "Kappa Container",
    description:
      "Toggle Kappa-only mode to focus on quests required for the Kappa container.",
  },
];

export function WelcomeModal({
  open,
  onOpenChange,
  onGetStarted,
}: WelcomeModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md" showCloseButton={false}>
        <DialogHeader className="text-center">
          <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <Sparkles className="h-6 w-6 text-primary" />
          </div>
          <DialogTitle className="text-xl">
            Welcome to EFT Quest Tracker
          </DialogTitle>
          <DialogDescription>
            Track your Escape from Tarkov quest progress across all traders.
          </DialogDescription>
        </DialogHeader>

        <div className="py-4 space-y-4">
          {tips.map((tip, index) => (
            <div key={index} className="flex gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-muted">
                <tip.icon className="h-4 w-4 text-muted-foreground" />
              </div>
              <div>
                <p className="text-sm font-medium">{tip.title}</p>
                <p className="text-xs text-muted-foreground">
                  {tip.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <DialogFooter>
          <Button onClick={onGetStarted} className="w-full">
            Get Started
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
