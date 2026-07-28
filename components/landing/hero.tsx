"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { HeroSearchField } from "@/components/landing/hero-search-field";

const dots = [0, 1, 2, 3];

const WHERE_OPTIONS = ["Dubai, UAE", "Abu Dhabi, UAE", "Sharjah, UAE"] as const;
const WHEN_OPTIONS = [
  "Anytime",
  "Today",
  "This Weekend",
  "This Month",
] as const;
const GUESTS_OPTIONS = ["1-5", "5-10", "10-20", "20-50", "50+"] as const;

export function Hero() {
  const router = useRouter();
  const [activeDot, setActiveDot] = useState(1);
  const [tab, setTab] = useState<"venue" | "vendors">("venue");
  const [where, setWhere] = useState<string>(WHERE_OPTIONS[0]);
  const [when, setWhen] = useState<string>(WHEN_OPTIONS[0]);
  const [guests, setGuests] = useState<string>(GUESTS_OPTIONS[2]);

  const handleSearch = () => {
    const params = new URLSearchParams({
      where,
      when,
      guests,
      type: tab,
    });
    router.push(`/search?${params.toString()}`);
  };

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

        <Navbar variant="transparent" />
        <div className=" inset-0 bg-transparent absolute flex gap-10 flex-col justify-center items-center">
          <h1 className="text-white font-semibold lg:text-[70px]  leading-16  text-[32px] max-w-3xl  text-center">
            Celebrate in venues big and small
          </h1>
          <div>
            <div className="relative z-10 mx-auto flex h-14 w-66 items-center rounded-[10px] -mb-5 bg-white p-1.5 shadow-[0px_0px_34px_0px_rgba(0,0,0,0.25)]">
              <button
                onClick={() => setTab("venue")}
                className={`flex h-10 flex-1 items-center justify-center gap-1.5 rounded-[10px] text-sm font-semibold transition-colors ${
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
              <HeroSearchField
                label="Where"
                value={where}
                onValueChange={setWhere}
                options={WHERE_OPTIONS}
                className="md:flex-1 md:border-r md:border-[#e5e5e5] md:pr-6"
              />
              <HeroSearchField
                label="When"
                value={when}
                onValueChange={setWhen}
                options={WHEN_OPTIONS}
                className="md:flex-1 md:border-r md:border-[#e5e5e5] md:px-6"
              />
              <HeroSearchField
                label="Guests"
                value={guests}
                onValueChange={setGuests}
                options={GUESTS_OPTIONS}
                className="md:flex-1 md:pl-6"
              />
              <button
                onClick={handleSearch}
                className="flex h-[60px] items-center justify-center gap-2 rounded-[10px] bg-[#ff5037] px-8 text-white transition-opacity hover:opacity-90 md:ml-4"
              >
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
        </div>
        {/* 
        <div className="bg-red-700 flex items-center h-full w-full gap">
          <h1 className=" w-[90%] max-w-[746px] text-center text-white font-semibold leading-[1.1] tracking-[-1px] text-white text-[32px] md:top-[160px] md:text-[48px]  lg:text-[70px] lg:leading-[80px] lg:tracking-[-2.1px]">
            Celebrate in venues big and small
          </h1>

          <div className=" w-[92%] max-w-[1054px] -translate-x-1/2 md:top-[68%] lg:left-1/2 lg:top-[421px] lg:w-[1054px]">
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
              <HeroSearchField
                label="Where"
                value={where}
                onValueChange={setWhere}
                options={WHERE_OPTIONS}
                className="md:flex-1 md:border-r md:border-[#e5e5e5] md:pr-6"
              />
              <HeroSearchField
                label="When"
                value={when}
                onValueChange={setWhen}
                options={WHEN_OPTIONS}
                className="md:flex-1 md:border-r md:border-[#e5e5e5] md:px-6"
              />
              <HeroSearchField
                label="Guests"
                value={guests}
                onValueChange={setGuests}
                options={GUESTS_OPTIONS}
                className="md:flex-1 md:pl-6"
              />
              <button
                onClick={handleSearch}
                className="flex h-[60px] items-center justify-center gap-2 rounded-[10px] bg-[#ff5037] px-8 text-white transition-opacity hover:opacity-90 md:ml-4"
              >
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
        </div> */}

        {/* <div className="absolute bottom-[10%] left-1/2 flex -translate-x-1/2 items-center gap-[5px] lg:bottom-[65px]">
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
        </div> */}
      </div>
    </section>
  );
}
