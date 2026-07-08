import { motion } from "framer-motion";
import { GALLERY } from "../../data/itinerary";

const EASE = [0.16, 1, 0.3, 1];

export default function ExperienceGallery() {
  return (
    <section className="py-20 md:py-32 border-t border-ivory/10">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="mb-12 md:mb-16 max-w-xl">
          <p className="text-xs tracking-[0.25em] uppercase text-accent mb-4">The moments</p>
          <h2 className="font-display text-3xl md:text-5xl leading-tight">
            What the hours are made of.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {GALLERY.map((g, i) => (
            <motion.figure
              key={g.image}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.85, ease: EASE, delay: (i % 4) * 0.08 }}
              className={`group relative overflow-hidden bg-obsidian-soft aspect-[4/3] ${g.span}`}
            >
              <img
                src={g.image}
                alt={g.caption}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
              />
              <figcaption className="absolute bottom-0 left-0 right-0 p-4 text-[11px] tracking-[0.2em] uppercase text-ivory/0 group-hover:text-ivory/95 bg-gradient-to-t from-obsidian/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {g.caption}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
