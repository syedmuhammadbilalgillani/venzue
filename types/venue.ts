export interface Venue {
  id: string;
  title: string;
  location: string;
  guests: string;
  areaSqFt: string;
  parking: string;
  moreCount: number;
  pricePerHour: number;
  verified: boolean;
  image: string;
}

export const categories = [
  "All Spaces",
  "Photo Studio",
  "Film Studio",
  "Warehouse",
  "Gallery",
  "Restaurant",
  "Apartment",
  "Office Space",
  "Venue",
  "Private Party",
  "Meeting",
] as const;

export type Category = (typeof categories)[number];
