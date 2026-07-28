import { describe, it, expect, beforeEach } from "vitest";
import { useFavoritesStore } from "./favorites-store";

describe("useFavoritesStore", () => {
  beforeEach(() => {
    useFavoritesStore.setState({ favoriteIds: [] });
  });

  it("starts with no favorites", () => {
    expect(useFavoritesStore.getState().favoriteIds).toEqual([]);
    expect(useFavoritesStore.getState().isFavorite("venue-1")).toBe(false);
  });

  it("adds a venue to favorites on toggle", () => {
    useFavoritesStore.getState().toggleFavorite("venue-1");
    expect(useFavoritesStore.getState().isFavorite("venue-1")).toBe(true);
    expect(useFavoritesStore.getState().favoriteIds).toContain("venue-1");
  });

  it("removes a venue from favorites on second toggle", () => {
    useFavoritesStore.getState().toggleFavorite("venue-1");
    useFavoritesStore.getState().toggleFavorite("venue-1");
    expect(useFavoritesStore.getState().isFavorite("venue-1")).toBe(false);
    expect(useFavoritesStore.getState().favoriteIds).not.toContain("venue-1");
  });

  it("tracks multiple favorites independently", () => {
    useFavoritesStore.getState().toggleFavorite("venue-1");
    useFavoritesStore.getState().toggleFavorite("venue-2");
    expect(useFavoritesStore.getState().favoriteIds).toEqual(["venue-1", "venue-2"]);

    useFavoritesStore.getState().toggleFavorite("venue-1");
    expect(useFavoritesStore.getState().favoriteIds).toEqual(["venue-2"]);
  });
});
