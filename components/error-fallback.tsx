"use client";

import { AlertTriangle } from "lucide-react";

interface ErrorFallbackProps {
  title?: string;
  message?: string;
  reset?: () => void;
  className?: string;
}

export function ErrorFallback({
  title = "Something went wrong",
  message = "An unexpected error occurred. Please try again.",
  reset,
  className = "",
}: ErrorFallbackProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-4 rounded-[10px] border border-dashed border-[#e5e5e5] px-6 py-16 text-center ${className}`}
    >
      <span className="flex size-14 items-center justify-center rounded-full bg-red-50 text-red-500">
        <AlertTriangle size={28} />
      </span>
      <div>
        <h2 className="text-lg font-semibold text-black">{title}</h2>
        <p className="mt-1 text-sm text-[#808080]">{message}</p>
      </div>
      {reset && (
        <button
          onClick={reset}
          className="rounded-[10px] bg-[#ff5037] px-6 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          Try again
        </button>
      )}
    </div>
  );
}
