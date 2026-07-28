import { Navbar } from "@/components/layout/navbar";
import { SearchHeader } from "@/components/search/search-header";
import { SearchContent } from "@/components/search/search-content";
import { venues, CAPACITY_BOUNDS, PRICE_BOUNDS } from "@/lib/data/venues";
import type { Category, Occasion } from "@/types/venue";

interface SearchPageProps {
  searchParams: Promise<{
    where?: string;
    when?: string;
    guests?: string;
    type?: string;
    sort?: string;
    category?: string;
    style?: string;
    occasion?: string;
    capMin?: string;
    capMax?: string;
    priceMin?: string;
    priceMax?: string;
    verified?: string;
  }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const where = params.where ?? "Dubai, UAE";
  const when = params.when;
  const guests = params.guests;
  const category = (params.category as Category) || "All Spaces";
  const city = where.split(",")[0].trim();

  const styleFilter = params.style ? (params.style.split(",") as Exclude<Category, "All Spaces">[]) : [];
  const occasionFilter = params.occasion ? (params.occasion.split(",") as Occasion[]) : [];
  const capMin = params.capMin ? Number(params.capMin) : CAPACITY_BOUNDS[0];
  const capMax = params.capMax ? Number(params.capMax) : CAPACITY_BOUNDS[1];
  const priceMin = params.priceMin ? Number(params.priceMin) : PRICE_BOUNDS[0];
  const priceMax = params.priceMax ? Number(params.priceMax) : PRICE_BOUNDS[1];
  const verifiedOnly = params.verified === "1";

  const filtered = venues.filter((v) => {
    const cityMatch = v.city.toLowerCase() === city.toLowerCase();
    const categoryMatch = category === "All Spaces" || v.category === category;
    const styleMatch = styleFilter.length === 0 || styleFilter.includes(v.category);
    const occasionMatch =
      occasionFilter.length === 0 || occasionFilter.some((o) => v.occasions.includes(o));
    // Venues with unknown capacity always pass — we can't prove they don't fit.
    const capacityMatch = v.capacity == null || (v.capacity >= capMin && v.capacity <= capMax);
    const priceMatch = v.pricePerHour == null || (v.pricePerHour >= priceMin && v.pricePerHour <= priceMax);
    const verifiedMatch = !verifiedOnly || v.verified;

    return (
      cityMatch &&
      categoryMatch &&
      styleMatch &&
      occasionMatch &&
      capacityMatch &&
      priceMatch &&
      verifiedMatch
    );
  });

  const label = category === "All Spaces" ? "venues" : `${category.toLowerCase()} spaces`;

  return (
    <main className="min-h-dvh bg-white">
      <Navbar variant="solid" showSearchPill where={where} when={when} guests={guests} />
      <SearchHeader />

      <SearchContent venues={filtered} label={label} city={city} />
    </main>
  );
}
