import type { Metadata } from "next";
import { MapsClient } from "./MapsClient";
import { GuestBanner } from "@/components/guest-banner";

export const metadata: Metadata = {
  title: "Maps - EFT Quest Tracker",
  description:
    "View your available Escape from Tarkov quests organized by map location.",
};

export default function MapsPage() {
  return (
    <div className="flex-1 flex flex-col min-h-0">
      <GuestBanner />
      <MapsClient />
    </div>
  );
}
