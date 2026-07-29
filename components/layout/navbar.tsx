"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LoginDialog } from "@/components/auth/login-dialog";
import { useAuthStore } from "@/store/auth-store";
import { ChevronDown, LayoutDashboard, LogOut } from "lucide-react";

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
  const router = useRouter();
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  const email = useAuthStore((s) => s.email);
  const logout = useAuthStore((s) => s.logout);

  const handleLogout = () => {
    logout();
    router.push("/");
    router.refresh();
  };

  return (
    <header
      className={`flex h-18 items-center justify-between px-5 md:h-[88px] md:px-8 ${
        isTransparent
          ? "absolute inset-x-0 top-0 z-10 lg:px-10"
          : "border-b border-divider shadow-[0px_4px_10px_0px_rgba(0,0,0,0.1)]"
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
        <div className="hidden items-center gap-7 rounded-[10px] bg-surface-subtle-2 px-6 py-3 lg:flex">
          <span className="text-sm font-medium text-black">{where}</span>
          <span className="h-4 w-px bg-neutral-300" />
          <span className="text-sm font-medium text-black">{when}</span>
          <span className="h-4 w-px bg-neutral-300" />
          <span className="text-sm font-medium text-black">
            {guests} Guests
          </span>
          <button
            aria-label="Search"
            className="flex size-9 items-center justify-center rounded-[10px] bg-primary transition-opacity hover:opacity-90"
          >
            <Image
              src="/images/search-topbar-search.svg"
              alt=""
              width={19}
              height={19}
            />
          </button>
        </div>
      )}

      <div className="flex items-center gap-2 md:gap-2.75">
        <button className="hidden items-center gap-1.5 rounded-[10px] border border-primary-border bg-white px-4 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary-tint md:flex">
          Add your listing
          <span aria-hidden className="text-xs">
            <ChevronDown color="gray" size={18} />
          </span>
        </button>
        <button className="flex items-center gap-1.5 rounded-[10px] border border-primary-border bg-white px-3 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary-tint">
          EN
          <span aria-hidden className="text-xs">
            <ChevronDown color="gray" size={18} />
          </span>
        </button>

        {isAuthenticated ? (
          <>
            <Link
              href="/dashboard"
              className="flex items-center gap-1.5 rounded-[10px] border border-primary-border bg-white px-3 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary-tint md:px-4"
            >
              <LayoutDashboard size={16} />
              <span className="hidden md:inline">Dashboard</span>
            </Link>
            <div
              title={email ?? undefined}
              className="hidden size-10 items-center justify-center rounded-full border border-primary-border bg-primary text-sm font-semibold text-white sm:flex"
            >
              {email?.[0]?.toUpperCase() ?? "U"}
            </div>
            <button
              onClick={handleLogout}
              aria-label="Log out"
              title="Log out"
              className="flex size-10 items-center justify-center rounded-full border border-primary-border bg-white text-primary transition-colors hover:bg-primary-tint"
            >
              <LogOut size={18} />
            </button>
          </>
        ) : (
          <LoginDialog
            trigger={
              <span className="flex size-10 items-center justify-center rounded-full border border-primary-border bg-white text-primary transition-colors hover:bg-primary-tint">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-3.33 0-10 1.67-10 5v3h20v-3c0-3.33-6.67-5-10-5z" />
                </svg>
              </span>
            }
          />
        )}
      </div>
    </header>
  );
}
