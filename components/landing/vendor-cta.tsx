import Image from "next/image";
import { Button } from "../ui/button";

export function VendorCta() {
  return (
    <section className="px-5 pb-10 md:px-8 lg:px-20 lg:-mt-28 ">
      <div className="mx-auto flex max-w-7xl lg:flex-nowrap flex-wrap  justify-center lg:gap-6 gap-10 rounded-[20px] bg-linear-to-r from-[#ff786a] via-[#ff5037] to-[#ffc331] p-8 ">
        <div className="space-y-3 flex flex-col lg:items-start items-center">
          <div className="relative z-10 flex flex-col gap-2.5 text-white lg:text-start text-center">
            <h2 className="max-w-140 text-[28px] font-semibold leading-tight md:text-[36px] lg:text-[44px] lg:leading-[50px]">
              Grow Your Business with Venuze{" "}
            </h2>
            <p className="max-w-140 text-lg  lg:leading-[30px]">
              Showcase your services to thousands of event organizers and
              creators searching for talent like yours.
            </p>
          </div>
          <div className="flex justify-between gap-5">
            <Button
              variant={"secondary"}
              className={"px-12 py-7 text-lg"}
              size={"lg"}
            >
              Join as a Vendor
            </Button>
            <Image
              src={"/images/arrow.svg"}
              width={194}
              height={194}
              alt="arrow"
              className="hidden lg:block"
            />
          </div>
        </div>

        <Image
          src="/images/vendor-photographer.svg"
          alt="CTA image"
          width={394}
          height={296}
          className="pointer-events-none   min-h-74  w-auto object-contain "
        />
      </div>
    </section>
  );
}
