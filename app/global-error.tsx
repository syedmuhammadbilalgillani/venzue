"use client";

import { useEffect } from "react";

export default function GlobalError({
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
    <html lang="en">
      <body className="antialiased">
        <main className="flex min-h-dvh flex-col items-center justify-center gap-4 px-5 text-center">
          <h1 className="text-2xl font-semibold text-black">Something went wrong</h1>
          <p className="max-w-md text-sm text-[#808080]">
            The application ran into an unexpected error. Please try again.
          </p>
          <button
            onClick={reset}
            className="rounded-[10px] bg-[#ff5037] px-6 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}
