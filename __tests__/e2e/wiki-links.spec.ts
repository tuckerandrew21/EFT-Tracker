import { test, expect } from "@playwright/test";
import { mockQuestsWithProgress } from "../../test/fixtures/quests";
import { mockTraders } from "../../test/fixtures/traders";

// Create serializable version of quests (remove circular references)
const serializableQuests = mockQuestsWithProgress.map((quest) => ({
  ...quest,
  dependsOn: quest.dependsOn.map((dep) => ({
    requiredQuest: {
      id: dep.requiredQuest.id,
      title: dep.requiredQuest.title,
      traderId: dep.requiredQuest.traderId,
    },
  })),
  dependedOnBy: quest.dependedOnBy.map((dep) => ({
    dependentQuest: {
      id: dep.dependentQuest.id,
      title: dep.dependentQuest.title,
      traderId: dep.dependentQuest.traderId,
    },
  })),
}));

test.describe("Quest Node Interactions", () => {
  test.beforeEach(async ({ page }) => {
    // Mock API responses
    await page.route("**/api/traders", async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ traders: mockTraders }),
      });
    });

    await page.route("**/api/quests**", async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ quests: serializableQuests }),
      });
    });

    await page.route("**/api/auth/session", async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({}),
      });
    });

    await page.goto("http://localhost:3000/quests");
    // Wait for quest nodes to load
    await page.waitForSelector(".react-flow__node", { timeout: 10000 });
  });

  test("should render quest nodes", async ({ page }) => {
    // Verify nodes are rendered
    const questNodes = page.locator(".react-flow__node");
    await expect(questNodes).toHaveCount(7); // 5 quests + 2 trader nodes
  });

  test("should open wiki link on icon click", async ({ page }) => {
    // Find wiki link icon
    const wikiLink = page.locator('a[aria-label*="wiki"]').first();
    await expect(wikiLink).toBeVisible({ timeout: 5000 });

    // Click wiki link and wait for new page
    const [newPage] = await Promise.all([
      page.context().waitForEvent("page"),
      wikiLink.click(),
    ]);

    // Verify wiki opened
    expect(newPage.url()).toContain("escapefromtarkov.fandom.com");
    await newPage.close();
  });

  test("should have wiki links with correct attributes", async ({ page }) => {
    // Find first wiki link
    const wikiLink = page.locator('a[aria-label*="wiki"]').first();

    // Check attributes
    await expect(wikiLink).toHaveAttribute("target", "_blank");
    await expect(wikiLink).toHaveAttribute("rel", "noopener noreferrer");
    await expect(wikiLink).toHaveAttribute(
      "href",
      /escapefromtarkov\.fandom\.com/
    );
  });
});
