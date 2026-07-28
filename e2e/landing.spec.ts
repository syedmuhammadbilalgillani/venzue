import { test, expect } from "@playwright/test";

test.describe("Landing page", () => {
  test("renders the hero heading and search fields", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.getByRole("heading", { name: /celebrate in venues big and small/i })
    ).toBeVisible();
    await expect(page.getByText("Where")).toBeVisible();
    await expect(page.getByText("When")).toBeVisible();
    await expect(page.getByText("Guests")).toBeVisible();
  });

  test("redirects to the search page with query params on search", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: /^search$/i }).click();
    await expect(page).toHaveURL(/\/search\?.*where=/);
  });

  test("shows the featured venues section with a working filter toggle", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { name: /featured venues/i })).toBeVisible();
    const galleryFilter = page.getByRole("button", { name: /^gallery$/i }).first();
    await galleryFilter.click();
    await expect(galleryFilter).toHaveClass(/bg-\[#ff5037\]/);
  });
});
