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
      {/* TEMPORARY DIAGNOSTIC — bypasses FeaturedCards/CardShowcase/realCardPhotos.ts entirely: a plain <img> with a hardcoded, already-basePath-prefixed src. Remove after live-deploy verification. */}
      <div style={{ background: "#000", padding: "24px 12px", textAlign: "center" }}>
        <p style={{ color: "#fff", fontSize: "20px", fontWeight: 700, marginBottom: "16px" }}>
          REAL CARD DIRECT-ASSET TEST
        </p>
        <img
          src="/venice_sports_cards/cards/pokemon/img_2911-full.webp"
          alt="Direct-asset diagnostic test image"
          width={300}
          style={{ width: "300px", height: "auto", display: "inline-block" }}
        />
      </div>
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
