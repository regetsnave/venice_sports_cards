import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ContactSection from "@/components/home/ContactSection";
import StoreLocation from "@/components/home/StoreLocation";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Venice Sports Cards & Collectibles in Venice, FL.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Contact Us"
        description="Questions about buying, selling, or trading? Send a message or call the shop directly."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />
      <ContactSection />
      <StoreLocation />
    </>
  );
}
