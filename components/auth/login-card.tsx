"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { LoginFormFields } from "@/components/auth/login-form";

export function LoginCard() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirect") || "/dashboard";

  return (
    <div className="w-full max-w-[440px] rounded-[20px] bg-white p-8 shadow-[0px_4px_24px_0px_rgba(0,0,0,0.08)] sm:p-10">
      <Link href="/" className="mb-8 flex items-center gap-2">
        <Image
          src="/images/logo-mark.png"
          alt=""
          width={40}
          height={27}
          className="h-[27px] w-10 object-contain"
        />
        <Image
          src="/images/logo-text.png"
          alt="Venuze"
          width={104}
          height={16}
          className="h-4 w-[104px] object-contain"
        />
      </Link>

      <h1 className="mb-2 text-[28px] font-semibold text-black">Welcome back</h1>
      <p className="mb-8 text-sm text-[#808080]">
        Sign in to continue booking venues and vendors.
      </p>

      <LoginFormFields onSuccess={() => router.push(redirectTo)} />
    </div>
  );
}
