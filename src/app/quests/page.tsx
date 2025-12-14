"use client";

import { QuestsClient } from "./QuestsClient";
import { GuestBanner } from "@/components/guest-banner";

export default function QuestsPage() {
  return (
    <div className="flex-1 flex flex-col min-h-0">
      <GuestBanner />
      <QuestsClient />
    </div>
  );
}
