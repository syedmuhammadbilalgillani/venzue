"use client";

import Image from "next/image";
import { useFavoritesStore } from "@/store/favorites-store";
import type { Venue } from "@/types/venue";

export function VenueCard({ venue }: { venue: Venue }) {
  const isFavorite = useFavoritesStore((s) => s.isFavorite(venue.id));
  const toggleFavorite = useFavoritesStore((s) => s.toggleFavorite);

  return (
    <div className="flex w-full flex-col overflow-hidden rounded-[20px]">
      <div className="group relative h-[250px] w-full overflow-hidden rounded-t-[20px] bg-[#e4e4e4]">
        <Image src={venue.image} alt={venue.title} fill className="object-cover" />

        {venue.verified && (
          <span className="absolute left-2.5 top-2.5 rounded-full bg-black/50 px-3.5 py-1.5 text-[11px] font-semibold tracking-[-0.33px] text-white backdrop-blur-sm">
            Verified
          </span>
        )}

        <button
          aria-label="Share"
          className="absolute right-[57px] top-2.5 flex size-[30px] items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
        >
          <svg width="15" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18 16.08a2.92 2.92 0 00-1.94.75l-7.05-4.11a2.9 2.9 0 000-1.44l7.05-4.11c.52.48 1.21.75 1.94.75a3 3 0 10-3-3c0 .24.03.48.08.72L8.03 9.85a3 3 0 100 4.3l7.05 4.11c-.05.23-.08.47-.08.71a3 3 0 103-2.99z" />
          </svg>
        </button>
        <button
          onClick={() => toggleFavorite(venue.id)}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          aria-pressed={isFavorite}
          className="absolute right-2.5 top-2.5 flex size-[30px] items-center justify-center rounded-full bg-black/50 backdrop-blur-sm transition-colors hover:bg-black/70"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill={isFavorite ? "#ff5037" : "none"}
            stroke="white"
            strokeWidth="2"
          >
            <path d="M12 21s-7.5-4.6-10-9.2C.5 8.4 2 4.8 5.6 4c2-.4 4 .5 6.4 3 2.4-2.5 4.4-3.4 6.4-3 3.6.8 5.1 4.4 3.6 7.8C19.5 16.4 12 21 12 21z" />
          </svg>
        </button>

        <button
          aria-label="Previous photo"
          className="absolute left-2.5 top-1/2 flex size-[30px] -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100"
        >
          ‹
        </button>
        <button
          aria-label="Next photo"
          className="absolute right-2.5 top-1/2 flex size-[30px] -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100"
        >
          ›
        </button>
      </div>

      <div className="flex flex-col gap-3.5 rounded-b-[20px] border border-[#e5e5e5] bg-white p-3.5 shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.05)]">
        <h3 className="line-clamp-2 text-base font-semibold text-black">{venue.title}</h3>

        <div className="flex flex-wrap gap-1.5">
          <span className="flex items-center gap-1.5 rounded-full bg-[#f9fafb] px-1.5 py-1 text-[10px] font-medium text-[#364153]">
            <Image src="/images/icon-guests.svg" alt="" width={14} height={14} />
            {venue.guests}
          </span>
          <span className="flex items-center gap-1.5 rounded-full bg-[#f9fafb] px-1.5 py-1 text-[10px] font-medium text-[#364153]">
            <Image src="/images/icon-area.svg" alt="" width={15} height={14} />
            {venue.areaSqFt}
          </span>
          <span className="flex items-center gap-1.5 rounded-full bg-[#f9fafb] px-1.5 py-1 text-[10px] font-medium text-[#364153]">
            <Image src="/images/icon-parking.svg" alt="" width={16} height={16} />
            {venue.parking}
          </span>
        </div>

        <span className="w-fit rounded-full bg-[#f9fafb] px-1.5 py-1 text-[10px] font-medium text-[#364153]">
          +{venue.moreCount} more
        </span>

        <div className="flex items-center justify-between">
          <p className="text-sm text-black">
            From <span className="font-bold">${venue.pricePerHour}/hour</span>
          </p>
          <button className="rounded-[10px] border border-[#ff5037] px-3.5 py-1.5 text-xs font-medium text-[#ff5037] transition-colors hover:bg-[#ff5037] hover:text-white">
            View details
          </button>
        </div>
      </div>
    </div>
  );
}
