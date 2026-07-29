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
      <div className="flex size-full items-center justify-center bg-border text-sm text-muted-foreground">
        Loading map...
      </div>
    ),
  },
);

export function MapPanel({
  venues,
  isExpanded,
  onToggleExpand,
  forceVisible,
}: {
  venues: Venue[];
  isExpanded?: boolean;
  onToggleExpand?: () => void;
  forceVisible?: boolean;
}) {
  return (
    <div
      className={`relative size-full overflow-hidden bg-border ${
        forceVisible ? "block" : "hidden lg:block"
      }`}
    >
      <GoogleMapView venues={venues} />

      {onToggleExpand && (
        <button
          onClick={onToggleExpand}
          className="absolute top-4 right-4 z-[10000] hidden h-10 w-10 items-center justify-center rounded-lg border border-primary-border bg-white/95 text-primary shadow-lg backdrop-blur-sm transition-all hover:scale-105 hover:bg-white active:scale-95 lg:flex"
          title={isExpanded ? "Show List View" : "View Full Map"}
        >
          {isExpanded ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
        </button>
      )}
    </div>
  );
}


