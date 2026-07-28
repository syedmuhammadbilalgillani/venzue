"use client";

import { useEffect } from "react";
import { ErrorFallback } from "@/components/error-fallback";

export default function SearchError({
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
        title="Couldn't load search results"
        message="Something went wrong while loading venues. Try again."
        reset={reset}
      />
    </main>
  );
}
