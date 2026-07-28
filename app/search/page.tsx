import { Navbar } from "@/components/layout/navbar";
import { SearchHeader } from "@/components/search/search-header";
import { SearchContent } from "@/components/search/search-content";
import { venues } from "@/lib/data/venues";
import type { Category } from "@/types/venue";

interface SearchPageProps {
  searchParams: Promise<{
    where?: string;
    when?: string;
    guests?: string;
    type?: string;
    sort?: string;
    category?: string;
  }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const where = params.where ?? "London, UK";
  const when = params.when;
  const guests = params.guests;
  const category = (params.category as Category) || "All Spaces";
  const city = where.split(",")[0].trim();

  const filtered = venues.filter((v) => {
    const cityMatch = v.city.toLowerCase() === city.toLowerCase();
    const categoryMatch = category === "All Spaces" || v.category === category;
    return cityMatch && categoryMatch;
  });

  const label =
    category === "All Spaces" ? "venues" : `${category.toLowerCase()} spaces`;

  return (
    <main className="min-h-dvh bg-white">
      <Navbar
        variant="solid"
        showSearchPill
        where={where}
        when={when}
        guests={guests}
      />
      <SearchHeader />

      <SearchContent venues={filtered} label={label} city={city} />
    </main>
  );
}

