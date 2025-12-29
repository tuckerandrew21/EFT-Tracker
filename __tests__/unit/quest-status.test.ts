/**
 * Unit tests for quest status computation utility
 */

import { describe, it, expect } from "vitest";
import {
  computeQuestStatus,
  computeObjectiveProgress,
  shouldAutoCompleteQuest,
  wouldObjectiveChangeQuestStatus,
  type ObjectiveWithProgress,
} from "../../apps/web/src/lib/quest-status";

describe("computeObjectiveProgress", () => {
  it("returns zeros for empty objectives array", () => {
    const result = computeObjectiveProgress([]);
    expect(result).toEqual({
      total: 0,
      completed: 0,
      requiredTotal: 0,
      requiredCompleted: 0,
    });
  });

  it("counts all objectives as required when none are optional", () => {
    const objectives: ObjectiveWithProgress[] = [
      { id: "1", optional: false, progress: [{ completed: true }] },
      { id: "2", optional: false, progress: [{ completed: false }] },
      { id: "3", optional: false, progress: [] },
    ];
    const result = computeObjectiveProgress(objectives);
    expect(result).toEqual({
      total: 3,
      completed: 1,
      requiredTotal: 3,
      requiredCompleted: 1,
    });
  });

  it("separates optional and required objectives", () => {
    const objectives: ObjectiveWithProgress[] = [
      { id: "1", optional: false, progress: [{ completed: true }] },
      { id: "2", optional: true, progress: [{ completed: true }] },
      { id: "3", optional: false, progress: [{ completed: false }] },
      { id: "4", optional: true, progress: [] },
    ];
    const result = computeObjectiveProgress(objectives);
    expect(result).toEqual({
      total: 4,
      completed: 2,
      requiredTotal: 2,
      requiredCompleted: 1,
    });
  });

  it("handles objectives with null progress", () => {
    const objectives: ObjectiveWithProgress[] = [
      { id: "1", optional: false, progress: null },
      { id: "2", optional: false, progress: undefined },
    ];
    const result = computeObjectiveProgress(objectives);
    expect(result).toEqual({
      total: 2,
      completed: 0,
      requiredTotal: 2,
      requiredCompleted: 0,
    });
  });
});

describe("computeQuestStatus", () => {
  it("returns LOCKED when stored status is LOCKED", () => {
    const objectives: ObjectiveWithProgress[] = [
      { id: "1", optional: false, progress: [{ completed: true }] },
    ];
    const result = computeQuestStatus("LOCKED", objectives);
    expect(result).toBe("LOCKED");
  });

  it("returns stored status when no objectives", () => {
    expect(computeQuestStatus("AVAILABLE", [])).toBe("AVAILABLE");
    expect(computeQuestStatus("IN_PROGRESS", [])).toBe("IN_PROGRESS");
    expect(computeQuestStatus("COMPLETED", [])).toBe("COMPLETED");
  });

  it("returns default status when no objectives and null stored status", () => {
    expect(computeQuestStatus(null, [])).toBe("AVAILABLE");
    expect(computeQuestStatus(null, [], "LOCKED")).toBe("LOCKED");
  });

  it("returns COMPLETED when all required objectives complete", () => {
    const objectives: ObjectiveWithProgress[] = [
      { id: "1", optional: false, progress: [{ completed: true }] },
      { id: "2", optional: false, progress: [{ completed: true }] },
      { id: "3", optional: true, progress: [{ completed: false }] },
    ];
    const result = computeQuestStatus("AVAILABLE", objectives);
    expect(result).toBe("COMPLETED");
  });

  it("returns IN_PROGRESS when some required objectives complete", () => {
    const objectives: ObjectiveWithProgress[] = [
      { id: "1", optional: false, progress: [{ completed: true }] },
      { id: "2", optional: false, progress: [{ completed: false }] },
    ];
    const result = computeQuestStatus("AVAILABLE", objectives);
    expect(result).toBe("IN_PROGRESS");
  });

  it("returns stored status when no objectives complete", () => {
    const objectives: ObjectiveWithProgress[] = [
      { id: "1", optional: false, progress: [{ completed: false }] },
      { id: "2", optional: false, progress: [] },
    ];
    expect(computeQuestStatus("AVAILABLE", objectives)).toBe("AVAILABLE");
    expect(computeQuestStatus("IN_PROGRESS", objectives)).toBe("IN_PROGRESS");
  });

  it("treats all objectives as required when none are marked optional", () => {
    const objectives: ObjectiveWithProgress[] = [
      { id: "1", optional: false, progress: [{ completed: true }] },
      { id: "2", optional: false, progress: [{ completed: true }] },
    ];
    const result = computeQuestStatus("AVAILABLE", objectives);
    expect(result).toBe("COMPLETED");
  });

  it("ignores optional objectives for completion", () => {
    const objectives: ObjectiveWithProgress[] = [
      { id: "1", optional: false, progress: [{ completed: true }] },
      { id: "2", optional: true, progress: [{ completed: false }] },
    ];
    const result = computeQuestStatus("AVAILABLE", objectives);
    expect(result).toBe("COMPLETED");
  });

  it("returns default when null stored status and no progress", () => {
    const objectives: ObjectiveWithProgress[] = [
      { id: "1", optional: false, progress: [] },
    ];
    expect(computeQuestStatus(null, objectives)).toBe("AVAILABLE");
    expect(computeQuestStatus(null, objectives, "LOCKED")).toBe("LOCKED");
  });
});

describe("shouldAutoCompleteQuest", () => {
  it("returns false for empty objectives", () => {
    expect(shouldAutoCompleteQuest([])).toBe(false);
  });

  it("returns true when all required objectives complete", () => {
    const objectives: ObjectiveWithProgress[] = [
      { id: "1", optional: false, progress: [{ completed: true }] },
      { id: "2", optional: false, progress: [{ completed: true }] },
    ];
    expect(shouldAutoCompleteQuest(objectives)).toBe(true);
  });

  it("returns true when all required complete even with optional incomplete", () => {
    const objectives: ObjectiveWithProgress[] = [
      { id: "1", optional: false, progress: [{ completed: true }] },
      { id: "2", optional: true, progress: [{ completed: false }] },
    ];
    expect(shouldAutoCompleteQuest(objectives)).toBe(true);
  });

  it("returns false when some required objectives incomplete", () => {
    const objectives: ObjectiveWithProgress[] = [
      { id: "1", optional: false, progress: [{ completed: true }] },
      { id: "2", optional: false, progress: [{ completed: false }] },
    ];
    expect(shouldAutoCompleteQuest(objectives)).toBe(false);
  });

  it("treats all as required when no optional objectives", () => {
    const objectives: ObjectiveWithProgress[] = [
      { id: "1", optional: false, progress: [{ completed: true }] },
      { id: "2", optional: false, progress: [{ completed: false }] },
    ];
    expect(shouldAutoCompleteQuest(objectives)).toBe(false);
  });

  it("requires all objectives when all are optional", () => {
    const objectivesIncomplete: ObjectiveWithProgress[] = [
      { id: "1", optional: true, progress: [{ completed: true }] },
      { id: "2", optional: true, progress: [{ completed: false }] },
    ];
    expect(shouldAutoCompleteQuest(objectivesIncomplete)).toBe(false);

    const objectivesComplete: ObjectiveWithProgress[] = [
      { id: "1", optional: true, progress: [{ completed: true }] },
      { id: "2", optional: true, progress: [{ completed: true }] },
    ];
    expect(shouldAutoCompleteQuest(objectivesComplete)).toBe(true);
  });
});

describe("wouldObjectiveChangeQuestStatus", () => {
  it("detects status change from AVAILABLE to IN_PROGRESS", () => {
    const objectives: ObjectiveWithProgress[] = [
      { id: "1", optional: false, progress: [{ completed: false }] },
      { id: "2", optional: false, progress: [{ completed: false }] },
    ];
    const result = wouldObjectiveChangeQuestStatus(
      "AVAILABLE",
      objectives,
      "1",
      true
    );
    expect(result.wouldChange).toBe(true);
    expect(result.newStatus).toBe("IN_PROGRESS");
  });

  it("detects status change from IN_PROGRESS to COMPLETED", () => {
    const objectives: ObjectiveWithProgress[] = [
      { id: "1", optional: false, progress: [{ completed: true }] },
      { id: "2", optional: false, progress: [{ completed: false }] },
    ];
    const result = wouldObjectiveChangeQuestStatus(
      "IN_PROGRESS",
      objectives,
      "2",
      true
    );
    expect(result.wouldChange).toBe(true);
    expect(result.newStatus).toBe("COMPLETED");
  });

  it("returns no change when already complete", () => {
    const objectives: ObjectiveWithProgress[] = [
      { id: "1", optional: false, progress: [{ completed: true }] },
      { id: "2", optional: false, progress: [{ completed: true }] },
    ];
    const result = wouldObjectiveChangeQuestStatus(
      "COMPLETED",
      objectives,
      "1",
      true
    );
    expect(result.wouldChange).toBe(false);
    expect(result.newStatus).toBe("COMPLETED");
  });

  it("respects LOCKED status", () => {
    const objectives: ObjectiveWithProgress[] = [
      { id: "1", optional: false, progress: [{ completed: false }] },
    ];
    const result = wouldObjectiveChangeQuestStatus(
      "LOCKED",
      objectives,
      "1",
      true
    );
    expect(result.wouldChange).toBe(false);
    expect(result.newStatus).toBe("LOCKED");
  });
});
