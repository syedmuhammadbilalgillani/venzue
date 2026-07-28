"use client";

import { useState } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronDown, X } from "lucide-react";

const initialChips = ["Verified", "2,000+ m²"];

const SORT_OPTIONS = [
  "Recommended",
  "Price: Low to High",
  "Price: High to Low",
  "Highest Rated",
  "Newest",
] as const;

export function FilterBar() {
  const [chips, setChips] = useState(initialChips);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const sort = searchParams.get("sort") ?? SORT_OPTIONS[0];

  const removeChip = (chip: string) =>
    setChips((c) => c.filter((x) => x !== chip));

  const handleSortChange = (value: string | null) => {
    if (!value) return;
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", value);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 w-full">
      <div className="scrollbar-none flex items-center gap-1.5 overflow-x-auto">
        {chips.map((chip) => (
          <button
            key={chip}
            onClick={() => removeChip(chip)}
            className="flex shrink-0 items-center gap-1.5 rounded-full border-[1.5px] border-[#e6e6e6] bg-white px-4 py-2 text-[11px] font-medium tracking-[-0.33px] text-[#3a3a3a] transition-colors hover:border-[#ff5037] hover:text-[#ff5037]"
          >
            {chip}
            <X className="text-[#555] " size={12} />
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

      <Select value={sort} onValueChange={handleSortChange}>
        <SelectTrigger className="h-auto w-fit gap-1.5 rounded-full border-[1.5px] border-[#e6e6e6] bg-white px-4 py-2 text-[11px] text-[#333] outline-none transition-colors hover:border-[#ff5037] focus-visible:ring-0 [&>svg]:hidden">
          <span>
            Sort by: <SelectValue className="inline" />
          </span>
          <span aria-hidden>
            <ChevronDown />
          </span>
        </SelectTrigger>
        <SelectContent align="end">
          {SORT_OPTIONS.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
