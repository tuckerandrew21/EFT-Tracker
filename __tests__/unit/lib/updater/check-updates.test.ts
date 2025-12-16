/**
 * Unit Tests - Tauri Auto-Updater
 *
 * Tests the update checking functionality including:
 * - Successful update detection
 * - No update available scenario
 * - Error handling during update check
 * - User interaction flows (accept/decline)
 */
import { describe, it, expect, beforeEach, vi } from "vitest";

// Mock Tauri plugins before importing the module under test
const mockCheck = vi.fn();
const mockDownloadAndInstall = vi.fn();
const mockRelaunch = vi.fn();

vi.mock("@tauri-apps/plugin-updater", () => ({
  check: mockCheck,
}));

vi.mock("@tauri-apps/plugin-process", () => ({
  relaunch: mockRelaunch,
}));

// Now import the module under test
import {
  checkForUpdates,
  checkForUpdatesSilently,
} from "@/lib/updater/check-updates";

// Mock window.confirm
const mockConfirm = vi.fn();
global.window.confirm = mockConfirm;

describe("checkForUpdates", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockConfirm.mockReset();
    mockCheck.mockReset();
    mockDownloadAndInstall.mockReset();
    mockRelaunch.mockReset();
  });

  it("should return false when no update is available", async () => {
    mockCheck.mockResolvedValue(null);

    const result = await checkForUpdates();

    expect(result).toBe(false);
    expect(mockCheck).toHaveBeenCalled();
  });

  it("should prompt user and install update when available and user accepts", async () => {
    mockDownloadAndInstall.mockResolvedValue(undefined);
    mockRelaunch.mockResolvedValue(undefined);

    mockCheck.mockResolvedValue({
      version: "1.0.1",
      currentVersion: "1.0.0",
      downloadAndInstall: mockDownloadAndInstall,
    });

    // User accepts both prompts
    mockConfirm.mockReturnValueOnce(true).mockReturnValueOnce(true);

    const result = await checkForUpdates();

    expect(result).toBe(true);
    expect(mockConfirm).toHaveBeenCalledTimes(2);
    expect(mockDownloadAndInstall).toHaveBeenCalled();
    expect(mockRelaunch).toHaveBeenCalled();
  });

  it("should not install update when user declines first prompt", async () => {
    mockCheck.mockResolvedValue({
      version: "1.0.1",
      currentVersion: "1.0.0",
      downloadAndInstall: mockDownloadAndInstall,
    });

    // User declines install prompt
    mockConfirm.mockReturnValueOnce(false);

    const result = await checkForUpdates();

    expect(result).toBe(false);
    expect(mockDownloadAndInstall).not.toHaveBeenCalled();
    expect(mockConfirm).toHaveBeenCalledTimes(1);
  });

  it("should not relaunch when user declines second prompt", async () => {
    mockDownloadAndInstall.mockResolvedValue(undefined);

    mockCheck.mockResolvedValue({
      version: "1.0.1",
      currentVersion: "1.0.0",
      downloadAndInstall: mockDownloadAndInstall,
    });

    // User accepts install but declines relaunch
    mockConfirm.mockReturnValueOnce(true).mockReturnValueOnce(false);

    const result = await checkForUpdates();

    expect(result).toBe(true);
    expect(mockDownloadAndInstall).toHaveBeenCalled();
    expect(mockRelaunch).not.toHaveBeenCalled();
  });

  it("should handle errors gracefully", async () => {
    const error = new Error("Network error");
    mockCheck.mockRejectedValue(error);

    const result = await checkForUpdates();

    expect(result).toBe(false);
  });
});

describe("checkForUpdatesSilently", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockCheck.mockReset();
  });

  it("should return true when update is available", async () => {
    mockCheck.mockResolvedValue({
      version: "1.0.1",
      currentVersion: "1.0.0",
    });

    const result = await checkForUpdatesSilently();

    expect(result).toBe(true);
  });

  it("should return false when no update is available", async () => {
    mockCheck.mockResolvedValue(null);

    const result = await checkForUpdatesSilently();

    expect(result).toBe(false);
  });

  it("should handle errors and return false", async () => {
    const error = new Error("Connection timeout");
    mockCheck.mockRejectedValue(error);

    const result = await checkForUpdatesSilently();

    expect(result).toBe(false);
  });
});
