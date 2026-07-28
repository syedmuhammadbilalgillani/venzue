import { describe, it, expect } from "vitest";
import { loginSchema } from "./auth";

describe("loginSchema", () => {
  it("accepts a valid email and password", () => {
    const result = loginSchema.safeParse({
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    });
    expect(result.success).toBe(true);
  });

  it("rejects an invalid email", () => {
    const result = loginSchema.safeParse({
      email: "not-an-email",
      password: "cityslicka",
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toMatch(/valid email/i);
    }
  });

  it("rejects an empty email", () => {
    const result = loginSchema.safeParse({ email: "", password: "cityslicka" });
    expect(result.success).toBe(false);
  });

  it("rejects a password shorter than 6 characters", () => {
    const result = loginSchema.safeParse({
      email: "eve.holt@reqres.in",
      password: "abc",
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toMatch(/at least 6/i);
    }
  });

  it("rejects an empty password", () => {
    const result = loginSchema.safeParse({
      email: "eve.holt@reqres.in",
      password: "",
    });
    expect(result.success).toBe(false);
  });
});
