"use client";

import { useState } from "react";

const initialChips = ["Verified", "2,000+ m²", "10-20 guests", "Parking", "Kitchen"];

export function FilterBar() {
  const [chips, setChips] = useState(initialChips);

  const removeChip = (chip: string) => setChips((c) => c.filter((x) => x !== chip));

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4">
      <div className="scrollbar-none flex items-center gap-1.5 overflow-x-auto">
        {chips.map((chip) => (
          <button
            key={chip}
            onClick={() => removeChip(chip)}
            className="flex shrink-0 items-center gap-1.5 rounded-full border-[1.5px] border-[#e6e6e6] bg-white px-4 py-2 text-[11px] font-medium tracking-[-0.33px] text-[#3a3a3a] transition-colors hover:border-[#ff5037] hover:text-[#ff5037]"
          >
            {chip}
            <span className="text-[#555]">×</span>
          </button>
        ))}
        {chips.length > 0 && (
          <button
            onClick={() => setChips([])}
            className="shrink-0 rounded-full border-[1.5px] border-[#e6e6e6] bg-white px-4 py-2 text-[11px] font-medium tracking-[-0.33px] text-[#3a3a3a] transition-colors hover:border-[#ff5037] hover:text-[#ff5037]"
          >
            Clear filters
          </button>
        )}
      </div>

      <button className="flex shrink-0 items-center gap-2 rounded-full border-[1.5px] border-[#e6e6e6] bg-white px-4 py-2 text-[11px] text-[#333] transition-colors hover:border-[#ff5037]">
        Sort by: Recommended
        <span aria-hidden>▾</span>
      </button>
    </div>
  );
}
