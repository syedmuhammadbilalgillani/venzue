import Image from "next/image";

const columns = [
  { title: "Venuze", links: ["About", "News", "Careers", "Investors"] },
  { title: "Support", links: ["Listings your venue", "Listing your service", "Help center", "FAQ"] },
  { title: "Explore", links: ["Venue types", "Venue features", "Service options", "Locations"] },
  { title: "Legal & Privacy", links: ["Terms of service", "Payment & refund policy", "Host agreement", "Vendor agreement"] },
];

export function Footer() {
  return (
    <footer className="mx-5 rounded-t-[32px] bg-black px-6 py-14 md:mx-8 md:px-10 lg:mx-[80px] lg:rounded-t-[50px] lg:px-[84px] lg:py-16">
      <div className="mx-auto flex max-w-[1272px] flex-col gap-10 lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-6">
          <Image src="/images/logo-mark.png" alt="Venuze" width={67} height={45} className="h-[45px] w-[67px] object-contain" />
          <p className="max-w-[350px] text-xl font-semibold leading-relaxed text-white">
            Make it memorable—book the perfect venue and the pros who make it shine.
          </p>
          <div className="flex gap-4">
            <Image src="/images/icon-twitter.svg" alt="Twitter" width={26} height={26} />
            <Image src="/images/icon-facebook.svg" alt="Facebook" width={26} height={26} />
            <Image src="/images/icon-instagram.svg" alt="Instagram" width={26} height={26} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-10">
          {columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-2.5">
              <h4 className="text-lg text-[#a6a6a6]">{col.title}</h4>
              <ul className="flex flex-col text-xs leading-[1.75] text-white">
                {col.links.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex w-full max-w-[516px] flex-col gap-4">
          <h4 className="text-2xl font-semibold text-white">Get in Touch</h4>
          <input
            type="email"
            placeholder="Email Address"
            className="h-11 rounded-xl border border-[#4a4a4a] bg-[#1d1d1d] px-5 text-base text-white placeholder:text-white/80 focus:border-white focus:outline-none"
          />
          <textarea
            placeholder="Message"
            rows={3}
            className="rounded-[10px] border border-[#4a4a4a] bg-[#1d1d1d] px-5 py-4 text-base text-white placeholder:text-white/80 focus:border-white focus:outline-none"
          />
          <button className="self-start rounded-[10px] bg-[#ff5037] px-9 py-[18px] text-lg font-semibold text-white transition-opacity hover:opacity-90">
            Send
          </button>
        </div>
      </div>

      <hr className="my-10 border-white/10" />

      <p className="text-right text-sm text-[#9a9a9a]">© 2026 Venuze. All rights reserved.</p>
    </footer>
  );
}
