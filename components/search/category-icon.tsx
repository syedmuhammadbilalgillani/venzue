import type { Category } from "@/types/venue";
import AllSpaces from "@/components/icons/all-spaces";
import PhotoStudio from "@/components/icons/photo-studio";
import FilmStudio from "@/components/icons/film-studio";
import Warehouse from "@/components/icons/warehouse";
import GalleryIcon from "@/components/icons/gallery";
import Restraunt from "@/components/icons/restraunt";
import Appartment from "@/components/icons/appartment";
import OfficeSpace from "@/components/icons/office-space";
import VenueIcon from "@/components/icons/venue";
import PartyIcon from "@/components/icons/party";
import MeetingIcon from "@/components/icons/meeting";

const iconMap: Record<Category, React.ComponentType<{ active?: boolean }>> = {
  "All Spaces": AllSpaces,
  "Photo Studio": PhotoStudio,
  "Film Studio": FilmStudio,
  Warehouse: Warehouse,
  Gallery: GalleryIcon,
  Restaurant: Restraunt,
  Apartment: Appartment,
  "Office Space": OfficeSpace,
  Venue: VenueIcon,
  "Private Party": PartyIcon,
  Meeting: MeetingIcon,
};

export function CategoryIcon({ category, active }: { category: Category; active?: boolean }) {
  const Icon = iconMap[category];
  return <Icon active={active} />;
}
