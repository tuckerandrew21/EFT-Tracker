import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('should load the homepage', async ({ page }) => {
    await page.goto('/');

    // Wait for the page to load
    await page.waitForLoadState('networkidle');

    // Check that we can access the page
    await expect(page).toHaveTitle(/EFT/);
  });

  test('should have header navigation', async ({ page }) => {
    await page.goto('/');

    // Check for header elements
    const header = page.locator('header');
    await expect(header).toBeVisible();
  });
});
