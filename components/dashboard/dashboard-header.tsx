"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/auth-store";

export function DashboardHeader() {
  const router = useRouter();
  const email = useAuthStore((s) => s.email);
  const logout = useAuthStore((s) => s.logout);

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <header className="flex h-20 items-center justify-between border-b border-[#e5e5e5] px-5 md:px-8">
      <Image
        src="/images/logo-mark.png"
        alt="Venuze"
        width={40}
        height={27}
        className="h-[27px] w-10 object-contain"
      />
      <div className="flex items-center gap-4">
        <span className="hidden text-sm text-[#808080] sm:inline">{email}</span>
        <button
          onClick={handleLogout}
          className="rounded-[10px] border border-[#ff5037] px-4 py-2 text-sm font-medium text-[#ff5037] transition-colors hover:bg-[#ff5037] hover:text-white"
        >
          Log out
        </button>
      </div>
    </header>
  );
}
