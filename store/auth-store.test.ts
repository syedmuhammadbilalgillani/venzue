import { describe, it, expect, beforeEach } from "vitest";
import { useAuthStore } from "./auth-store";

describe("useAuthStore", () => {
  beforeEach(() => {
    useAuthStore.setState({ token: null, email: null, isAuthenticated: false });
    document.cookie = "venuze-token=; path=/; max-age=0";
  });

  it("starts unauthenticated", () => {
    const state = useAuthStore.getState();
    expect(state.isAuthenticated).toBe(false);
    expect(state.token).toBeNull();
    expect(state.email).toBeNull();
  });

  it("sets auth state and a cookie on login", () => {
    useAuthStore.getState().login("test-token", "user@example.com");
    const state = useAuthStore.getState();
    expect(state.isAuthenticated).toBe(true);
    expect(state.token).toBe("test-token");
    expect(state.email).toBe("user@example.com");
    expect(document.cookie).toContain("venuze-token=test-token");
  });

  it("clears auth state and the cookie on logout", () => {
    useAuthStore.getState().login("test-token", "user@example.com");
    useAuthStore.getState().logout();
    const state = useAuthStore.getState();
    expect(state.isAuthenticated).toBe(false);
    expect(state.token).toBeNull();
    expect(state.email).toBeNull();
    expect(document.cookie).not.toContain("venuze-token=test-token");
  });
});
