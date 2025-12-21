"use client";

import { ChevronDown, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import type { QuestType } from "@/types";

const QUEST_TYPES: { value: QuestType; label: string }[] = [
  { value: "standard", label: "Standard" },
  { value: "pvp_zone", label: "PVP Zone" },
  { value: "reputation", label: "Reputation (Fence)" },
  { value: "lightkeeper", label: "Lightkeeper" },
  { value: "faction_bear", label: "BEAR Only" },
  { value: "faction_usec", label: "USEC Only" },
  { value: "story", label: "Story" },
  { value: "prestige", label: "Prestige" },
];

interface QuestTypeMultiSelectProps {
  selectedTypes: QuestType[];
  onChange: (types: QuestType[]) => void;
}

export function QuestTypeMultiSelect({
  selectedTypes,
  onChange,
}: QuestTypeMultiSelectProps) {
  const handleToggle = (type: QuestType) => {
    const newTypes = selectedTypes.includes(type)
      ? selectedTypes.filter((t) => t !== type)
      : [...selectedTypes, type];
    onChange(newTypes);
  };

  const getLabel = () => {
    if (selectedTypes.length === 0) return "All Types";
    if (selectedTypes.length === 1) {
      return QUEST_TYPES.find((t) => t.value === selectedTypes[0])?.label;
    }
    return `Types (${selectedTypes.length})`;
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="h-9 min-w-[120px] justify-between gap-1"
        >
          <span className="truncate">{getLabel()}</span>
          <ChevronDown className="h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-2" align="start">
        <div className="flex flex-col gap-1">
          {QUEST_TYPES.map((type) => {
            const isSelected = selectedTypes.includes(type.value);
            return (
              <button
                key={type.value}
                type="button"
                onClick={() => handleToggle(type.value)}
                className={`flex items-center gap-2 w-full px-2 py-1.5 text-sm rounded transition-colors text-left ${
                  isSelected
                    ? "bg-primary/10 text-foreground"
                    : "hover:bg-muted text-muted-foreground"
                }`}
              >
                <span className="flex-1">{type.label}</span>
                {isSelected && (
                  <Check className="h-4 w-4 shrink-0 text-primary" />
                )}
              </button>
            );
          })}
        </div>
        <div className="mt-2 pt-2 border-t">
          <button
            type="button"
            onClick={() => onChange([])}
            className="w-full px-2 py-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            Clear selection (show all)
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
