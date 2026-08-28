import type { Metadata } from "next";
import { Inter, Oswald, Playfair_Display } from "next/font/google";
import "./globals.css";
import { business, siteUrl } from "@/lib/constants";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SkipToContent from "@/components/layout/SkipToContent";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${business.name} | Venice, FL`,
    template: `%s | ${business.name}`,
  },
  description:
    "Venice Sports Cards & Collectibles is Venice, Florida's local destination to buy, sell, and trade sports cards, Pokémon cards, graded cards, sealed products, and collectibles.",
  keywords: [
    "sports cards Venice FL",
    "Pokemon cards Venice Florida",
    "graded cards",
    "sell sports cards",
    "trade sports cards",
    "card shop Venice Florida",
    "sealed wax boxes",
    "PSA graded cards",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: business.name,
    title: `${business.name} | Venice, FL`,
    description:
      "Local destination to buy, sell, and trade sports cards, Pokémon, graded cards, and collectibles in Venice, Florida.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${business.name} | Venice, FL`,
    description:
      "Local destination to buy, sell, and trade sports cards, Pokémon, graded cards, and collectibles in Venice, Florida.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${oswald.variable} ${playfair.variable} antialiased bg-black text-cream`}
      >
        <SkipToContent />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
