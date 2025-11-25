"use client";

import { useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { X, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";

export function GuestBanner() {
  const { status } = useSession();
  const [dismissed, setDismissed] = useState(false);

  // Don't show if authenticated or dismissed
  if (status === "authenticated" || status === "loading" || dismissed) {
    return null;
  }

  return (
    <div className="bg-primary/10 border-b border-primary/20 px-3 py-2">
      <div className="container mx-auto flex items-center justify-between gap-2 text-sm">
        <div className="flex items-center gap-2 flex-wrap">
          <UserPlus className="h-4 w-4 text-primary shrink-0" />
          <span className="text-foreground">
            <span className="hidden sm:inline">
              You&apos;re browsing as a guest.{" "}
            </span>
            <span className="font-medium">Sign up to save your progress!</span>
          </span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <Button variant="default" size="sm" asChild className="h-7 text-xs">
            <Link href="/register">Sign Up</Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7"
            onClick={() => setDismissed(true)}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Dismiss</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
