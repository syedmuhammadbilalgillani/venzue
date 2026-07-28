# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth.spec.ts >> Authentication >> shows validation errors for a short password
- Location: e2e\auth.spec.ts:17:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByLabel('Email')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e3]:
    - heading "404" [level=1] [ref=e4]
    - heading "This page could not be found." [level=2] [ref=e6]
  - contentinfo [ref=e7]:
    - generic [ref=e8]:
      - generic [ref=e9]:
        - generic [ref=e10]:
          - img "Venuze" [ref=e11]
          - paragraph [ref=e12]: Make it memorable—book the perfect venue and the pros who make it shine.
        - generic [ref=e13]:
          - generic [ref=e14]:
            - heading "Venuze" [level=4] [ref=e15]
            - list [ref=e16]:
              - listitem [ref=e17]: About
              - listitem [ref=e18]: News
              - listitem [ref=e19]: Careers
              - listitem [ref=e20]: Investors
          - generic [ref=e21]:
            - heading "Support" [level=4] [ref=e22]
            - list [ref=e23]:
              - listitem [ref=e24]: Listings your venue
              - listitem [ref=e25]: Listing your service
              - listitem [ref=e26]: Help center
              - listitem [ref=e27]: FAQ
          - generic [ref=e28]:
            - heading "Explore" [level=4] [ref=e29]
            - list [ref=e30]:
              - listitem [ref=e31]: Venue types
              - listitem [ref=e32]: Venue features
              - listitem [ref=e33]: Service options
              - listitem [ref=e34]: Locations
          - generic [ref=e35]:
            - heading "Legal & Privacy" [level=4] [ref=e36]
            - list [ref=e37]:
              - listitem [ref=e38]: Terms of service
              - listitem [ref=e39]: Payment & refund policy
              - listitem [ref=e40]: Host agreement
              - listitem [ref=e41]: Vendor agreement
      - generic [ref=e42]:
        - heading "Get in Touch" [level=4] [ref=e43]
        - textbox "Email Address" [ref=e44]
        - textbox "Message" [ref=e45]
        - button "Send" [ref=e46]
    - separator [ref=e47]
    - generic [ref=e48]:
      - generic [ref=e49]:
        - img "Twitter" [ref=e50]
        - img "Facebook" [ref=e51]
        - img "Instagram" [ref=e52]
      - paragraph [ref=e53]: © 2026 Venuze. All rights reserved.
  - region "Notifications alt+T"
  - alert [ref=e54]
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | test.describe("Authentication", () => {
  4  |   test("redirects unauthenticated users away from the dashboard", async ({ page }) => {
  5  |     await page.goto("/dashboard");
  6  |     await expect(page).toHaveURL(/\/login\?redirect=%2Fdashboard/);
  7  |   });
  8  | 
  9  |   test("shows validation errors for an invalid email on the login page", async ({ page }) => {
  10 |     await page.goto("/login");
  11 |     await page.getByLabel("Email").fill("not-an-email");
  12 |     await page.getByLabel("Password").fill("cityslicka");
  13 |     await page.getByRole("button", { name: /sign in/i }).click();
  14 |     await expect(page.getByText(/enter a valid email/i)).toBeVisible();
  15 |   });
  16 | 
  17 |   test("shows validation errors for a short password", async ({ page }) => {
  18 |     await page.goto("/login");
> 19 |     await page.getByLabel("Email").fill("eve.holt@reqres.in");
     |                                    ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  20 |     await page.getByLabel("Password").fill("abc");
  21 |     await page.getByRole("button", { name: /sign in/i }).click();
  22 |     await expect(page.getByText(/at least 6 characters/i)).toBeVisible();
  23 |   });
  24 | 
  25 |   test("opens the login dialog from the navbar account icon", async ({ page }) => {
  26 |     await page.goto("/");
  27 |     await page.getByRole("button", { name: /sign in/i }).click();
  28 |     await expect(page.getByRole("heading", { name: /welcome back/i })).toBeVisible();
  29 |   });
  30 | });
  31 | 
```