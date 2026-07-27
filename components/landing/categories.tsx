"use client";

import Image from "next/image";

const categories = [
  { title: "Celebration Venues", count: "37 Venues", image: "/images/cat-celebration.jpg" },
  { title: "Private Party Venues", count: "37 Venues", image: "/images/cat-private-party.jpg" },
  { title: "Corporate Meetings", count: "37 Venues", image: "/images/cat-corporate.jpg" },
  { title: "Creative Studios", count: "37 Venues", image: "/images/cat-creative.jpg" },
];

export function Categories() {
  return (
    <section className="mx-auto max-w-[1440px] px-5 py-16 md:px-8 lg:px-[120px] lg:py-[75px]">
      <div className="mx-auto mb-10 flex max-w-[1200px] flex-col items-center gap-2.5 text-center lg:mb-[70px]">
        <h2 className="text-[28px] font-semibold leading-tight text-black md:text-[36px] lg:text-[44px] lg:leading-[50px]">
          Find The Best Venue For Any Occasion
        </h2>
        <p className="text-base text-black md:text-lg lg:text-[20px] lg:leading-[30px]">
          Explore venues by category, from timeless ballrooms and rooftops with a view to
          modern studios and outdoor gardens, discover spaces designed to inspire
          unforgettable experiences.
        </p>
      </div>

      <div className="scrollbar-none flex snap-x gap-4 overflow-x-auto pb-2 lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-visible">
        {categories.map((cat) => (
          <button
            key={cat.title}
            className="group relative h-[320px] w-[240px] shrink-0 snap-start overflow-hidden rounded-[20px] text-left md:h-[360px] md:w-[270px] lg:h-[400px] lg:w-full"
          >
            <Image
              src={cat.image}
              alt={cat.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 from-30% to-black/80" />
            <span className="absolute left-5 top-5 rounded-full bg-black/50 px-4 py-2 text-xs font-semibold text-white">
              {cat.count}
            </span>
            <span className="absolute bottom-6 left-5 max-w-[85%] text-[22px] font-semibold leading-tight tracking-[-0.9px] text-white lg:text-[30px] lg:leading-[30px]">
              {cat.title}
            </span>
          </button>
        ))}
      </div>

      <div className="mt-6 hidden items-center justify-end gap-2.5 lg:flex">
        <button
          aria-label="Previous"
          className="flex size-[42px] items-center justify-center rounded-full bg-[#f4f4f4] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.25)] transition-opacity hover:opacity-80"
        >
          <Image src="/images/icon-chevron-left.svg" alt="" width={30} height={30} />
        </button>
        <button
          aria-label="Next"
          className="flex size-[42px] items-center justify-center rounded-full bg-[#f4f4f4] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.25)] transition-opacity hover:opacity-80"
        >
          <Image src="/images/icon-chevron-right.svg" alt="" width={30} height={30} />
        </button>
      </div>
    </section>
  );
}
