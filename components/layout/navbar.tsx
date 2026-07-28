import Image from "next/image";
import Link from "next/link";
import { LoginDialog } from "@/components/auth/login-dialog";

interface NavbarProps {
  variant: "transparent" | "solid";
  showSearchPill?: boolean;
  className?: string;
  where?: string;
  when?: string;
  guests?: string;
}

export function Navbar({
  variant,
  showSearchPill = false,
  className = "",
  where = "London, UK",
  when = "Anytime",
  guests = "10-20",
}: NavbarProps) {
  const isTransparent = variant === "transparent";

  return (
    <header
      className={`flex h-18 items-center justify-between px-5 md:h-[88px] md:px-8 ${
        isTransparent
          ? "absolute inset-x-0 top-0 z-10 lg:px-10"
          : "border-b border-[#e9e9e9] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.1)]"
      } ${className}`}
    >
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

      {showSearchPill && (
        <div className="hidden items-center gap-7 rounded-[10px] bg-[#f7f7f7] px-6 py-3 lg:flex">
          <span className="text-sm font-medium text-black">{where}</span>
          <span className="h-4 w-px bg-[#d9d9d9]" />
          <span className="text-sm font-medium text-black">{when}</span>
          <span className="h-4 w-px bg-[#d9d9d9]" />
          <span className="text-sm font-medium text-black">{guests} Guests</span>
          <button
            aria-label="Search"
            className="flex size-9 items-center justify-center rounded-[10px] bg-[#ff5037] transition-opacity hover:opacity-90"
          >
            <Image src="/images/search-topbar-search.svg" alt="" width={19} height={19} />
          </button>
        </div>
      )}

      <div className="flex items-center gap-2 md:gap-2.75">
        <button className="hidden items-center gap-1.5 rounded-[10px] border border-[#ffd6cf] bg-white px-4 py-2.5 text-sm font-semibold text-[#ff5037] transition-colors hover:bg-[#fff5f3] md:flex">
          Add your listing
          <span aria-hidden className="text-xs">▾</span>
        </button>
        <button className="flex items-center gap-1.5 rounded-[10px] border border-[#ffd6cf] bg-white px-3 py-2.5 text-sm font-semibold text-[#ff5037] transition-colors hover:bg-[#fff5f3]">
          EN
          <span aria-hidden className="text-xs">▾</span>
        </button>
        <LoginDialog
          trigger={
            <span className="flex size-10 items-center justify-center rounded-full border border-[#ffd6cf] bg-white text-[#ff5037] transition-colors hover:bg-[#fff5f3]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-3.33 0-10 1.67-10 5v3h20v-3c0-3.33-6.67-5-10-5z" />
              </svg>
            </span>
          }
        />
      </div>
    </header>
  );
}
