"use client";

import { useState } from "react";
import { GoogleMap, OverlayView, useJsApiLoader } from "@react-google-maps/api";
import Image from "next/image";
import type { Venue } from "@/types/venue";

const containerStyle = { width: "100%", height: "100%" };

function MarkerBadge({ active }: { active: boolean }) {
  return (
    <div
      className={`flex size-10 -translate-x-1/2 -translate-y-full items-center justify-center rounded-full border-2 border-white shadow-lg transition-transform hover:scale-110 ${
        active ? "z-10 bg-[#ff5037]" : "bg-white"
      }`}
    >
      <Image
        src="/images/logo-mark.png"
        alt=""
        width={20}
        height={14}
        className={active ? "brightness-0 invert" : ""}
      />
    </div>
  );
}

export function GoogleMapView({ venues }: { venues: Venue[] }) {
  const { isLoaded } = useJsApiLoader({
    id: "venuze-google-map",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "",
  });

  const [selectedId, setSelectedId] = useState<string | null>();
  // venues[0]?.id ?? null,
  const selected = venues.find((v) => v.id === selectedId) ?? null;

  if (!process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY) {
    return (
      <div className="flex size-full items-center justify-center bg-[#e5e5e5] p-6 text-center text-sm text-[#808080]">
        Add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY to .env.local to enable the map.
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="flex size-full items-center justify-center bg-[#e5e5e5] text-sm text-[#808080]">
        Loading map...
      </div>
    );
  }

  const center =
    venues.length > 0
      ? { lat: venues[0].lat, lng: venues[0].lng }
      : { lat: 51.5074, lng: -0.1278 };

  return (
    <div className="relative size-full">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={11}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
          scrollwheel: true,
        }}
      >
        {venues.map((venue) => (
          <OverlayView
            key={venue.id}
            position={{ lat: venue.lat, lng: venue.lng }}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          >
            <button
              onClick={() => setSelectedId(venue.id)}
              aria-label={`View ${venue.title} on map`}
              className="cursor-pointer"
            >
              <MarkerBadge active={venue.id === selectedId} />
            </button>
          </OverlayView>
        ))}
      </GoogleMap>

      {selected && (
        <div className="pointer-events-none absolute left-1/2 top-6 z-[10] w-60 -translate-x-1/2">
          <div className="pointer-events-auto overflow-hidden rounded-[16px] bg-white shadow-xl">
            <div className="relative h-[150px] w-full">
              <Image
                src={selected.image}
                alt={selected.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-1 p-3">
              <p className="line-clamp-1 text-sm font-semibold text-black">
                {selected.title}
              </p>
              <div className="flex items-center gap-1 text-xs text-[#ff5037]">
                <Image
                  src="/images/icon-location.svg"
                  alt=""
                  width={14}
                  height={14}
                />
                {selected.location}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
