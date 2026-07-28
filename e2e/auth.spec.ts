import { test, expect } from "@playwright/test";

test.describe("Authentication", () => {
  test("redirects unauthenticated users away from the dashboard", async ({ page }) => {
    await page.goto("/dashboard");
    await expect(page).toHaveURL(/\/login\?redirect=%2Fdashboard/);
  });

  test("shows validation errors for an invalid email on the login page", async ({ page }) => {
    await page.goto("/login");
    await page.getByLabel("Email").fill("not-an-email");
    await page.getByLabel("Password").fill("cityslicka");
    await page.getByRole("button", { name: /sign in/i }).click();
    await expect(page.getByText(/enter a valid email/i)).toBeVisible();
  });

  test("shows validation errors for a short password", async ({ page }) => {
    await page.goto("/login");
    await page.getByLabel("Email").fill("eve.holt@reqres.in");
    await page.getByLabel("Password").fill("abc");
    await page.getByRole("button", { name: /sign in/i }).click();
    await expect(page.getByText(/at least 6 characters/i)).toBeVisible();
  });

  test("opens the login dialog from the navbar account icon", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: /sign in/i }).click();
    await expect(page.getByRole("heading", { name: /welcome back/i })).toBeVisible();
  });
});
