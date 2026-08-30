import Hero from "@/components/home/Hero";
import StoreInfoStrip from "@/components/home/StoreInfoStrip";
import CategoryGrid from "@/components/home/CategoryGrid";
import AboutSection from "@/components/home/AboutSection";
import WhyShopWithUs from "@/components/home/WhyShopWithUs";
import FeaturedCards from "@/components/home/FeaturedCards";
import GoogleReviewsPreview from "@/components/home/GoogleReviewsPreview";
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
      <FeaturedCards />
      <GoogleReviewsPreview />
      <Newsletter />
      <StoreLocation />
      <ContactSection />
    </>
  );
}
