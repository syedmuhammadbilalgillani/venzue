import { Categories } from "@/components/landing/categories";
import { Destinations } from "@/components/landing/destinations";
import { FeaturedVenues } from "@/components/landing/featured-venues";
import { Hero } from "@/components/landing/hero";
import { Path } from "@/components/landing/path";
import { Trust } from "@/components/landing/trust";
import { VendorCta } from "@/components/landing/vendor-cta";
import { Vendors } from "@/components/landing/vendors";
import { VenueCta } from "@/components/landing/venue-cta";

export default function Home() {
  return (
    <main>
      <Hero />
      <Categories />
      <FeaturedVenues />
      <Vendors />
      <VendorCta />
      <Path />
      <Trust />
      <Destinations />
      <VenueCta />
    </main>
  );
}
