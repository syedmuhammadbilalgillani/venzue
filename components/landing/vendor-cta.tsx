export function VendorCta() {
  return (
    <section className="px-5 pb-16 md:px-8 lg:px-[81px] lg:pb-[75px]">
      <div className="relative mx-auto flex max-w-[1280px] flex-col items-start gap-6 overflow-hidden rounded-[20px] bg-gradient-to-r from-[#ff786a] via-[#ff4f37] to-[#ffc331] p-8 lg:h-[300px] lg:justify-center lg:p-[88px_120px]">
        <div className="flex flex-col gap-2.5 text-white">
          <h2 className="text-[28px] font-semibold leading-tight md:text-[36px] lg:text-[44px] lg:leading-[50px]">
            Grow Your Business with Venuze
          </h2>
          <p className="max-w-[713px] text-base font-medium md:text-lg lg:text-[20px] lg:leading-[30px]">
            Showcase your services to thousands of event organizers and creators
            searching for talent like yours.
          </p>
        </div>
        <button className="rounded-[10px] bg-black px-9 py-[18px] text-lg text-white transition-opacity hover:opacity-90 lg:text-[20px]">
          Join as a Vendor
        </button>
      </div>
    </section>
  );
}
