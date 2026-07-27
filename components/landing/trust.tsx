import Image from "next/image";

const stats = [
  { value: "1,500+", label: "Venues Vetted & Approved", bg: "#ff786a", text: "text-white" },
  { value: "7,500+", label: "Events Successfully Hosted", bg: "#ff5037", text: "text-white" },
  { value: "35+", label: "Cities Across the Region", bg: "#fe8b16", text: "text-white" },
  { value: "4.9★", label: "Average Host Rating", bg: "#ffc332", text: "text-black" },
];

const testimonials = [
  {
    quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    name: "Michael Carter",
    image: "/images/testimonial-1.jpg",
  },
  {
    quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    name: "by Ayesha M.",
    image: "/images/testimonial-2.jpg",
  },
];

export function Trust() {
  return (
    <section
      className="px-5 py-16 md:px-8 lg:px-0 lg:py-[100px]"
      style={{
        background:
          "linear-gradient(270deg, rgb(255, 219, 216) 0%, rgb(255, 240, 205) 100%)",
      }}
    >
      <div className="mx-auto mb-10 max-w-[1200px] text-center lg:mb-[70px]">
        <h2 className="text-[28px] font-semibold leading-tight text-black md:text-[36px] lg:text-[44px] lg:leading-[50px]">
          Trusted by Event Creators Who Demand Excellence
        </h2>
        <p className="mt-2.5 text-base text-black md:text-lg lg:text-[20px] lg:leading-[30px]">
          Join thousands of planners and hosts who love our seamless discovery and booking
          experience.
        </p>
      </div>

      <div className="mx-auto mb-10 grid max-w-[1277px] grid-cols-2 gap-4 lg:mb-16 lg:grid-cols-4 lg:gap-6">
        {stats.map((s) => (
          <div
            key={s.label}
            className={`flex flex-col items-center gap-2.5 rounded-[20px] px-5 py-7 text-center ${s.text}`}
            style={{ backgroundColor: s.bg }}
          >
            <p className="text-[28px] font-bold tracking-[-1.02px] lg:text-[34px]">{s.value}</p>
            <p className="text-sm tracking-[-0.48px] md:text-base">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-6 md:grid-cols-2">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="flex overflow-hidden rounded-[20px] bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.1)]"
          >
            <div className="relative hidden w-[237px] shrink-0 md:block">
              <Image src={t.image} alt={t.name} fill className="object-cover" />
            </div>
            <div className="flex flex-col justify-center gap-6 p-6 lg:p-10">
              <p className="text-lg leading-[30px] tracking-[0.6px] text-black lg:text-xl">
                {t.quote}
              </p>
              <div className="flex flex-col gap-1.5">
                <p className="text-lg font-bold tracking-[0.54px] text-black">{t.name}</p>
                <Image src="/images/icon-5star.svg" alt="5 stars" width={80} height={16} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
