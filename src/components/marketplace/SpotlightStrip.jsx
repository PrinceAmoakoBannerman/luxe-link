import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SPOTLIGHTS } from "../../data/marketplace";

const EASE = [0.16, 1, 0.3, 1];

/** Editorial features breaking the grid rhythm. */
export default function SpotlightStrip({ onExplore }) {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-10 my-16 md:my-24 space-y-16 md:space-y-24">
      {SPOTLIGHTS.map((s, i) => (
        <motion.div
          key={s.id}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1, ease: EASE }}
          className={`grid md:grid-cols-2 items-center gap-8 md:gap-14 ${
            i % 2 === 1 ? "md:[direction:rtl]" : ""
          }`}
        >
          <div className="overflow-hidden bg-obsidian-soft [direction:ltr]">
            <motion.img
              src={s.image}
              alt={s.title}
              loading="lazy"
              decoding="async"
              initial={{ scale: 1.08 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 1.6, ease: EASE }}
              className="w-full aspect-[4/3] object-cover"
            />
          </div>
          <div className="[direction:ltr]">
            <p className="text-xs tracking-[0.25em] uppercase text-accent mb-4">Spotlight</p>
            <h3 className="font-display text-3xl md:text-4xl leading-tight">{s.title}</h3>
            <p className="text-muted text-sm md:text-base mt-4 leading-relaxed max-w-md">
              {s.body}
            </p>
            <button
              onClick={() => onExplore(s.category)}
              className="inline-flex items-center gap-2 mt-7 text-xs md:text-sm tracking-wide uppercase text-accent group"
            >
              {s.cta}
              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1.5"
              />
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
