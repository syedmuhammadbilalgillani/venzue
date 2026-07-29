"use client";

import { useState } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import Image from "next/image";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import {
  categories,
  occasions,
  type Category,
  type Occasion,
} from "@/types/venue";
import { PRICE_BOUNDS, CAPACITY_BOUNDS } from "@/lib/data/venues";

const VENUE_STYLES = categories.filter(
  (c): c is Exclude<Category, "All Spaces"> => c !== "All Spaces",
);

function parseListParam<T extends string>(value: string | null): T[] {
  if (!value) return [];
  return value.split(",").filter(Boolean) as T[];
}

function toggle<T>(list: T[], item: T): T[] {
  return list.includes(item) ? list.filter((x) => x !== item) : [...list, item];
}

export function FiltersSheet() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [open, setOpen] = useState(false);
  const [style, setStyle] = useState<Exclude<Category, "All Spaces">[]>(() =>
    parseListParam(searchParams.get("style")),
  );
  const [occasion, setOccasion] = useState<Occasion[]>(() =>
    parseListParam(searchParams.get("occasion")),
  );
  const [capacity, setCapacity] = useState<[number, number]>(() => [
    Number(searchParams.get("capMin")) || CAPACITY_BOUNDS[0],
    Number(searchParams.get("capMax")) || CAPACITY_BOUNDS[1],
  ]);
  const [price, setPrice] = useState<[number, number]>(() => [
    Number(searchParams.get("priceMin")) || PRICE_BOUNDS[0],
    Number(searchParams.get("priceMax")) || PRICE_BOUNDS[1],
  ]);
  const [verifiedOnly, setVerifiedOnly] = useState(
    searchParams.get("verified") === "1",
  );

  const activeCount =
    style.length +
    occasion.length +
    (verifiedOnly ? 1 : 0) +
    (capacity[0] !== CAPACITY_BOUNDS[0] || capacity[1] !== CAPACITY_BOUNDS[1]
      ? 1
      : 0) +
    (price[0] !== PRICE_BOUNDS[0] || price[1] !== PRICE_BOUNDS[1] ? 1 : 0);

  const setOrDelete = (
    params: URLSearchParams,
    key: string,
    value: string | null,
  ) => {
    if (value === null) {
      params.delete(key);
    } else {
      params.set(key, value);
    }
  };

  const applyFilters = () => {
    const params = new URLSearchParams(searchParams.toString());

    setOrDelete(params, "style", style.length ? style.join(",") : null);
    setOrDelete(
      params,
      "occasion",
      occasion.length ? occasion.join(",") : null,
    );
    setOrDelete(params, "verified", verifiedOnly ? "1" : null);
    setOrDelete(
      params,
      "capMin",
      capacity[0] !== CAPACITY_BOUNDS[0] ? String(capacity[0]) : null,
    );
    setOrDelete(
      params,
      "capMax",
      capacity[1] !== CAPACITY_BOUNDS[1] ? String(capacity[1]) : null,
    );
    setOrDelete(
      params,
      "priceMin",
      price[0] !== PRICE_BOUNDS[0] ? String(price[0]) : null,
    );
    setOrDelete(
      params,
      "priceMax",
      price[1] !== PRICE_BOUNDS[1] ? String(price[1]) : null,
    );

    router.push(`${pathname}?${params.toString()}`, { scroll: false });
    setOpen(false);
  };

  const clearAll = () => {
    setStyle([]);
    setOccasion([]);
    setCapacity(CAPACITY_BOUNDS);
    setPrice(PRICE_BOUNDS);
    setVerifiedOnly(false);

    const params = new URLSearchParams(searchParams.toString());
    [
      "style",
      "occasion",
      "verified",
      "capMin",
      "capMax",
      "priceMin",
      "priceMax",
    ].forEach((key) => params.delete(key));
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <div className="relative cursor-pointer flex shrink-0 items-center gap-1.5 rounded-[10px] py-2.5 lg:px-5 px-0 text-base text-black transition-colors hover:bg-surface-subtle" />
        }
      >
        <Image src="/images/icon-filter.png" alt="" width={16} height={16} />
        Filters
        {activeCount > 0 && (
          <span className="flex size-5 items-center justify-center rounded-full bg-primary text-[11px] font-semibold text-white">
            {activeCount}
          </span>
        )}
      </SheetTrigger>

      <SheetContent side="right" className="w-full gap-0 p-0 sm:max-w-[420px]">
        <SheetHeader className="flex-row items-center justify-between border-b border-border p-5">
          <SheetTitle className="text-xl font-semibold text-black">
            Filters
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto p-5">
          <section>
            <h3 className="mb-3 text-sm font-semibold text-black">
              Venue Type
            </h3>
            <div className="flex flex-wrap gap-2">
              {VENUE_STYLES.map((v) => (
                <button
                  key={v}
                  onClick={() => setStyle((s) => toggle(s, v))}
                  className={`rounded-full px-3.5 py-2 text-sm transition-colors ${
                    style.includes(v)
                      ? "bg-primary text-white"
                      : "bg-surface-subtle text-black hover:bg-divider"
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
          </section>

          <hr className="my-6 border-border" />

          <section>
            <h3 className="mb-1 text-sm font-semibold text-black">Capacity</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Showing venues for {capacity[0]} - {capacity[1]} guests
            </p>
            <Slider
              min={CAPACITY_BOUNDS[0]}
              max={CAPACITY_BOUNDS[1]}
              step={5}
              value={capacity}
              onValueChange={(v) => setCapacity(v as [number, number])}
            />
          </section>

          <hr className="my-6 border-border" />

          <section>
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-sm font-semibold text-black">
                Price per hour (AED)
              </h3>
              <div className="flex gap-6 text-xs text-muted-foreground">
                <span>AED {price[0].toFixed(2)}</span>
                <span>AED {price[1].toFixed(2)}</span>
              </div>
            </div>
            <Slider
              min={PRICE_BOUNDS[0]}
              max={PRICE_BOUNDS[1]}
              step={100}
              value={price}
              onValueChange={(v) => setPrice(v as [number, number])}
            />
          </section>

          <hr className="my-6 border-border" />

          <section>
            <h3 className="mb-3 text-sm font-semibold text-black">
              Event / Occasion
            </h3>
            <div className="flex flex-wrap gap-2">
              {occasions.map((o) => (
                <button
                  key={o}
                  onClick={() => setOccasion((s) => toggle(s, o))}
                  className={`rounded-full px-3.5 py-2 text-sm transition-colors ${
                    occasion.includes(o)
                      ? "bg-primary text-white"
                      : "bg-surface-subtle text-black hover:bg-divider"
                  }`}
                >
                  {o}
                </button>
              ))}
            </div>
          </section>

          <hr className="my-6 border-border" />

          <section className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-semibold text-black">
                Verified Only
              </h3>
              <p className="text-sm text-muted-foreground">
                Show only verified venues
              </p>
            </div>
            <Switch checked={verifiedOnly} onCheckedChange={setVerifiedOnly} />
          </section>
        </div>

        <SheetFooter className="flex-row justify-between border-t border-border p-4">
          <Button
            variant="outline"
            onClick={clearAll}
            className="h-11 rounded-[10px] border-border px-6 text-sm font-medium text-black"
          >
            Clear All
          </Button>
          <Button
            onClick={applyFilters}
            className="h-11 rounded-[10px] bg-primary px-6 text-sm font-semibold text-white hover:bg-primary/90"
          >
            Apply Filters
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
