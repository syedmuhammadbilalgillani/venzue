"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema, type LoginFormValues } from "@/lib/schemas/auth";
import { useLogin, getLoginErrorMessage } from "@/lib/hooks/use-login";

export function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirect") || "/dashboard";
  const { mutate, isPending, isError, error } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    },
  });

  const onSubmit = (values: LoginFormValues) => {
    mutate(values, {
      onSuccess: () => router.push(redirectTo),
    });
  };

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

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium text-black">
            Email
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            aria-invalid={!!errors.email}
            className="h-12 rounded-[10px] border border-[#e5e5e5] px-4 text-base text-black outline-none transition-colors focus:border-[#ff5037] aria-[invalid=true]:border-red-500"
            {...register("email")}
          />
          {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="password" className="text-sm font-medium text-black">
            Password
          </label>
          <input
            id="password"
            type="password"
            autoComplete="current-password"
            aria-invalid={!!errors.password}
            className="h-12 rounded-[10px] border border-[#e5e5e5] px-4 text-base text-black outline-none transition-colors focus:border-[#ff5037] aria-[invalid=true]:border-red-500"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-xs text-red-500">{errors.password.message}</p>
          )}
        </div>

        {isError && (
          <p role="alert" className="rounded-[10px] bg-red-50 px-4 py-3 text-sm text-red-600">
            {getLoginErrorMessage(error)}
          </p>
        )}

        <button
          type="submit"
          disabled={isPending}
          className="mt-2 flex h-12 items-center justify-center rounded-[10px] bg-[#ff5037] text-base font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isPending ? "Signing in..." : "Sign in"}
        </button>
      </form>
    </div>
  );
}
