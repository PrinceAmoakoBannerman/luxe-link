import { useMemo, useState } from "react";
import MarketHero from "../components/marketplace/MarketHero";
import FilterBar from "../components/marketplace/FilterBar";
import ProductGrid from "../components/marketplace/ProductGrid";
import SpotlightStrip from "../components/marketplace/SpotlightStrip";
import ProductDetail from "../components/marketplace/ProductDetail";
import PageCta from "../components/PageCta";
import { PRODUCTS } from "../data/marketplace";

export default function Marketplace() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PRODUCTS.filter(
      (p) =>
        (category === "All" || p.category === category) &&
        (q === "" ||
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q))
    );
  }, [category, query]);

  const firstHalf = filtered.slice(0, 8);
  const secondHalf = filtered.slice(8);

  const exploreCategory = (c) => {
    setQuery("");
    setCategory(c);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <MarketHero />
      <FilterBar
        category={category}
        onCategory={setCategory}
        query={query}
        onQuery={setQuery}
      />
      <ProductGrid products={firstHalf} onSelect={setSelected} />
      <SpotlightStrip onExplore={exploreCategory} />
      {secondHalf.length > 0 && <ProductGrid products={secondHalf} onSelect={setSelected} />}
      <ProductDetail
        product={selected}
        onClose={() => setSelected(null)}
        onSelect={setSelected}
      />
      <PageCta
        kicker="Luxury Marketplace"
        title="If it's coveted, we can source it."
        body="Tell us the piece. Authentication, provenance, and delivery are our problem."
        ctaLabel="Shop Luxury"
        href="/#marketplace"
      />
    </>
  );
}
