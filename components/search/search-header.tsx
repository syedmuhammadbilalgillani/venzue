"use client";

import Image from "next/image";
import { useRef } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { categories, type Category } from "@/types/venue";
import { CategoryIcon } from "@/components/search/category-icon";
import { FiltersSheet } from "@/components/search/filters-sheet";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function SearchHeader() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const active = (searchParams.get("category") as Category) || "All Spaces";
  const scrollRef = useRef<HTMLDivElement>(null);

  const setActive = (cat: Category) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("category", cat);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: dir === "left" ? -240 : 240,
      behavior: "smooth",
    });
  };

  return (
    <div className="sticky top-0 z-20 bg-white">
      <div className="flex h-[50px] items-center gap-2.5 border-b border-[#d0d0d0] px-6">
        <Image
          src="/images/icon-search-gray.svg"
          alt=""
          width={24}
          height={24}
        />
        <input
          type="text"
          placeholder="Add keywords..."
          className="h-full flex-1 text-base text-black outline-none placeholder:text-[#a39e9e]"
        />
        <FiltersSheet />
      </div>

      <div className="flex items-center gap-2 border-b border-[#d0d0d0] px-3 py-3">
        <button
          onClick={() => scroll("left")}
          aria-label="Scroll categories left"
          className="hidden shrink-0 items-center justify-center rounded-full p-2 text-[#616161] transition-colors hover:bg-[#f4f4f4] lg:flex"
        >
          <ArrowLeft />
        </button>
        <div
          ref={scrollRef}
          className="scrollbar-none flex flex-1 items-center gap-6 overflow-x-auto px-2"
        >
          {categories.map((cat) => {
            const isActive = active === cat;
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className="flex shrink-0 px-6 flex-col items-center gap-1.5 text-xs font-medium capitalize tracking-[-0.36px] transition-colors"
              >
                <span className="flex h-[30px] items-center justify-center">
                  <CategoryIcon category={cat} active={isActive} />
                </span>
                <span
                  className={
                    isActive ? "font-bold text-[#ff5039]" : "text-[#616161]"
                  }
                >
                  {cat}
                </span>
              </button>
            );
          })}
        </div>
        <button
          onClick={() => scroll("right")}
          aria-label="Scroll categories right"
          className="hidden shrink-0 items-center justify-center rounded-full p-2 text-[#616161] transition-colors hover:bg-[#f4f4f4] lg:flex"
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}
