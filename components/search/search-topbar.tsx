import Image from "next/image";
import Link from "next/link";

export function SearchTopbar() {
  return (
    <header className="flex h-[88px] items-center justify-between border-b border-[#e9e9e9] px-3.5 shadow-[0px_4px_10px_0px_rgba(0,0,0,0.1)] sm:px-8">
      <Link href="/" className="flex items-center gap-2">
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
          className="hidden h-[19px] w-[124px] object-contain md:block"
        />
      </Link>

      <div className="hidden items-center gap-7 rounded-[10px] bg-[#f7f7f7] px-6 py-3 lg:flex">
        <span className="text-sm font-medium text-black">London, UK</span>
        <span className="h-4 w-px bg-[#d9d9d9]" />
        <span className="text-sm font-medium text-black">Anytime</span>
        <span className="h-4 w-px bg-[#d9d9d9]" />
        <span className="text-sm font-medium text-black">10-20 Guests</span>
        <button
          aria-label="Search"
          className="flex size-9 items-center justify-center rounded-[10px] bg-[#ff5037] transition-opacity hover:opacity-90"
        >
          <Image src="/images/search-topbar-search.svg" alt="" width={19} height={19} />
        </button>
      </div>

      <div className="flex items-center gap-2 md:gap-2.75">
        <button className="hidden items-center gap-1.5 rounded-[10px] border border-[#ffd6cf] px-4 py-2.5 text-sm font-semibold text-[#ff5037] transition-colors hover:bg-[#fff5f3] md:flex">
          Add your listing
          <span aria-hidden className="text-xs">▾</span>
        </button>
        <button className="flex items-center gap-1.5 rounded-[10px] border border-[#ffd6cf] px-3 py-2.5 text-sm font-semibold text-[#ff5037] transition-colors hover:bg-[#fff5f3]">
          EN
          <span aria-hidden className="text-xs">▾</span>
        </button>
        <button
          aria-label="Account"
          className="flex size-10 items-center justify-center rounded-full border border-[#ffd6cf] text-[#ff5037] transition-colors hover:bg-[#fff5f3]"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-3.33 0-10 1.67-10 5v3h20v-3c0-3.33-6.67-5-10-5z" />
          </svg>
        </button>
      </div>
    </header>
  );
}
