import Image from "next/image";
import type { Category } from "@/types/venue";

const iconSrc: Partial<Record<Category, string>> = {
  "All Spaces": "/images/category-icons/all-spaces.png",
  "Photo Studio": "/images/category-icons/photo-studio.png",
  "Film Studio": "/images/category-icons/film-studio.png",
  Warehouse: "/images/category-icons/warehouse.png",
  Restaurant: "/images/category-icons/restaurant.png",
  Apartment: "/images/category-icons/apartment.png",
  "Office Space": "/images/category-icons/office-space.png",
  Venue: "/images/category-icons/venue.png",
  "Private Party": "/images/category-icons/private-party.png",
  Meeting: "/images/category-icons/meeting.png",
};

const activeFilter =
  "brightness(0) saturate(100%) invert(48%) sepia(90%) saturate(2000%) hue-rotate(340deg) brightness(1.05)";

export function CategoryIcon({ category, active }: { category: Category; active?: boolean }) {
  const src = iconSrc[category];
  if (!src) return null;

  return (
    <Image
      src={src}
      alt=""
      width={30}
      height={30}
      className="size-[30px] object-contain"
      style={active && category !== "Photo Studio" ? { filter: activeFilter } : undefined}
    />
  );
}
