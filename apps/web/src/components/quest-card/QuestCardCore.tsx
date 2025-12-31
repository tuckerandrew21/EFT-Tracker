/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck - React 19 memo component type compatibility
"use client";

import { memo, useMemo, useState } from "react";
import { ExternalLink, Info, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { getTraderColor, STATUS_COLORS, EFT_COLORS } from "@/lib/trader-colors";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { useLongPress } from "@/hooks/useLongPress";
import type { QuestWithProgress, QuestStatus } from "@/types";

// Responsive node sizes - built around 14px title / 12px level fonts
export const QUEST_CARD_WIDTH = 155;
export const QUEST_CARD_HEIGHT = 58;
export const QUEST_CARD_WIDTH_MOBILE = 130;

// Static styles extracted to module-level constants (prevents object recreation)
const KAPPA_BADGE_STYLE = { backgroundColor: "#FFD700" };
const ICON_BUTTON_STYLE = { color: STATUS_COLORS.locked.primary };
const TITLE_STYLE = { color: EFT_COLORS.goldOne };
const CHECKMARK_STYLE = { color: STATUS_COLORS.completed.primary };

export interface QuestCardCoreProps {
  quest: QuestWithProgress;
  playerLevel?: number | null;

  // Handlers (unified naming)
  onOpenDetails?: (questId: string) => void;
  onCycleStatus?: (questId: string, currentStatus: QuestStatus) => void;

  // Display variants
  showTraderName?: boolean; // true for list views (Maps page)
  showProgressBar?: boolean; // true for tree view
  mapFilter?: string | null; // for smart progress display
  compact?: boolean; // smaller sizing for tree nodes

  // State indicators
  isSaving?: boolean;

  // Focus mode (tree view only)
  isFocused?: boolean;
  isInFocusChain?: boolean;
  isDimmed?: boolean;

  // Tree-specific indicators
  isRoot?: boolean;
  isLeaf?: boolean;
  isKeyboardSelected?: boolean;

  // Additional className for wrapper control
  className?: string;
}

function QuestCardCoreComponent({
  quest,
  playerLevel,
  onOpenDetails,
  onCycleStatus,
  showTraderName = false,
  showProgressBar = false,
  mapFilter,
  compact = false,
  isSaving = false,
  isFocused = false,
  isInFocusChain = false,
  isDimmed = false,
  isRoot = false,
  isLeaf = false,
  isKeyboardSelected = false,
  className,
}: QuestCardCoreProps) {
  const traderColor = getTraderColor(quest.traderId);
  const statusColor = STATUS_COLORS[quest.computedStatus];
  const [isClicked, setIsClicked] = useState(false);

  // Level-based highlighting
  const isLevelAppropriate =
    playerLevel !== null &&
    playerLevel !== undefined &&
    quest.levelRequired <= playerLevel;
  const isUpcoming =
    playerLevel !== null &&
    playerLevel !== undefined &&
    quest.levelRequired > playerLevel &&
    quest.levelRequired <= playerLevel + 5;

  // Find cross-trader dependencies (prereqs from different traders)
  const crossTraderBadges = useMemo(() => {
    if (!quest.dependsOn) return [];

    const byTrader = new Map<string, { name: string; count: number }>();
    for (const dep of quest.dependsOn) {
      if (
        dep.requiredQuest.traderId.toLowerCase() !==
        quest.traderId.toLowerCase()
      ) {
        const traderId = dep.requiredQuest.traderId.toLowerCase();
        const existing = byTrader.get(traderId);
        if (existing) {
          existing.count++;
        } else {
          byTrader.set(traderId, {
            name: dep.requiredQuest.trader.name,
            count: 1,
          });
        }
      }
    }
    return Array.from(byTrader.entries()).map(([traderId, info]) => ({
      traderId,
      ...info,
    }));
  }, [quest.dependsOn, quest.traderId]);

  // Memoize style objects to prevent breaking memo equality checks
  const cardStyle = useMemo(() => {
    // All quests use trader color for border (dimmed gets gray)
    const borderColor = isDimmed ? "#636363" : traderColor.primary;

    return {
      width: compact ? QUEST_CARD_WIDTH : undefined,
      minHeight: compact ? QUEST_CARD_HEIGHT : 44,
      backgroundColor: isDimmed ? "#424242" : statusColor.bg,
      borderColor:
        quest.computedStatus === "available" && !isDimmed
          ? traderColor.primary
          : isDimmed
            ? "#636363"
            : statusColor.border,
      borderLeftWidth: 4,
      borderLeftColor: borderColor,
    };
  }, [
    isDimmed,
    statusColor.bg,
    statusColor.border,
    traderColor.primary,
    quest.computedStatus,
    compact,
  ]);

  const levelBadgeStyle = useMemo(
    () => ({
      color: isLevelAppropriate
        ? STATUS_COLORS.completed.primary
        : isUpcoming
          ? STATUS_COLORS.available.primary
          : STATUS_COLORS.locked.primary,
      fontWeight: isLevelAppropriate ? 600 : 400,
    }),
    [isLevelAppropriate, isUpcoming]
  );

  // Compute smart progress display based on map filter
  const progressDisplay = useMemo(() => {
    if (!showProgressBar) return null;
    if (!quest.objectives || quest.objectives.length === 0) return null;

    // Get relevant objectives based on map filter
    const objectives = mapFilter
      ? quest.objectives.filter((obj) => obj.map === mapFilter)
      : quest.objectives;

    if (objectives.length === 0) return null;

    // Check if this is a single numeric objective quest (like Insomnia)
    if (
      quest.objectives.length === 1 &&
      quest.objectives[0].progress?.[0]?.target
    ) {
      const obj = quest.objectives[0];
      const progress = obj.progress?.[0];
      if (progress?.target) {
        return {
          type: "single" as const,
          current: progress.current ?? 0,
          target: progress.target,
        };
      }
    }

    // If map filter is active, show map-specific progress
    if (mapFilter && objectives.length > 0) {
      // Sum up current/target for all objectives on this map
      let totalCurrent = 0;
      let totalTarget = 0;

      for (const obj of objectives) {
        const progress = obj.progress?.[0];
        if (progress?.target) {
          totalCurrent += progress.current ?? 0;
          totalTarget += progress.target;
        } else if (progress) {
          // Binary objective - count as 0/1 or 1/1
          totalCurrent += progress.completed ? 1 : 0;
          totalTarget += 1;
        }
      }

      if (totalTarget > 0) {
        return {
          type: "map" as const,
          current: totalCurrent,
          target: totalTarget,
          mapName: mapFilter,
        };
      }
    }

    // No map filter - show aggregate objective count
    let completed = 0;
    const total = quest.objectives.length;

    for (const obj of quest.objectives) {
      const progress = obj.progress?.[0];
      if (progress) {
        if (progress.target !== null && progress.current !== null) {
          // Numeric objective - complete if current >= target
          if (progress.current >= progress.target) completed++;
        } else if (progress.completed) {
          completed++;
        }
      }
    }

    return {
      type: "aggregate" as const,
      completed,
      total,
    };
  }, [quest.objectives, mapFilter, showProgressBar]);

  // Click handlers - UNIFIED: left-click opens details, right-click cycles status
  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 150);

    // Left-click opens quest details modal
    if (onOpenDetails) {
      onOpenDetails(quest.id);
    }
  };

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    // Right-click cycles quest status
    if (onCycleStatus) {
      onCycleStatus(quest.id, quest.computedStatus);
    }
  };

  const handleInfoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onOpenDetails) {
      onOpenDetails(quest.id);
    }
  };

  const handleInfoMouseDown = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleWikiLinkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (quest.wikiLink) {
      window.open(quest.wikiLink, "_blank", "noopener,noreferrer");
    }
  };

  const handleWikiLinkMouseDown = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  // Long-press handler for mobile (alternative to right-click - cycles quest status)
  const longPressHandlers = useLongPress({
    threshold: 500,
    onLongPress: () => {
      if (onCycleStatus && !isDimmed) {
        onCycleStatus(quest.id, quest.computedStatus);
      }
    },
  });

  return (
    <div
      onClick={handleClick}
      onContextMenu={handleContextMenu}
      {...longPressHandlers}
      className={cn(
        "relative cursor-pointer rounded border-2 p-2 transition-all duration-150",
        "hover:shadow-md active:scale-95",
        isClicked && "scale-95",
        quest.computedStatus === "locked" && !isDimmed && "opacity-70",
        quest.computedStatus === "completed" && !isDimmed && "opacity-80",
        quest.computedStatus === "available" &&
          !isDimmed &&
          "shadow-sm hover:shadow-lg",
        // Visual hierarchy indicators (only when not dimmed, tree view)
        isRoot && !isDimmed && "border-l-4 border-l-emerald-500",
        isLeaf && !isDimmed && "border-r-4 border-r-violet-500",
        // Focus mode styling
        isFocused && "ring-4 ring-blue-500 shadow-lg scale-105",
        isInFocusChain && !isFocused && "ring-2 ring-blue-300",
        isDimmed && "opacity-40 pointer-events-auto",
        // Level-based highlighting (only for available quests, not when keyboard selected)
        // Kappa quests use badge indicator, so skip ring highlighting for them
        isLevelAppropriate &&
          quest.computedStatus === "available" &&
          !isDimmed &&
          !isFocused &&
          !isKeyboardSelected &&
          !quest.kappaRequired &&
          "ring-2 ring-emerald-400 shadow-emerald-100",
        isUpcoming &&
          quest.computedStatus !== "completed" &&
          !isDimmed &&
          !isFocused &&
          !isKeyboardSelected &&
          !quest.kappaRequired &&
          "ring-1 ring-amber-300",
        // Keyboard navigation selection (orange ring to distinguish from focus)
        isKeyboardSelected &&
          !isFocused &&
          "ring-2 ring-orange-400 ring-offset-1 shadow-lg",
        className
      )}
      style={cardStyle}
    >
      {/* Kappa badge */}
      {quest.kappaRequired && (
        <div
          className={cn(
            "absolute -top-1 -right-1 rounded-full flex items-center justify-center font-bold text-white",
            compact ? "w-3 h-3 text-[7px]" : "w-4 h-4 text-[8px]"
          )}
          style={KAPPA_BADGE_STYLE}
          title="Required for Kappa"
        >
          K
        </div>
      )}

      {/* Cross-trader dependency badges */}
      {crossTraderBadges.length > 0 && !isDimmed && (
        <div
          className={cn(
            "flex gap-px",
            compact ? "absolute -top-1 left-1" : "mb-1 gap-0.5"
          )}
        >
          {crossTraderBadges.slice(0, 2).map((badge) => {
            const badgeColor = getTraderColor(badge.traderId);
            return (
              <div
                key={badge.traderId}
                className={cn(
                  "rounded font-medium text-white",
                  compact ? "px-0.5 text-[7px]" : "px-1 text-[8px]"
                )}
                style={{ backgroundColor: badgeColor.primary }}
                title={`Requires quest(s) from ${badge.name}`}
              >
                {badge.name.slice(0, 2)}
              </div>
            );
          })}
          {crossTraderBadges.length > 2 && (
            <div
              className={cn(
                "rounded font-medium text-white",
                compact ? "px-0.5 text-[7px]" : "px-1 text-[8px]"
              )}
              style={{ backgroundColor: "#636363" }}
            >
              +{crossTraderBadges.length - 2}
            </div>
          )}
        </div>
      )}

      {/* Saving spinner overlay */}
      {isSaving && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-black/20 rounded">
          <Loader2 className="w-5 h-5 animate-spin text-primary" />
        </div>
      )}

      {/* Completed checkmark overlay */}
      {quest.computedStatus === "completed" && !isSaving && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <svg
            className={cn("opacity-40", compact ? "w-5 h-5" : "w-6 h-6")}
            style={CHECKMARK_STYLE}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
      )}

      {/* Quest title */}
      <div
        className="font-semibold text-[14px] leading-tight line-clamp-2"
        style={TITLE_STYLE}
        title={quest.title}
      >
        {quest.title}
      </div>

      {/* Bottom row: level (+ trader name if shown) + action buttons */}
      <div className="flex items-center justify-between mt-1">
        <div className="flex items-center gap-2">
          {/* Trader name - shown in list views */}
          {showTraderName && (
            <span
              className="text-[12px] font-semibold"
              style={{ color: traderColor.primary }}
            >
              {quest.trader.name}
            </span>
          )}
          {/* Level badge */}
          <span className="flex items-center gap-0.5">
            <span
              className="text-[10px] uppercase tracking-wide"
              style={{ color: "var(--text-tertiary)" }}
            >
              Lv
            </span>
            <span className="text-[12px] font-semibold" style={levelBadgeStyle}>
              {quest.levelRequired}
            </span>
          </span>
          {/* Objective progress badge (tree view only) */}
          {progressDisplay && !isDimmed && (
            <span
              className="text-[10px] px-1 py-0.5 rounded"
              style={{
                backgroundColor: "rgba(0,0,0,0.3)",
                color:
                  progressDisplay.type === "aggregate"
                    ? progressDisplay.completed === progressDisplay.total
                      ? STATUS_COLORS.completed.primary
                      : "var(--text-secondary)"
                    : progressDisplay.current === progressDisplay.target
                      ? STATUS_COLORS.completed.primary
                      : "var(--text-secondary)",
              }}
            >
              {progressDisplay.type === "single" && (
                <>
                  {progressDisplay.current}/{progressDisplay.target}
                </>
              )}
              {progressDisplay.type === "map" && (
                <>
                  {progressDisplay.current}/{progressDisplay.target}
                </>
              )}
              {progressDisplay.type === "aggregate" && (
                <>
                  {progressDisplay.completed}/{progressDisplay.total}
                </>
              )}
            </span>
          )}
        </div>
        {/* Action buttons - info and wiki link */}
        <div className="flex items-center gap-1">
          {/* Info button - opens quest details */}
          {!isDimmed && onOpenDetails && (
            <Tooltip delayDuration={300}>
              <TooltipTrigger asChild>
                <button
                  type="button"
                  onClick={handleInfoClick}
                  onMouseDown={handleInfoMouseDown}
                  onTouchStart={(e) => e.stopPropagation()}
                  onTouchEnd={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    if (onOpenDetails) onOpenDetails(quest.id);
                  }}
                  className="w-6 h-6 flex items-center justify-center opacity-60 hover:opacity-100 transition-colors duration-150 rounded-full hover:bg-black/20 focus:outline-none focus:ring-1 focus:ring-offset-1 pointer-events-auto"
                  style={ICON_BUTTON_STYLE}
                  aria-label={`View ${quest.title} details`}
                >
                  <Info className="w-[14px] h-[14px]" />
                </button>
              </TooltipTrigger>
              <TooltipContent side="top" sideOffset={4}>
                <p className="text-xs">View Details</p>
              </TooltipContent>
            </Tooltip>
          )}
          {/* Wiki link */}
          {quest.wikiLink && !isDimmed && (
            <Tooltip delayDuration={300}>
              <TooltipTrigger asChild>
                <button
                  type="button"
                  onClick={handleWikiLinkClick}
                  onMouseDown={handleWikiLinkMouseDown}
                  onTouchStart={(e) => e.stopPropagation()}
                  onTouchEnd={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    if (quest.wikiLink) {
                      window.open(
                        quest.wikiLink,
                        "_blank",
                        "noopener,noreferrer"
                      );
                    }
                  }}
                  className="w-6 h-6 flex items-center justify-center opacity-60 hover:opacity-100 transition-colors duration-150 rounded-full hover:bg-black/20 focus:outline-none focus:ring-1 focus:ring-offset-1 pointer-events-auto"
                  style={ICON_BUTTON_STYLE}
                  aria-label={`Open ${quest.title} wiki page`}
                >
                  <ExternalLink className="w-[14px] h-[14px]" />
                </button>
              </TooltipTrigger>
              <TooltipContent side="top" sideOffset={4}>
                <p className="text-xs">View on Tarkov Wiki</p>
              </TooltipContent>
            </Tooltip>
          )}
        </div>
      </div>
    </div>
  );
}

export const QuestCardCore = memo(QuestCardCoreComponent);
