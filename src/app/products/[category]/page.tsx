import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import ProductCatalog from "@/components/products/ProductCatalog";
import { categories, type CategorySlug } from "@/lib/constants";
import { getProductsByCategory, DEMO_DISCLAIMER } from "@/data/demoInventory";

const descriptions: Record<CategorySlug, string> = {
  pokemon: "Demo Pokémon singles, holo rares, and sealed booster boxes.",
  "one-piece": "Demo One Piece TCG singles, alternate-art rares, and sealed product.",
  football: "Demo football rookies, autographs, and numbered parallels.",
  baseball: "Demo baseball rookies, vintage stars, and modern chrome-style cards.",
  basketball: "Demo basketball rookies, refractors, and premium parallels.",
  hockey: "Demo hockey rookies and vintage-era graded cards.",
  graded: "Every demo graded slab across sports cards, Pokémon, and One Piece.",
  sealed: "Every demo sealed product across sports cards, Pokémon, and One Piece.",
};

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const meta = categories.find((c) => c.slug === category);
  if (!meta) return {};
  return {
    title: meta.label,
    description: descriptions[meta.slug as CategorySlug],
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const meta = categories.find((c) => c.slug === category);
  if (!meta) notFound();

  const products = getProductsByCategory(meta.slug as CategorySlug);

  return (
    <>
      <PageHero
        eyebrow="Shop By Category"
        title={meta.label}
        description={descriptions[meta.slug as CategorySlug]}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: meta.label }]}
      />
      <section className="bg-black py-16 sm:py-20">
        <Container className="flex flex-col gap-6">
          <p className="text-xs text-gray-500 italic max-w-2xl">{DEMO_DISCLAIMER}</p>
          <ProductCatalog products={products} lockedCategory={meta.slug} />
        </Container>
      </section>
    </>
  );
}
