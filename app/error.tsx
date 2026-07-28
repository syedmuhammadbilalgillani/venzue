"use client";

import { useEffect } from "react";
import { ErrorFallback } from "@/components/error-fallback";

export default function RootError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-dvh items-center justify-center px-5">
      <ErrorFallback
        title="Something went wrong"
        message="We hit an unexpected error loading this page. Try again, or head back home."
        reset={reset}
      />
    </main>
  );
}
