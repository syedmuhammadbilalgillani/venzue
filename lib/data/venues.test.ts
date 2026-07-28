import { describe, it, expect } from "vitest";
import {
  inferCategory,
  inferTags,
  inferOccasions,
  extractGuestCounts,
  inferCapacity,
  venues,
  PRICE_BOUNDS,
  CAPACITY_BOUNDS,
} from "./venues";

describe("inferCategory", () => {
  it("matches a photo studio by name", () => {
    expect(inferCategory("Sunlit Loft Photo Studio")).toBe("Photo Studio");
  });

  it("matches a restaurant by name", () => {
    expect(inferCategory("Rooftop Dining & Views")).toBe("Restaurant");
  });

  it("matches a meeting room by name", () => {
    expect(inferCategory("Downtown Meeting Suite")).toBe("Meeting");
  });

  it("falls back to Venue when nothing matches", () => {
    expect(inferCategory("The Grand Hall")).toBe("Venue");
  });
});

describe("inferTags", () => {
  it("finds Rooftop and Restaurant tags in a matching name", () => {
    const tags = inferTags("Panoramic Rooftop Restaurant & Views");
    expect(tags).toContain("Rooftop");
    expect(tags).toContain("Restaurant");
  });

  it("returns an empty array when no tag keywords match", () => {
    expect(inferTags("The Grand Hall")).toEqual([]);
  });
});

describe("inferOccasions", () => {
  it("includes keyword matches from the venue name", () => {
    const occasions = inferOccasions("Downtown Wedding Reception Hall", "Venue");
    expect(occasions).toContain("Wedding");
    expect(occasions).toContain("Reception");
  });

  it("always includes the category's default occasions", () => {
    const occasions = inferOccasions("Some Generic Space", "Meeting");
    expect(occasions).toEqual(expect.arrayContaining(["Conference", "Corporate Event"]));
  });

  it("de-duplicates occasions found both by keyword and by category default", () => {
    const occasions = inferOccasions("Corporate Conference Center", "Meeting");
    const conferenceCount = occasions.filter((o) => o === "Conference").length;
    expect(conferenceCount).toBe(1);
  });
});

describe("extractGuestCounts", () => {
  it("collects guest_count and extra_guest_count from nested objects", () => {
    const tree = {
      hourly_rental: { guest_count: 10 },
      package_pricing: [{ guest_count: 4, extra_guest_count: 8 }, { guest_count: 6 }],
    };
    expect(extractGuestCounts(tree).sort((a, b) => a - b)).toEqual([4, 6, 8, 10]);
  });

  it("returns an empty array for null or primitive input", () => {
    expect(extractGuestCounts(null)).toEqual([]);
    expect(extractGuestCounts("some string")).toEqual([]);
  });

  it("ignores non-numeric guest_count values", () => {
    expect(extractGuestCounts({ guest_count: "many" })).toEqual([]);
  });
});

describe("inferCapacity", () => {
  it("returns the max guest count found in pricing details", () => {
    const entry = {
      pricing: { package_pricing: [{ guest_count: 4 }, { guest_count: 12 }] },
    } as unknown as Parameters<typeof inferCapacity>[0];
    expect(inferCapacity(entry)).toBe(12);
  });

  it("returns null when pricing has no guest count data", () => {
    const entry = {
      pricing: { hourly_rate: 100 },
    } as unknown as Parameters<typeof inferCapacity>[0];
    expect(inferCapacity(entry)).toBeNull();
  });
});

describe("venues dataset", () => {
  it("maps every raw entry to a Venue", () => {
    expect(venues.length).toBeGreaterThan(0);
  });

  it("gives every venue a valid category", () => {
    for (const v of venues) {
      expect(typeof v.category).toBe("string");
    }
  });

  it("computes sane price and capacity bounds", () => {
    expect(PRICE_BOUNDS[0]).toBe(0);
    expect(PRICE_BOUNDS[1]).toBeGreaterThan(0);
    expect(CAPACITY_BOUNDS[0]).toBe(0);
    expect(CAPACITY_BOUNDS[1]).toBeGreaterThan(0);
  });
});
