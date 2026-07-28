import { test, expect } from "@playwright/test";

test.describe("Authentication", () => {
  test("redirects unauthenticated users to home with the login dialog open", async ({
    page,
  }) => {
    await page.goto("/dashboard");
    await expect(page).toHaveURL(/\/\?login=1&redirect=%2Fdashboard/);
    await expect(page.getByRole("heading", { name: /welcome back/i })).toBeVisible();
  });

  test("shows validation errors for an invalid email in the login dialog", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: /sign in/i }).click();
    await page.getByLabel("Email").fill("not-an-email");
    await page.getByLabel("Password").fill("cityslicka");
    await page.getByRole("button", { name: "Sign in", exact: true }).click();
    await expect(page.getByText(/enter a valid email/i)).toBeVisible();
  });

  test("shows validation errors for a short password in the login dialog", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: /sign in/i }).click();
    await page.getByLabel("Email").fill("eve.holt@reqres.in");
    await page.getByLabel("Password").fill("abc");
    await page.getByRole("button", { name: "Sign in", exact: true }).click();
    await expect(page.getByText(/at least 6 characters/i)).toBeVisible();
  });

  test("opens the login dialog from the navbar account icon", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: /sign in/i }).click();
    await expect(page.getByRole("heading", { name: /welcome back/i })).toBeVisible();
  });
});
