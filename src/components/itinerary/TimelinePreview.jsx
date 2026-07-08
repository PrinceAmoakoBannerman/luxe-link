import { motion } from "framer-motion";
import { TIMELINE } from "../../data/itinerary";

const EASE = [0.16, 1, 0.3, 1];

/** Static day-by-day preview of what a composed itinerary reads like. */
export default function TimelinePreview() {
  return (
    <section className="py-20 md:py-32 border-t border-ivory/10">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="mb-14 md:mb-20 max-w-xl">
          <p className="text-xs tracking-[0.25em] uppercase text-accent mb-4">
            {TIMELINE.kicker}
          </p>
          <h2 className="font-display text-3xl md:text-5xl leading-tight">{TIMELINE.title}</h2>
          <p className="text-muted text-sm md:text-base mt-4 leading-relaxed">
            {TIMELINE.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-10">
          {TIMELINE.days.map((d, di) => (
            <motion.div
              key={d.day}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.9, ease: EASE, delay: di * 0.12 }}
            >
              <div className="flex items-baseline gap-3 mb-8">
                <span className="font-display text-2xl">{d.day}</span>
                <span className="text-xs tracking-[0.2em] uppercase text-muted">{d.label}</span>
              </div>

              <div className="relative pl-6 space-y-8">
                <div className="absolute left-0 top-1.5 bottom-1.5 w-px bg-ivory/15" />
                {d.stops.map((s) => (
                  <div key={s.time} className="relative">
                    <span className="absolute -left-6 top-1.5 -translate-x-1/2 w-2 h-2 rounded-full bg-accent" />
                    <p className="text-xs tracking-[0.2em] text-accent mb-1.5">{s.time}</p>
                    <h3 className="text-base md:text-lg">{s.title}</h3>
                    <p className="text-muted text-sm mt-1 leading-relaxed">{s.note}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
