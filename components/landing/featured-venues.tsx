"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { venues } from "@/lib/data/venues";
import { useFavoritesStore } from "@/store/favorites-store";
import type { Venue } from "@/types/venue";

const filters = ["Rooftop", "Gallery", "Restaurant", "Outdoor", "Studio", "terrace", "ballroom"];

function PriceLabel({ venue }: { venue: Venue }) {
  if (venue.pricePerHour == null) return <span>Contact for pricing</span>;
  return (
    <span>
      From <span className="font-bold">{venue.currency ?? "$"}{venue.pricePerHour}/hour</span>
    </span>
  );
}

// The real dataset doesn't carry these fields for most venues; fall back to
// placeholder values so the card always matches the design.
const FALLBACK_GUESTS = "300+";
const FALLBACK_AREA = "2,000 sq ft";
const FALLBACK_PARKING = "Free parking";
const FALLBACK_MORE_COUNT = 25;

function FeaturedCard({ venue }: { venue: Venue }) {
  const isFavorite = useFavoritesStore((s) => s.isFavorite(venue.id));
  const toggleFavorite = useFavoritesStore((s) => s.toggleFavorite);
  const stats = [
    { icon: "/images/icon-guests.svg", label: venue.guests ?? FALLBACK_GUESTS, size: 14 },
    { icon: "/images/icon-area.svg", label: venue.areaSqFt ?? FALLBACK_AREA, size: 15 },
    { icon: "/images/icon-parking.svg", label: venue.parking ?? FALLBACK_PARKING, size: 16 },
  ];
  const moreCount = venue.moreCount ?? FALLBACK_MORE_COUNT;

  return (
    <div className="w-[280px] shrink-0 snap-start overflow-hidden rounded-[20px] bg-white md:w-[300px] lg:w-full">
      <div className="relative h-[250px] w-full bg-[#e4e4e4]">
        <Image
          src={venue.image}
          alt={venue.title}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 25vw, 280px"
        />
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
          <svg width="20" height="20" viewBox="0 0 24 24" fill={isFavorite ? "#ff5037" : "none"} stroke="white" strokeWidth="2">
            <path d="M12 21s-7.5-4.6-10-9.2C.5 8.4 2 4.8 5.6 4c2-.4 4 .5 6.4 3 2.4-2.5 4.4-3.4 6.4-3 3.6.8 5.1 4.4 3.6 7.8C19.5 16.4 12 21 12 21z" />
          </svg>
        </button>
      </div>

      <div className="flex flex-col gap-3.5 rounded-b-[20px] border border-[#e5e5e5] p-3.5 shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.05)]">
        <h3 className="line-clamp-2 text-base font-semibold text-black">{venue.title}</h3>
        <p className="-mt-2 line-clamp-1 text-sm text-[#ff5037]">{venue.location}</p>

        <div className="flex flex-wrap gap-1.5">
          {stats.map((s) => (
            <span
              key={s.label}
              className="flex items-center gap-1.5 rounded-full bg-[#f9fafb] px-2 py-1.5 text-[10px] font-medium text-[#364153]"
            >
              <Image src={s.icon} alt="" width={s.size} height={s.size} />
              {s.label}
            </span>
          ))}
        </div>

        <span className="w-fit rounded-full bg-[#f9fafb] px-2 py-1.5 text-[10px] font-medium text-[#364153]">
          +{moreCount} more
        </span>

        <hr className="border-[#e5e5e5]" />

        <div className="flex items-center justify-between gap-2">
          <p className="text-sm text-black">
            <PriceLabel venue={venue} />
          </p>
          <button className="flex shrink-0 items-center gap-1 rounded-[10px] border border-[#ff5037] px-3.5 py-1.5 text-xs font-medium text-[#ff5037] transition-colors hover:bg-[#ff5037] hover:text-white">
            View details
            <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}

export function FeaturedVenues() {
  const [active, setActive] = useState("Rooftop");
  const filtered = venues.filter((v) => v.tags.includes(active)).slice(0, 4);

  return (
    <section className="relative overflow-hidden bg-black px-5 py-16 md:px-8 lg:px-0 lg:py-[100px]">
      <div className="absolute inset-0 opacity-30">
        <Image src="/images/venue-card.jpg" alt="" fill className="object-cover" />
      </div>
      <div className="relative mx-auto max-w-[1275px]">
        <div className="mb-10 text-center lg:mb-[75px]">
          <h2 className="text-[28px] font-semibold text-white md:text-[36px] lg:text-[44px]">
            Featured Venues
          </h2>
          <div className="scrollbar-none mt-8 flex justify-start gap-2 overflow-x-auto lg:justify-center">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`shrink-0 rounded-[10px] px-6 py-3 text-base font-medium capitalize transition-colors ${
                  active === f ? "bg-[#ff5037] text-white" : "text-white/70 hover:text-white"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="flex flex-col items-center gap-2 rounded-[10px] border border-dashed border-white/20 py-16 text-center">
            <p className="text-base font-medium text-white">No venues found for &ldquo;{active}&rdquo;</p>
            <p className="text-sm text-white/60">Try a different category.</p>
          </div>
        ) : (
          <div className="scrollbar-none flex snap-x gap-6 overflow-x-auto pb-2 lg:grid lg:grid-cols-4 lg:overflow-visible">
            {filtered.map((v) => (
              <FeaturedCard key={v.id} venue={v} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
