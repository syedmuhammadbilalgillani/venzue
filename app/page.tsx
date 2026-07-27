import { Hero } from "@/components/landing/hero";
import { Categories } from "@/components/landing/categories";
import { FeaturedVenues } from "@/components/landing/featured-venues";
import { Vendors } from "@/components/landing/vendors";
import { VendorCta } from "@/components/landing/vendor-cta";
import { Path } from "@/components/landing/path";
import { Trust } from "@/components/landing/trust";
import { Destinations } from "@/components/landing/destinations";
import { VenueCta } from "@/components/landing/venue-cta";
import { Footer } from "@/components/landing/footer";

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
      <Footer />
    </main>
  );
}
