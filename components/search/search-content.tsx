"use client";

import { useState } from "react";
import { FilterBar } from "@/components/search/filter-bar";
import { VenueCard } from "@/components/search/venue-card";
import { MapPanel } from "@/components/search/map-panel";
import { ErrorBoundary } from "@/components/error-boundary";
import NoDataIcon from "@/components/icons/no-data";
import type { Venue } from "@/types/venue";
import { MapIcon, ListIcon } from "lucide-react";

interface SearchContentProps {
  venues: Venue[];
  label: string;
  city: string;
}

export function SearchContent({ venues, label, city }: SearchContentProps) {
  const [isMapExpanded, setIsMapExpanded] = useState(false);
  const [mobileView, setMobileView] = useState<"list" | "map">("list");

  return (
    <div className="relative flex gap-6 px-6 pb-10">
      <div
        className={`flex-1 overflow-auto ${isMapExpanded ? "hidden" : ""} ${
          mobileView === "map" ? "hidden lg:block" : "block"
        }`}
      >
        <div className="flex items-center">
          <p className="text-sm text-black text-nowrap">
            {venues.length} {label} near {city}
          </p>
          <FilterBar />
        </div>

        {venues.length === 0 ? (
          <div className="flex flex-col justify-center items-center">
            <NoDataIcon />
            <h3 className="text-lg font-semibold">
              No data found for your search.
            </h3>
            <p>Explore other options or clear filters to see more results.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {venues.map((venue) => (
              <VenueCard key={venue.id} venue={venue} />
            ))}
          </div>
        )}
      </div>

      <div
        className={`sticky top-36 overflow-hidden transition-all duration-300 ${
          isMapExpanded
            ? "w-full h-[calc(100vh-170px)] max-h-[calc(100vh-170px)]"
            : "w-[421px] h-[700px] max-h-[75dvh]"
        } ${
          mobileView === "map"
            ? "fixed inset-0 top-0 z-40 h-dvh max-h-dvh w-full lg:sticky lg:top-36 lg:z-auto lg:h-[700px] lg:max-h-[75dvh] lg:w-[421px]"
            : "hidden lg:block"
        }`}
      >
        <ErrorBoundary title="Map failed to load" message="Try refreshing the page.">
          <MapPanel
            venues={venues}
            isExpanded={isMapExpanded}
            onToggleExpand={() => setIsMapExpanded(!isMapExpanded)}
            forceVisible={mobileView === "map"}
          />
        </ErrorBoundary>
      </div>

      <button
        onClick={() => setMobileView((v) => (v === "list" ? "map" : "list"))}
        className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white shadow-lg transition-transform active:scale-95 lg:hidden"
      >
        {mobileView === "list" ? (
          <>
            <MapIcon size={18} />
            Map
          </>
        ) : (
          <>
            <ListIcon size={18} />
            List
          </>
        )}
      </button>
    </div>
  );
}
