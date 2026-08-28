import Hero from "@/components/home/Hero";
import StoreInfoStrip from "@/components/home/StoreInfoStrip";
import CategoryGrid from "@/components/home/CategoryGrid";
import AboutSection from "@/components/home/AboutSection";
import WhyShopWithUs from "@/components/home/WhyShopWithUs";
import LatestArrivals from "@/components/home/LatestArrivals";
import CustomerReviews from "@/components/home/CustomerReviews";
import Newsletter from "@/components/home/Newsletter";
import StoreLocation from "@/components/home/StoreLocation";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <StoreInfoStrip />
      <CategoryGrid />
      <AboutSection />
      <WhyShopWithUs />
      <LatestArrivals />
      <CustomerReviews />
      <Newsletter />
      <StoreLocation />
      <ContactSection />
    </>
  );
}
