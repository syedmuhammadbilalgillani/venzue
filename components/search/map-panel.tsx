"use client";

import Image from "next/image";
import { useState } from "react";

const pins = [
  { id: "a", top: "20%", left: "20%" },
  { id: "b", top: "35%", left: "55%" },
  { id: "c", top: "50%", left: "40%", active: true },
  { id: "d", top: "45%", left: "75%" },
  { id: "e", top: "62%", left: "60%" },
];

export function MapPanel() {
  const [selected, setSelected] = useState<string | null>("c");

  return (
    <div className="relative hidden h-full min-h-[600px] w-[421px] shrink-0 overflow-hidden rounded-[10px] bg-[#e5e5e5] lg:block">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(#d9d9d9 1px, transparent 1px), linear-gradient(90deg, #d9d9d9 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      {pins.map((pin) => (
        <button
          key={pin.id}
          onClick={() => setSelected(pin.id)}
          aria-label="View venue on map"
          className={`absolute flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white shadow-lg transition-transform hover:scale-110 ${
            selected === pin.id ? "z-10 bg-[#ff5037]" : "bg-white text-[#ff5037]"
          }`}
          style={{ top: pin.top, left: pin.left }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill={selected === pin.id ? "white" : "#ff5037"}>
            <path d="M12 2a7 7 0 017 7c0 5-7 13-7 13S5 14 5 9a7 7 0 017-7zm0 4a3 3 0 100 6 3 3 0 000-6z" />
          </svg>
        </button>
      ))}

      {selected && (
        <div className="absolute left-1/2 top-[26%] w-[240px] -translate-x-1/2 overflow-hidden rounded-[16px] bg-white shadow-xl">
          <div className="relative h-[150px] w-full">
            <Image src="/images/map-preview-venue.jpg" alt="Downtown Loft" fill className="object-cover" />
          </div>
          <div className="flex flex-col gap-1 p-3">
            <p className="text-sm font-semibold text-black">Downtown Loft</p>
            <div className="flex items-center gap-1 text-xs text-[#ff5037]">
              <Image src="/images/icon-location.svg" alt="" width={14} height={14} />
              New York, USA
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
