"use client";

import { useState } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { makeQueryClient } from "@/lib/query-client";
import { Toaster } from "@/components/ui/sonner";
import { Footer } from "./landing/footer";

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => makeQueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <Footer />
      <Toaster position="top-center" richColors />
    </QueryClientProvider>
  );
}
