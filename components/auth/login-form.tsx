"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { loginSchema, type LoginFormValues } from "@/lib/schemas/auth";
import { useLogin, getLoginErrorMessage } from "@/lib/hooks/use-login";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface LoginFormProps {
  onSuccess?: () => void;
}

export function LoginFormFields({ onSuccess }: LoginFormProps) {
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
      onSuccess: () => {
        toast.success("Welcome back!");
        onSuccess?.();
      },
      onError: (err) => {
        toast.error(getLoginErrorMessage(err));
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          autoComplete="email"
          aria-invalid={!!errors.email}
          className="h-12 rounded-[10px] border-[#e5e5e5] px-4 text-base focus-visible:border-primary focus-visible:ring-primary/20"
          {...register("email")}
        />
        {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          autoComplete="current-password"
          aria-invalid={!!errors.password}
          className="h-12 rounded-[10px] border-[#e5e5e5] px-4 text-base focus-visible:border-primary focus-visible:ring-primary/20"
          {...register("password")}
        />
        {errors.password && <p className="text-xs text-red-500">{errors.password.message}</p>}
      </div>

      {isError && (
        <p role="alert" className="rounded-[10px] bg-red-50 px-4 py-3 text-sm text-red-600">
          {getLoginErrorMessage(error)}
        </p>
      )}

      <Button
        type="submit"
        disabled={isPending}
        className="mt-2 h-12 rounded-[10px] bg-primary text-base font-semibold text-primary-foreground hover:bg-primary/90"
      >
        {isPending ? "Signing in..." : "Sign in"}
      </Button>
    </form>
  );
}
