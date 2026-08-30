import type { Metadata } from "next";
import { Suspense } from "react";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import GalleryTabs from "@/components/gallery/GalleryTabs";
import { realCardPhotos, type RealPhotoCategory } from "@/data/realCardPhotos";

export const metadata: Metadata = {
  title: "Photo Gallery",
  description: "Real cards, slabs, and pulls photographed at Venice Sports Cards & Collectibles.",
};

const GALLERY_CATEGORIES: RealPhotoCategory[] = ["sports-cards", "pokemon", "one-piece", "in-store-pulls"];

export default function GalleryPage() {
  const photosByCategory = Object.fromEntries(
    GALLERY_CATEGORIES.map((category) => [category, realCardPhotos.filter((p) => p.category === category)])
  );

  return (
    <>
      <PageHero
        eyebrow="Real Shop Photography"
        title="Photo Gallery"
        description="Cards, slabs, and pulls from Venice Sports Cards & Collectibles — no fictional pricing or product data, just the real inventory."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
      />
      <section className="bg-black py-16 sm:py-20">
        <Container>
          <Suspense fallback={null}>
            <GalleryTabs photosByCategory={photosByCategory} />
          </Suspense>
        </Container>
      </section>
    </>
  );
}
