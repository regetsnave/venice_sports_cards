import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import ProductCatalog from "@/components/products/ProductCatalog";
import { demoInventory, DEMO_DISCLAIMER } from "@/data/demoInventory";

export const metadata: Metadata = {
  title: "Shop All Products",
  description:
    "Browse the full demo catalog for Venice Sports Cards & Collectibles — sports cards, Pokémon, One Piece, graded slabs, and sealed product.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Browse The Shop"
        title="All Products"
        description="Filter and search across sports cards, Pokémon, One Piece, graded slabs, and sealed product."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products" }]}
      />
      <section className="bg-black py-16 sm:py-20">
        <Container className="flex flex-col gap-6">
          <p className="text-xs text-gray-500 italic max-w-2xl">{DEMO_DISCLAIMER}</p>
          <ProductCatalog products={demoInventory} />
        </Container>
      </section>
    </>
  );
}
