"use client";

import dynamic from "next/dynamic";
import { Maximize2, Minimize2 } from "lucide-react";
import type { Venue } from "@/types/venue";

const GoogleMapView = dynamic(
  () =>
    import("@/components/search/google-map").then((mod) => mod.GoogleMapView),
  {
    ssr: false,
    loading: () => (
      <div className="flex size-full items-center justify-center bg-[#e5e5e5] text-sm text-[#808080]">
        Loading map...
      </div>
    ),
  },
);

export function MapPanel({
  venues,
  isExpanded,
  onToggleExpand,
}: {
  venues: Venue[];
  isExpanded?: boolean;
  onToggleExpand?: () => void;
}) {
  return (
    <div className="relative hidden size-full overflow-hidden bg-[#e5e5e5] lg:block">
      <GoogleMapView venues={venues} />

      {onToggleExpand && (
        <button
          onClick={onToggleExpand}
          className="absolute top-4 right-4 z-[10000] flex h-10 w-10 items-center justify-center rounded-lg border border-[#ffd6cf] bg-white/95 text-[#ff5037] shadow-lg backdrop-blur-sm transition-all hover:scale-105 hover:bg-white active:scale-95"
          title={isExpanded ? "Show List View" : "View Full Map"}
        >
          {isExpanded ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
        </button>
      )}
    </div>
  );
}


