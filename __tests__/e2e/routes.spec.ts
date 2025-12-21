import { test, expect } from '@playwright/test';

/**
 * Helper to dismiss the welcome modal if it appears
 */
async function dismissWelcomeModal(page: import('@playwright/test').Page) {
  try {
    // Wait briefly for modal to potentially appear
    const modal = page.getByRole('dialog');
    const isVisible = await modal.isVisible({ timeout: 2000 }).catch(() => false);

    if (isVisible) {
      // Try to dismiss with "Get Started" button or close
      const getStartedBtn = page.getByRole('button', { name: /get started/i });
      if (await getStartedBtn.isVisible({ timeout: 500 }).catch(() => false)) {
        await getStartedBtn.click();
      } else {
        // Try ESC key as fallback
        await page.keyboard.press('Escape');
      }
      // Wait for modal to be hidden
      await modal.waitFor({ state: 'hidden', timeout: 3000 }).catch(() => {});
    }
  } catch {
    // Modal didn't appear or was already dismissed
  }
}

test.describe('Main Routes', () => {
  test('Homepage loads and has navigation', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/tarkov/i);
    await expect(page.getByRole('link', { name: /quest tree/i })).toBeVisible();
  });

  test('Quest Tree page loads', async ({ page }) => {
    await page.goto('/quest-tree');
    await dismissWelcomeModal(page);
    // Page loads - either shows quest tree or error state (both are valid)
    await expect(page).toHaveURL(/quest-tree/);
    // Check navigation is visible (page rendered successfully)
    await expect(page.getByRole('link', { name: /maps/i })).toBeVisible();
  });

  test('Maps page loads', async ({ page }) => {
    await page.goto('/maps');
    await dismissWelcomeModal(page);
    // Check for page-specific content
    await expect(page.locator('body')).toContainText(/map/i, { timeout: 10000 });
  });

  test('Raid page loads', async ({ page }) => {
    await page.goto('/raid');
    await dismissWelcomeModal(page);
    // Check for page-specific content
    await expect(page.locator('body')).toContainText(/raid/i, { timeout: 10000 });
  });
});
