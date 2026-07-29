import Image from "next/image";

const steps = [
  {
    n: 1,
    title: "Search & filter",
    body: "Browse our curated collection of venues and event professionals. Use smart filters, high-quality visuals, and authentic reviews to find options that fit your needs, style, and budget.",
  },
  {
    n: 2,
    title: "Compare & message",
    body: "Communicate directly with venue hosts and service providers. Request tailored quotes, discuss requirements, and design every detail of your event or project with confidence.",
  },
  {
    n: 3,
    title: "Book & add services",
    body: "Secure your choices with ease through our protected booking system. With clear agreements, secure payments, and ongoing support, you can move forward knowing everything is handled.",
  },
];

export function Path() {
  return (
    <section className="mx-auto max-w-[1440px] bg-white px-5 py-16 md:px-8 lg:px-0 lg:py-[100px]">
      <div className="mx-auto mb-12 max-w-[1200px] text-center lg:mb-[100px]">
        <h2 className="text-[28px] font-semibold leading-tight text-black md:text-[36px] lg:text-[44px] lg:leading-[50px]">
          Your Path to the Perfect Venue
        </h2>
        <p className="mt-2.5 text-base text-black md:text-lg lg:text-[20px] lg:leading-[30px]">
          Planning an event, production, or gathering shouldn&apos;t feel
          complicated. Our streamlined process connects you with the right
          venues and trusted professionals, taking the stress out of logistics
          so you can focus on what matters most making it a success.
        </p>
      </div>

      <div className="mx-auto flex max-w-[1168px] flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-[100px]">
        <div className="relative grid w-full max-w-[515px] grid-cols-2 gap-4">
          <div className="flex flex-col gap-4 pt-10">
            <Image
              src="/images/process-1.jpg"
              alt="Guests celebrating"
              width={250}
              height={174}
              className="h-[130px] w-full rounded-[20px] object-cover md:h-[174px]"
            />
            <Image
              src="/images/process-2.jpg"
              alt="Wedding decor"
              width={250}
              height={174}
              className="h-[130px] w-full rounded-[20px] object-cover md:h-[174px]"
            />
          </div>
          <div className="flex flex-col gap-4">
            <Image
              src="/images/process-3.jpg"
              alt="Event photographer at work"
              width={250}
              height={174}
              className="h-[130px] w-full rounded-[20px] object-cover md:h-[174px]"
            />
            <Image
              src="/images/process-4.jpg"
              alt="Couple celebrating"
              width={250}
              height={174}
              className="h-[130px] w-full rounded-[20px] object-cover md:h-[174px]"
            />
          </div>
        </div>

        <div className="flex w-full max-w-[523px] gap-6">
          <div className="flex flex-col gap-10 md:mt-10">
            {steps?.map((v, i) => (
              <div key={i} className="relative">
                <div
                  className={`absolute left-6 top-10 w-0.5 h-full border border-gray-400 border-dashed ${i === steps.length - 1 ? "hidden" : ""} `}
                ></div>
                <div className="flex gap-6 group">
                  <div className="relative">
                    <div className="bg-gradient-to-r from-gradient-from via-gradient-via to-gradient-to w-12 h-12 rounded-full  flex items-center justify-center text-white font-bold text-xl shadow-lg transition-transform duration-300">
                      {v.n}
                    </div>
                  </div>
                  <div className="flex-1 text-black">
                    <h3 className="text-2xl font-semibold mb-3 ">{v.title}</h3>
                    <p className="leading-relaxed">{v.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
