import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PACKAGES } from "../../data/itinerary";

const EASE = [0.16, 1, 0.3, 1];

export default function PackageCards() {
  return (
    <section className="py-20 md:py-32 border-t border-ivory/10">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="mb-12 md:mb-16 max-w-xl">
          <p className="text-xs tracking-[0.25em] uppercase text-accent mb-4">Starting points</p>
          <h2 className="font-display text-3xl md:text-5xl leading-tight">
            Journeys we keep drafting.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {PACKAGES.map((p, i) => (
            <motion.a
              key={p.id}
              href="#plan"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.85, ease: EASE, delay: i * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden aspect-[4/5] bg-obsidian-soft">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(15,15,16,0) 55%, rgba(15,15,16,0.7) 100%)",
                  }}
                />
                <p className="absolute bottom-4 left-4 text-xs tracking-[0.2em] uppercase text-ivory/90">
                  {p.from}
                </p>
              </div>
              <div className="pt-5">
                <h3 className="font-display text-xl md:text-2xl">{p.name}</h3>
                <p className="text-xs tracking-[0.15em] uppercase text-muted mt-1.5">{p.route}</p>
                <p className="text-muted text-sm mt-3 leading-relaxed">{p.description}</p>
                <span className="inline-flex items-center gap-2 mt-4 text-xs tracking-wide uppercase text-accent">
                  Begin here
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1.5"
                  />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
