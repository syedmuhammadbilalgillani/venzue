import { SearchTopbar } from "@/components/search/search-topbar";
import { SearchHeader } from "@/components/search/search-header";
import { FilterBar } from "@/components/search/filter-bar";
import { VenueCard } from "@/components/search/venue-card";
import { MapPanel } from "@/components/search/map-panel";
import { venues } from "@/lib/data/venues";

export default function SearchPage() {
  return (
    <main className="min-h-dvh bg-white">
      <SearchTopbar />
      <SearchHeader />
      <FilterBar />

      <div className="flex gap-6 px-6 pb-10">
        <div className="flex-1">
          <p className="mb-4 text-sm text-black">
            {venues.length} photo studios near London
          </p>

          {venues.length === 0 ? (
            <div className="flex flex-col items-center gap-2 rounded-[10px] border border-dashed border-[#e5e5e5] py-24 text-center">
              <p className="text-base font-medium text-black">No venues found</p>
              <p className="text-sm text-[#808080]">Try adjusting your filters.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {venues.map((venue) => (
                <VenueCard key={venue.id} venue={venue} />
              ))}
            </div>
          )}
        </div>

        <MapPanel />
      </div>
    </main>
  );
}
