import Image from "next/image";

const columns = [
  { title: "Venuze", links: ["About", "News", "Careers", "Investors"] },
  {
    title: "Support",
    links: [
      "Listings your venue",
      "Listing your service",
      "Help center",
      "FAQ",
    ],
  },
  {
    title: "Explore",
    links: ["Venue types", "Venue features", "Service options", "Locations"],
  },
  {
    title: "Legal & Privacy",
    links: [
      "Terms of service",
      "Payment & refund policy",
      "Host agreement",
      "Vendor agreement",
    ],
  },
];

export function Footer() {
  return (
    <footer className=" rounded-t-4xl bg-black px-6 py-14  md:px-10 lg:rounded-t-[50px] lg:px-21 lg:py-16">
      <div className="mx-auto flex  flex-col gap-10 lg:flex-row lg:justify-between">
        <div>
          <div className="flex  gap-6">
            <Image
              src="/images/logo-mark.png"
              alt="Venuze"
              width={67}
              height={45}
              className="h-11.25 w-16.75 object-contain"
            />
            <p className=" text-xl font-semibold leading-relaxed text-white">
              Make it memorable—book the perfect venue and the pros who make it
              shine.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-10">
            {columns.map((col) => (
              <div key={col.title} className="flex flex-col gap-2.5">
                <h4 className="text-lg text-muted-light">{col.title}</h4>
                <ul className="flex flex-col text-xs leading-[1.75] text-white">
                  {col.links.map((l) => (
                    <li key={l}>{l}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex w-full max-w-[516px] flex-col gap-4">
          <h4 className="text-2xl font-semibold text-white">Get in Touch</h4>
          <input
            type="email"
            placeholder="Email Address"
            className="h-11 rounded-xl border border-input-border bg-input-surface px-5 text-base text-white placeholder:text-white/80 focus:border-white focus:outline-none"
          />
          <textarea
            placeholder="Message"
            rows={3}
            className="rounded-[10px] border border-input-border bg-input-surface px-5 py-4 text-base text-white placeholder:text-white/80 focus:border-white focus:outline-none"
          />
          <button className="self-start rounded-[10px] bg-primary px-9 py-[18px] text-lg font-semibold text-white transition-opacity hover:opacity-90">
            Send
          </button>
        </div>
      </div>

      <hr className="my-10 border-white/10" />
      <div className="flex flex-wrap lg:justify-between gap-6 justify-center">
        <div className="flex gap-4">
          <Image
            src="/images/icon-twitter.svg"
            alt="Twitter"
            width={26}
            height={26}
          />
          <Image
            src="/images/icon-facebook.svg"
            alt="Facebook"
            width={26}
            height={26}
          />
          <Image
            src="/images/icon-instagram.svg"
            alt="Instagram"
            width={26}
            height={26}
          />
        </div>
        <p className="text-right text-sm text-copyright">
          © 2026 Venuze. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
