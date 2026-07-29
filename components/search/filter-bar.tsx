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

const initialChips = [""];

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
    <div className="flex items-center justify-between gap-3 px-6 py-4 w-full">
      <div className="scrollbar-none flex items-center gap-1.5 overflow-x-auto">
        {chips.map((chip) => (
          <button
            key={chip}
            onClick={() => removeChip(chip)}
            className="flex shrink-0 items-center gap-1.5 rounded-full border-[1.5px] border-chip-border bg-white px-4 py-2 text-[11px] font-medium tracking-[-0.33px] text-chip-text transition-colors hover:border-primary hover:text-primary"
          >
            {chip}
            <X className="text-chip-close " size={12} />
          </button>
        ))}
        {chips.length > 0 && (
          <button
            onClick={() => setChips([])}
            className="shrink-0 rounded-full border-[1.5px] border-chip-border bg-white px-4 py-2 text-[11px] font-medium tracking-[-0.33px] text-chip-text transition-colors hover:border-primary hover:text-primary"
          >
            Clear filters
          </button>
        )}
      </div>

      <Select value={sort} onValueChange={handleSortChange}>
        <SelectTrigger className="h-auto w-fit gap-1.5 rounded-full border-[1.5px] border-chip-border bg-white px-4 py-2 text-[11px] text-sort-text outline-none transition-colors hover:border-primary focus-visible:ring-0 [&>svg]:hidden">
          <span className="flex gap-2">
            <span className="lg:block hidden">Sort by: </span>
            <SelectValue className="inline" />
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
