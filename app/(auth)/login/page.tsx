import { Suspense } from "react";
import { LoginCard } from "@/components/auth/login-card";

export default function LoginPage() {
  return (
    <main className="flex min-h-dvh items-center justify-center bg-[#fdf1d2] px-5 py-16">
      <Suspense fallback={null}>
        <LoginCard />
      </Suspense>
    </main>
  );
}
