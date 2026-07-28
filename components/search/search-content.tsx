"use client";

import { useState } from "react";
import { FilterBar } from "@/components/search/filter-bar";
import { VenueCard } from "@/components/search/venue-card";
import { MapPanel } from "@/components/search/map-panel";
import NoDataIcon from "@/components/icons/no-data";
import type { Venue } from "@/types/venue";

interface SearchContentProps {
  venues: Venue[];
  label: string;
  city: string;
}

export function SearchContent({ venues, label, city }: SearchContentProps) {
  const [isMapExpanded, setIsMapExpanded] = useState(false);

  return (
    <div className="flex gap-6 px-6 pb-10">
      <div className={`flex-1 overflow-auto ${isMapExpanded ? "hidden" : "block"}`}>
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
        }`}
      >
        <MapPanel
          venues={venues}
          isExpanded={isMapExpanded}
          onToggleExpand={() => setIsMapExpanded(!isMapExpanded)}
        />
      </div>
    </div>
  );
}
