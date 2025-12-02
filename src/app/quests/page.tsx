import type { Metadata } from "next";
import { QuestsClient } from "./QuestsClient";
import { GuestBanner } from "@/components/guest-banner";

export const metadata: Metadata = {
  title: "Quest Tracker - EFT Quest Tracker",
  description:
    "Track your Escape from Tarkov quest progress with an interactive dependency tree visualization.",
};

export default function QuestsPage() {
  return (
    <div className="h-[calc(100vh-4rem)] md:h-[calc(100vh-4.5rem)] flex flex-col">
      <GuestBanner />
      <QuestsClient />
    </div>
  );
}
