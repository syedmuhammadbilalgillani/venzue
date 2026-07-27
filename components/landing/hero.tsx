"use client";

import Image from "next/image";
import { useState } from "react";

const dots = [0, 1, 2, 3];

export function Hero() {
  const [activeDot, setActiveDot] = useState(1);
  const [tab, setTab] = useState<"venue" | "vendors">("venue");

  return (
    <section className="relative w-full overflow-hidden bg-[#372321]">
      <div className="relative mx-auto h-dvh">
        <Image
          src="/images/hero-bg.jpg"
          alt="Event venue crowd celebrating"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <header className="absolute inset-x-0 top-0 z-10 flex h-18 items-center justify-between px-5 md:h-[88px] md:px-8 lg:px-10">
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo-mark.png"
              alt=""
              width={48}
              height={32}
              className="h-8 w-12 object-contain"
            />
            <Image
              src="/images/logo-text.png"
              alt="Venuze"
              width={124}
              height={19}
              className="hidden h-4.75 w-31 object-contain md:block"
            />
          </div>

          <div className="flex items-center gap-2 md:gap-2.75">
            <button className="hidden items-center gap-2 rounded-[10px] bg-white px-4 py-2.5 text-sm font-semibold text-[#ff5037] md:flex">
              Add your listing
              <Image
                src="/images/icon-chevron-white.svg"
                alt=""
                width={12}
                height={6}
              />
            </button>
            <button className="flex items-center gap-2 rounded-[10px] bg-white px-3 py-2.5 text-sm font-semibold text-[#ff5037]">
              EN
              <Image
                src="/images/icon-chevron-white2.svg"
                alt=""
                width={12}
                height={6}
              />
            </button>
            <button
              aria-label="Menu"
              className="flex h-10 w-11 items-center justify-center rounded-[10px] bg-white"
            >
              <Image
                src="/images/icon-menu.svg"
                alt=""
                width={10}
                height={15}
              />
            </button>
          </div>
        </header>

        <h1 className="absolute left-1/2 top-[120px] w-[90%] max-w-[746px] -translate-x-1/2 text-center font-semibold leading-[1.1] tracking-[-1px] text-white text-[32px] md:top-[160px] md:text-[48px] lg:top-[196px] lg:text-[70px] lg:leading-[80px] lg:tracking-[-2.1px]">
          Celebrate in venues big and small
        </h1>

        {/* Search card */}
        <div className="absolute left-1/2 top-[62%] w-[92%] max-w-[1054px] -translate-x-1/2 md:top-[68%] lg:left-1/2 lg:top-[421px] lg:w-[1054px]">
          {/* Venue / Vendors toggle */}
          <div className="relative z-10 mx-auto mb-[-27px] flex h-[55px] w-[264px] items-center rounded-[10px] bg-white p-[7px] shadow-[0px_0px_34px_0px_rgba(0,0,0,0.25)]">
            <button
              onClick={() => setTab("venue")}
              className={`flex h-10 flex-1 items-center justify-center gap-[7px] rounded-[10px] text-sm font-semibold transition-colors ${
                tab === "venue" ? "bg-[#ff5037] text-white" : "text-black"
              }`}
            >
              <Image
                src="/images/icon-venue.svg"
                alt=""
                width={20}
                height={20}
              />
              Venue
            </button>
            <button
              onClick={() => setTab("vendors")}
              className={`flex h-10 flex-1 items-center justify-center gap-[5px] rounded-[10px] text-sm font-semibold transition-colors ${
                tab === "vendors" ? "bg-[#ff5037] text-white" : "text-black"
              }`}
            >
              <Image
                src="/images/icon-vendors.svg"
                alt=""
                width={24}
                height={24}
              />
              Vendors
            </button>
          </div>

          <div className="flex flex-col gap-4 rounded-[10px] bg-white p-6 shadow-lg md:flex-row md:items-center md:gap-0 md:p-[23px_38px] lg:h-[100px]">
            <Field
              label="Where"
              value="Dubai, UAE"
              className="md:flex-1 md:border-r md:border-[#e5e5e5] md:pr-6"
            />
            <Field
              label="When"
              value="Anytime"
              className="md:flex-1 md:border-r md:border-[#e5e5e5] md:px-6"
            />
            <Field label="Guests" value="10-20" className="md:flex-1 md:pl-6" />
            <button className="flex h-[60px] items-center justify-center gap-2 rounded-[10px] bg-[#ff5037] px-8 text-white transition-opacity hover:opacity-90 md:ml-4">
              <Image
                src="/images/icon-search-btn.svg"
                alt=""
                width={24}
                height={24}
              />
              <span className="font-semibold">Search</span>
            </button>
          </div>
        </div>

        <div className="absolute bottom-[10%] left-1/2 flex -translate-x-1/2 items-center gap-[5px] lg:bottom-[65px]">
          {dots.map((i) => (
            <button
              key={i}
              onClick={() => setActiveDot(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                activeDot === i
                  ? "w-7 bg-[#fec432]"
                  : "w-2 bg-[#d9d9d9] opacity-40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  className = "",
}: {
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <span className="text-sm text-[#808080]">{label}</span>
      <div className="flex items-center justify-between gap-2">
        <span className="text-base font-medium text-black">{value}</span>
        <Image
          src="/images/icon-arrow-down.svg"
          alt=""
          width={24}
          height={24}
        />
      </div>
    </div>
  );
}
