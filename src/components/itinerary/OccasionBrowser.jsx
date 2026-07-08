import { motion } from "framer-motion";
import { OCCASIONS } from "../../data/itinerary";

const EASE = [0.16, 1, 0.3, 1];

/** Horizontal browse rail — discovery by occasion, not by form fields. */
export default function OccasionBrowser() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10 mb-10 md:mb-14">
        <p className="text-xs tracking-[0.25em] uppercase text-accent mb-4">Begin anywhere</p>
        <h2 className="font-display text-3xl md:text-5xl leading-tight max-w-xl">
          Browse by the occasion, not the paperwork.
        </h2>
      </div>

      <div className="no-scrollbar overflow-x-auto snap-x snap-mandatory">
        <div className="flex gap-4 md:gap-6 px-6 md:px-10 w-max">
          {OCCASIONS.map((o, i) => (
            <motion.a
              key={o.id}
              href="#plan"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: EASE, delay: i * 0.08 }}
              className="group relative snap-start shrink-0 w-[72vw] sm:w-72 md:w-80 aspect-[3/4] overflow-hidden bg-obsidian-soft"
            >
              <img
                src={o.image}
                alt={o.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(15,15,16,0.1) 40%, rgba(15,15,16,0.88) 100%)",
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <o.icon size={18} className="text-accent mb-3" />
                <h3 className="font-display text-xl md:text-2xl">{o.title}</h3>
                <p className="text-muted text-sm mt-2 leading-relaxed opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-20 transition-all duration-500">
                  {o.blurb}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      <p className="max-w-6xl mx-auto px-6 md:px-10 mt-6 text-xs tracking-wide uppercase text-muted md:hidden">
        Swipe to browse
      </p>
    </section>
  );
}
