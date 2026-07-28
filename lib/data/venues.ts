import type { Venue } from "@/types/venue";

function makeVenue(id: string): Venue {
  return {
    id,
    title: "High-Spec Room in Trendy Home Clapham/ Stockwell",
    location: "London, SW1",
    guests: "300+",
    areaSqFt: "2,000 sq ft",
    parking: "Free parking",
    moreCount: 25,
    pricePerHour: 50,
    verified: true,
    image: "/images/venue-card-detail.jpg",
  };
}

export const venues: Venue[] = Array.from({ length: 6 }, (_, i) => makeVenue(String(i + 1)));
