"use client";

import Image from "next/image";

const vendors = [
  { title: "Caterers", image: "/images/vendor-caterers.jpg" },
  { title: "Decorators", image: "/images/vendor-decorators.jpg" },
  { title: "Photographers", image: "/images/vendor-photographers.jpg" },
  { title: "Entertainment", image: "/images/vendor-entertainment.jpg" },
];

export function Vendors() {
  return (
    <section className="bg-[#fdf1d2] px-5 py-16 md:px-8 lg:px-[121px] lg:pt-18  lg:pb-38">
      <div className="mx-auto mb-10 max-w-[1200px] text-center lg:mb-[70px]">
        <h2 className="text-[28px] font-semibold leading-tight text-black md:text-[36px] lg:text-[44px] lg:leading-[50px]">
          Complete Your Event with our Trusted Vendors
        </h2>
        <p className="mt-2.5 text-base text-black md:text-lg lg:text-[20px] lg:leading-[30px]">
          Venues are just the beginning. Discover caterers, decorators,
          photographers, entertainment, and more all in one place, ready to
          bring your event project to life.
        </p>
      </div>

      <div className="scrollbar-none flex snap-x gap-4 overflow-x-auto pb-2 lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-visible">
        {vendors.map((v) => (
          <button
            key={v.title}
            className="group relative h-80 w-60 shrink-0 snap-start overflow-hidden rounded-[20px] border border-white/30 text-left md:h-[360px] md:w-[270px] lg:h-[400px] lg:w-full"
          >
            <Image
              src={v.image}
              alt={v.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 from-30% to-black/80" />
            <span className="absolute bottom-6 left-5 text-[22px] font-semibold tracking-[-0.9px] text-white lg:text-[30px]">
              {v.title}
            </span>
          </button>
        ))}
      </div>

      <div className="mt-6 hidden items-center justify-end gap-2.5 lg:flex">
        <button
          aria-label="Previous"
          className="flex size-[42px] items-center justify-center rounded-full bg-[#f4f4f4] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.25)] transition-opacity hover:opacity-80"
        >
          <Image
            src="/images/icon-chevron-left.svg"
            alt=""
            width={30}
            height={30}
          />
        </button>
        <button
          aria-label="Next"
          className="flex size-[42px] items-center justify-center rounded-full bg-[#f4f4f4] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.25)] transition-opacity hover:opacity-80"
        >
          <Image
            src="/images/icon-chevron-right.svg"
            alt=""
            width={30}
            height={30}
          />
        </button>
      </div>
    </section>
  );
}
