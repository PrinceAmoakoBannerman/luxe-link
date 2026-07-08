import { AnimatePresence, motion } from "framer-motion";
import ProductCard from "./ProductCard";

export default function ProductGrid({ products, onSelect }) {
  if (products.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 text-center text-muted text-sm tracking-wide">
        Nothing in the collection matches — try another word or category.
      </div>
    );
  }

  return (
    <motion.div
      layout
      className="max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-14"
    >
      <AnimatePresence mode="popLayout">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} onSelect={onSelect} />
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
