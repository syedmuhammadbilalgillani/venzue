import Image from "next/image";
import { Button } from "../ui/button";

export function VenueCta() {
  return (
    <section className="px-5 pb-10 md:px-8 lg:px-20">
      <div className="mx-auto flex max-w-7xl  justify-center lg:gap-6 gap-10 rounded-[20px] bg-linear-to-r from-[#ff786a] via-[#ff5037] to-[#ffc331] p-8 ">
        <div className="space-y-3">
          <div className="relative z-10 flex flex-col gap-2.5 text-white">
            <h2 className="max-w-140 text-[28px] font-semibold leading-tight md:text-[36px] lg:text-[44px] lg:leading-[50px]">
              Turn Your Venue into a Destination
            </h2>
            <p className="max-w-140 text-base font-medium md:text-lg lg:text-[20px] lg:leading-[30px]">
              List your space on Venuze and unlock new revenue opportunities.
              Reach clients looking for venues just like yours.
            </p>
          </div>
          <div className="flex justify-between">
            <Button
              variant={"secondary"}
              className={"px-12 py-7 text-lg"}
              size={"lg"}
            >
              List Your Venue
            </Button>
            <Image src={"/images/arrow.svg"} width={194} height={194} alt="" />
          </div>
        </div>

        <Image
          src="/images/cta.svg"
          alt="CTA image"
          width={394}
          height={296}
          className="pointer-events-none   min-h-74  w-auto object-contain "
        />
      </div>
    </section>
  );
}
