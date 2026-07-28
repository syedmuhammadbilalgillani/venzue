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

export interface Venue {
  id: string;
  title: string;
  city: string;
  location: string;
  category: Exclude<Category, "All Spaces">;
  guests?: string;
  areaSqFt?: string;
  parking?: string;
  moreCount?: number;
  pricePerHour: number | null;
  currency?: string;
  rating?: number;
  reviews?: number;
  verified: boolean;
  image: string;
  lat: number;
  lng: number;
  tags: string[];
}

export interface ApiVenueEntry {
  venue_slug: string;
  venue_name: string;
  location: {
    id: string;
    country: string;
    state: string | null;
    city: string;
    street_address: string;
    suite: string;
    zip_code: string | null;
    latitude: number;
    longitude: number;
  };
  pricing: {
    hourly_rate: number | null;
    daily_rate: number | null;
    currency: { symbol: string; code: string } | null;
    primary_pricing_type: string;
  } | null;
  venue_image: string | null;
  property: { id: string; property_name: string } | null;
}

export interface ApiVenueResponse {
  success: boolean;
  message: string;
  data: ApiVenueEntry[];
}
