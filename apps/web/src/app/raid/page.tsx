import type { Metadata } from "next";
import { RaidClient } from "./RaidClient";
import { GuestBanner } from "@/components/guest-banner";

export const metadata: Metadata = {
  title: "Raid Planner - EFT Quest Tracker",
  description:
    "Plan your Escape from Tarkov raids by viewing quest objectives organized by map.",
};

export default function RaidPage() {
  return (
    <div className="flex-1 flex flex-col min-h-0">
      <GuestBanner />
      <RaidClient />
    </div>
  );
}
