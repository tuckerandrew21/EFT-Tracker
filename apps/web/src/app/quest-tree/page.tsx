import type { Metadata } from "next";
import { QuestTreeClient } from "./QuestTreeClient";
import { GuestBanner } from "@/components/guest-banner";

export const metadata: Metadata = {
  title: "Quest Tree - EFT Quest Tracker",
  description:
    "Track your Escape from Tarkov quest progress with an interactive dependency tree visualization.",
};

export default function QuestTreePage() {
  return (
    <div className="flex-1 flex flex-col min-h-0">
      <GuestBanner />
      <QuestTreeClient />
    </div>
  );
}
