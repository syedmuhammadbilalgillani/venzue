"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { LoginFormFields } from "@/components/auth/login-form";
import { useAuthStore } from "@/store/auth-store";

function LoginDialogInner({ trigger }: { trigger: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  const logout = useAuthStore((s) => s.logout);
  const redirectTo = searchParams.get("redirect") || "/dashboard";

  // Middleware sends unauthenticated users to `/?login=1&redirect=<path>`
  // when they hit a protected route — auto-open the dialog in that case.
  useEffect(() => {
    if (searchParams.get("login") === "1" && !isAuthenticated) {
      setOpen(true);
    }
  }, [searchParams, isAuthenticated]);

  const clearAuthParams = () => {
    if (searchParams.has("login") || searchParams.has("redirect")) {
      router.replace("/", { scroll: false });
    }
  };

  if (isAuthenticated) {
    return (
      <button
        onClick={() => {
          logout();
          router.refresh();
        }}
        aria-label="Log out"
        title="Log out"
      >
        {trigger}
      </button>
    );
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        setOpen(next);
        if (!next) clearAuthParams();
      }}
    >
      <DialogTrigger render={<button aria-label="Sign in" />}>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[400px] rounded-[20px] p-8">
        <DialogHeader>
          <DialogTitle className="text-[22px] font-semibold text-black">
            Welcome back
          </DialogTitle>
          <DialogDescription>
            Sign in to continue booking venues and vendors.
          </DialogDescription>
        </DialogHeader>
        <LoginFormFields
          onSuccess={() => {
            setOpen(false);
            router.push(redirectTo);
          }}
        />
      </DialogContent>
    </Dialog>
  );
}

export function LoginDialog({ trigger }: { trigger: React.ReactNode }) {
  return (
    <Suspense fallback={trigger}>
      <LoginDialogInner trigger={trigger} />
    </Suspense>
  );
}
