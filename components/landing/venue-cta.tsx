import Image from "next/image";

export function VenueCta() {
  return (
    <section className="px-5 pb-10 md:px-8 lg:px-[80px]">
      <div className="relative mx-auto flex max-w-[1280px] flex-col items-start justify-center gap-6 overflow-hidden rounded-[20px] bg-gradient-to-r from-[#ff786a] via-[#ff5037] to-[#ffc331] p-8 lg:h-[300px] lg:p-[0_79px]">
        <div className="relative z-10 flex flex-col gap-2.5 text-white">
          <h2 className="max-w-[560px] text-[28px] font-semibold leading-tight md:text-[36px] lg:text-[44px] lg:leading-[50px]">
            Turn Your Venue into a Destination
          </h2>
          <p className="max-w-[560px] text-base font-medium md:text-lg lg:text-[20px] lg:leading-[30px]">
            List your space on Venuze and unlock new revenue opportunities. Reach clients
            looking for venues just like yours.
          </p>
        </div>
        <button className="relative z-10 rounded-[10px] bg-black px-9 py-[18px] text-lg text-white transition-opacity hover:opacity-90 lg:text-[20px]">
          List Your Venue
        </button>
        <Image
          src="/images/woman-cta.png"
          alt=""
          width={262}
          height={296}
          className="pointer-events-none absolute bottom-0 right-8 hidden h-[80%] w-auto object-contain lg:block"
        />
      </div>
    </section>
  );
}
