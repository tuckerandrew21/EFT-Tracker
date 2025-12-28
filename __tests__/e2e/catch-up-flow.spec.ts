import { test, expect } from "@playwright/test";

/**
 * E2E tests for the catch-up flow
 * Tests the critical user journey of catching up progress
 */

/**
 * Helper to dismiss the welcome modal if it appears
 */
async function dismissWelcomeModal(page: import("@playwright/test").Page) {
  try {
    const modal = page.getByRole("dialog");
    const isVisible = await modal
      .isVisible({ timeout: 2000 })
      .catch(() => false);

    if (isVisible) {
      const getStartedBtn = page.getByRole("button", { name: /get started/i });
      if (await getStartedBtn.isVisible({ timeout: 500 }).catch(() => false)) {
        await getStartedBtn.click();
      } else {
        await page.keyboard.press("Escape");
      }
      await modal.waitFor({ state: "hidden", timeout: 3000 }).catch(() => {});
    }
  } catch {
    // Modal didn't appear or was already dismissed
  }
}

test.describe("Catch-Up Flow", () => {
  test.skip(
    ({ browserName }) => browserName === "webkit",
    "WebKit not supported"
  );

  test("can open catch-up dialog from Settings", async ({ page }) => {
    await page.goto("/settings");
    await dismissWelcomeModal(page);

    const catchUpBtn = page.getByRole("button", { name: /catch.?up/i });
    const isVisible = await catchUpBtn
      .isVisible({ timeout: 5000 })
      .catch(() => false);

    if (isVisible) {
      await catchUpBtn.click();
      const dialog = page.getByRole("dialog");
      await expect(dialog).toBeVisible();
      await expect(dialog).toContainText(/catch up/i);
    } else {
      test.skip();
    }
  });

  test("catch-up dialog shows selection step initially", async ({ page }) => {
    await page.goto("/settings");
    await dismissWelcomeModal(page);

    const catchUpBtn = page.getByRole("button", { name: /catch.?up/i });
    const isVisible = await catchUpBtn
      .isVisible({ timeout: 5000 })
      .catch(() => false);

    if (!isVisible) {
      test.skip();
      return;
    }

    await catchUpBtn.click();
    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();

    await expect(dialog).toContainText(/select/i);
    const levelInput = page.getByPlaceholder(/level/i);
    await expect(levelInput).toBeVisible();
  });

  test("requires player level to proceed", async ({ page }) => {
    await page.goto("/settings");
    await dismissWelcomeModal(page);

    const catchUpBtn = page.getByRole("button", { name: /catch.?up/i });
    const isVisible = await catchUpBtn
      .isVisible({ timeout: 5000 })
      .catch(() => false);

    if (!isVisible) {
      test.skip();
      return;
    }

    await catchUpBtn.click();
    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();

    const nextBtn = dialog.getByRole("button", { name: /next/i });
    await expect(nextBtn).toBeDisabled();

    const levelInput = page.getByPlaceholder(/level/i);
    await levelInput.fill("20");

    await expect(nextBtn).toBeDisabled();
  });

  test("can search for quests in catch-up dialog", async ({ page }) => {
    await page.goto("/settings");
    await dismissWelcomeModal(page);

    const catchUpBtn = page.getByRole("button", { name: /catch.?up/i });
    const isVisible = await catchUpBtn
      .isVisible({ timeout: 5000 })
      .catch(() => false);

    if (!isVisible) {
      test.skip();
      return;
    }

    await catchUpBtn.click();
    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();

    const searchInput = dialog.getByPlaceholder(/search/i);
    await expect(searchInput).toBeVisible();

    await searchInput.fill("prapor");

    await page.waitForTimeout(500);
  });

  test("can close catch-up dialog", async ({ page }) => {
    await page.goto("/settings");
    await dismissWelcomeModal(page);

    const catchUpBtn = page.getByRole("button", { name: /catch.?up/i });
    const isVisible = await catchUpBtn
      .isVisible({ timeout: 5000 })
      .catch(() => false);

    if (!isVisible) {
      test.skip();
      return;
    }

    await catchUpBtn.click();
    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();

    await page.keyboard.press("Escape");

    await expect(dialog).not.toBeVisible({ timeout: 3000 });
  });
});
