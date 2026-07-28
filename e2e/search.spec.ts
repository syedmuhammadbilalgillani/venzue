import { test, expect } from "@playwright/test";

test.describe("Search page", () => {
  test("lists venues and shows the results count", async ({ page }) => {
    await page.goto("/search?where=Dubai, UAE");
    await expect(page.getByText(/near dubai/i)).toBeVisible();
  });

  test("opens the filters sheet and toggles a venue style chip", async ({ page }) => {
    await page.goto("/search?where=Dubai, UAE");
    await page.getByRole("button", { name: "Filters", exact: true }).click();
    await expect(page.getByRole("heading", { name: /^filters$/i })).toBeVisible();

    const restaurantChip = page.getByRole("button", { name: "Restaurant", exact: true });
    await restaurantChip.click();
    await expect(restaurantChip).toHaveClass(/bg-\[#ff5037\]/);
  });

  test("clear all resets filters and closes without changing the URL filters", async ({
    page,
  }) => {
    await page.goto("/search?where=Dubai, UAE");
    await page.getByRole("button", { name: "Filters", exact: true }).click();
    await page.getByRole("button", { name: "Meeting", exact: true }).click();
    await page.getByRole("button", { name: /apply filters/i }).click();
    await expect(page).toHaveURL(/style=Meeting/);

    await page.getByRole("button", { name: "Filters", exact: true }).click();
    await page.getByRole("button", { name: /clear all/i }).click();
    await expect(page).not.toHaveURL(/style=/);
  });

  test("shows the mobile map/list toggle on small viewports", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/search?where=Dubai, UAE");
    const toggle = page.getByRole("button", { name: /^map$/i });
    await expect(toggle).toBeVisible();
    await toggle.click();
    await expect(page.getByRole("button", { name: /^list$/i })).toBeVisible();
  });
});
