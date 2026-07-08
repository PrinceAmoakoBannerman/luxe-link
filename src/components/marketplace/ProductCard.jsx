import { useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1];

const price = (n) => `$${n.toLocaleString("en-US")}`;

export default function ProductCard({ product, onSelect }) {
  const [wished, setWished] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.7, ease: EASE }}
      className="group"
    >
      <div className="relative overflow-hidden aspect-square bg-obsidian-soft">
        <button
          onClick={() => onSelect(product)}
          aria-label={`View ${product.name}`}
          className="block w-full h-full"
        >
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            decoding="async"
            className={`w-full h-full object-cover transition-all duration-[900ms] ease-out ${
              product.imageAlt ? "group-hover:opacity-0" : "group-hover:scale-[1.05]"
            }`}
          />
          {product.imageAlt && (
            <img
              src={product.imageAlt}
              alt=""
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover opacity-0 scale-[1.03] transition-all duration-[900ms] ease-out group-hover:opacity-100 group-hover:scale-100"
            />
          )}
        </button>

        <button
          onClick={() => setWished((w) => !w)}
          aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
          aria-pressed={wished}
          className={`absolute top-3 right-3 p-2 bg-obsidian/60 backdrop-blur-sm transition-all duration-300 hover:bg-obsidian/85 ${
            wished
              ? "opacity-100 text-accent"
              : "opacity-100 md:opacity-0 md:group-hover:opacity-100 text-ivory"
          }`}
        >
          <Heart size={16} fill={wished ? "currentColor" : "none"} />
        </button>
      </div>

      <button onClick={() => onSelect(product)} className="block w-full text-left pt-4">
        <p className="text-[11px] tracking-[0.2em] uppercase text-muted">{product.brand}</p>
        <h3 className="text-sm md:text-base mt-1.5">{product.name}</h3>
        <p className="text-sm text-ivory/85 mt-1.5">{price(product.price)}</p>
      </button>
    </motion.div>
  );
}
