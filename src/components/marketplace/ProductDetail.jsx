import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, Star, X } from "lucide-react";
import { PRODUCTS, REVIEWS } from "../../data/marketplace";

const EASE = [0.16, 1, 0.3, 1];

const price = (n) => `$${n.toLocaleString("en-US")}`;

/** Static product detail overlay — gallery, copy, related pieces, reviews. No cart logic. */
export default function ProductDetail({ product, onClose, onSelect }) {
  const [imageIdx, setImageIdx] = useState(0);
  const [wished, setWished] = useState(false);

  useEffect(() => {
    setImageIdx(0);
    setWished(false);
  }, [product?.id]);

  useEffect(() => {
    if (!product) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [product, onClose]);

  const gallery = product ? [product.image, product.imageAlt].filter(Boolean) : [];
  const related = product
    ? PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3)
    : [];

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[60] bg-obsidian/80 backdrop-blur-sm overflow-y-auto"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={product.name}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.6, ease: EASE }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl mx-auto my-6 md:my-16 bg-obsidian border border-ivory/10"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 z-10 p-2 bg-obsidian/70 text-ivory hover:text-accent transition-colors duration-300"
            >
              <X size={20} />
            </button>

            <div className="grid md:grid-cols-2">
              {/* gallery */}
              <div>
                <div className="aspect-square bg-obsidian-soft overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={gallery[imageIdx]}
                      src={gallery[imageIdx]}
                      alt={product.name}
                      initial={{ opacity: 0, scale: 1.03 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5, ease: EASE }}
                      className="w-full h-full object-cover"
                    />
                  </AnimatePresence>
                </div>
                {gallery.length > 1 && (
                  <div className="flex gap-2 p-3">
                    {gallery.map((g, i) => (
                      <button
                        key={g}
                        onClick={() => setImageIdx(i)}
                        aria-label={`Image ${i + 1}`}
                        className={`w-16 h-16 overflow-hidden border transition-colors duration-300 ${
                          imageIdx === i ? "border-accent" : "border-transparent opacity-60"
                        }`}
                      >
                        <img src={g} alt="" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* info */}
              <div className="p-6 md:p-10 flex flex-col">
                <p className="text-[11px] tracking-[0.25em] uppercase text-muted">
                  {product.brand}
                </p>
                <h2 className="font-display text-2xl md:text-4xl mt-2">{product.name}</h2>
                <p className="text-lg md:text-xl text-ivory/90 mt-3">{price(product.price)}</p>
                <p className="text-muted text-sm md:text-base leading-relaxed mt-5">
                  {product.description}
                </p>

                <div className="flex gap-3 mt-8">
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="flex-1 bg-accent text-obsidian text-center text-xs tracking-wide uppercase font-medium px-5 py-3.5 hover:bg-accent-hover transition-colors duration-300"
                  >
                    Enquire to Purchase
                  </a>
                  <button
                    onClick={() => setWished((w) => !w)}
                    aria-pressed={wished}
                    aria-label="Add to wishlist"
                    className={`px-4 border transition-colors duration-300 ${
                      wished
                        ? "border-accent text-accent"
                        : "border-ivory/25 text-ivory hover:border-accent"
                    }`}
                  >
                    <Heart size={16} fill={wished ? "currentColor" : "none"} />
                  </button>
                </div>

                <div className="mt-8 pt-6 border-t border-ivory/10 text-xs text-muted leading-relaxed space-y-1.5">
                  <p>Authenticated by hand before dispatch.</p>
                  <p>Complimentary insured delivery, worldwide.</p>
                  <p>Fourteen-day returns, collected from you.</p>
                </div>

                {/* reviews */}
                <div className="mt-8 space-y-5">
                  {REVIEWS.map((r) => (
                    <div key={r.name}>
                      <div className="flex items-center gap-1.5 mb-1.5">
                        {Array.from({ length: r.rating }).map((_, i) => (
                          <Star key={i} size={12} className="text-accent" fill="currentColor" />
                        ))}
                      </div>
                      <p className="text-sm text-ivory/85 leading-relaxed">“{r.text}”</p>
                      <p className="text-[11px] tracking-[0.15em] uppercase text-muted mt-1.5">
                        {r.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* related */}
            {related.length > 0 && (
              <div className="border-t border-ivory/10 p-6 md:p-10">
                <p className="text-xs tracking-[0.25em] uppercase text-accent mb-6">
                  In the same register
                </p>
                <div className="grid grid-cols-3 gap-4 md:gap-6">
                  {related.map((p) => (
                    <button key={p.id} onClick={() => onSelect(p)} className="group text-left">
                      <div className="overflow-hidden aspect-square bg-obsidian-soft">
                        <img
                          src={p.image}
                          alt={p.name}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
                        />
                      </div>
                      <p className="text-xs md:text-sm mt-3 line-clamp-1">{p.name}</p>
                      <p className="text-xs text-muted mt-1">{price(p.price)}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
