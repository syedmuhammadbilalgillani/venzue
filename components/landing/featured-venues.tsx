"use client";

import Image from "next/image";
import { useState } from "react";

const filters = ["Rooftop", "Gallery", "Restaurant", "Outdoor", "Studio", "terrace", "ballroom"];

const venue = {
  title: "High-Spec Room in Trendy Home Clapham/ Stockwell",
  location: "London, SW1",
  price: "From $50/hour",
  stats: ["300+", "2,000 sq ft", "Free parking"],
  more: "+25 more",
};

const cards = Array.from({ length: 4 }, () => venue);

export function FeaturedVenues() {
  const [active, setActive] = useState("Gallery");

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

        <div className="scrollbar-none flex snap-x gap-6 overflow-x-auto pb-2 lg:grid lg:grid-cols-4 lg:overflow-visible">
          {cards.map((v, i) => (
            <div
              key={i}
              className="w-[280px] shrink-0 snap-start overflow-hidden rounded-[20px] md:w-[300px] lg:w-full"
            >
              <div className="relative h-[250px] w-full bg-[#e4e4e4]">
                <Image src="/images/venue-card.jpg" alt={v.title} fill className="object-cover" />
                <span className="absolute left-2.5 top-2.5 rounded-full bg-white px-3 py-1 text-xs font-medium text-black">
                  Verified
                </span>
                <button
                  aria-label="Save"
                  className="absolute right-2.5 top-2.5 flex size-[30px] items-center justify-center rounded-full bg-white/90"
                >
                  ♡
                </button>
              </div>
              <div className="rounded-b-[20px] border border-[#e5e5e5] bg-white p-4 shadow-[0px_3px_1.5px_0px_rgba(0,0,0,0.05)]">
                <h3 className="mb-2 line-clamp-2 text-sm font-medium text-black">{v.title}</h3>
                <p className="mb-3 text-xs text-[#ff5037]">{v.location}</p>
                <div className="mb-3 flex flex-wrap gap-1.5">
                  {v.stats.map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-[#f9fafb] px-2 py-1 text-[10px] font-medium text-[#364153]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-[#f9fafb] px-2 py-1 text-[10px] font-medium text-[#364153]">
                    {v.more}
                  </span>
                  <button className="rounded-[10px] border border-[#ff5037] px-3 py-1.5 text-[11px] font-medium text-[#ff5037]">
                    View details
                  </button>
                </div>
                <p className="mt-2 text-sm font-medium text-[#ff5037]">{v.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
