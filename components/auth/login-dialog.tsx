"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
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

export function LoginDialog({ trigger }: { trigger: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  const logout = useAuthStore((s) => s.logout);

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
    <Dialog open={open} onOpenChange={setOpen}>
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
            router.push("/dashboard");
          }}
        />
      </DialogContent>
    </Dialog>
  );
}
