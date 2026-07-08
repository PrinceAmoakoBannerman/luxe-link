import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { BUDGET_TIERS } from "../../data/itinerary";

const EASE = [0.16, 1, 0.3, 1];

/** Segmented tier control — state only, no pricing logic. */
export default function BudgetSelector() {
  const [active, setActive] = useState(BUDGET_TIERS[1].id);
  const tier = BUDGET_TIERS.find((t) => t.id === active);

  return (
    <section id="plan" className="py-20 md:py-32 border-t border-ivory/10">
      <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
        <p className="text-xs tracking-[0.25em] uppercase text-accent mb-4">Set the register</p>
        <h2 className="font-display text-3xl md:text-5xl leading-tight">
          How far should we take it?
        </h2>

        <div
          role="tablist"
          aria-label="Budget tier"
          className="mt-12 inline-flex border border-ivory/20"
        >
          {BUDGET_TIERS.map((t) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={active === t.id}
              onClick={() => setActive(t.id)}
              className="relative px-5 sm:px-8 py-3.5 text-xs md:text-sm tracking-wide uppercase transition-colors duration-300"
            >
              {active === t.id && (
                <motion.span
                  layoutId="tier-pill"
                  transition={{ duration: 0.5, ease: EASE }}
                  className="absolute inset-0 bg-accent"
                />
              )}
              <span
                className={`relative z-10 ${
                  active === t.id ? "text-obsidian font-medium" : "text-muted"
                }`}
              >
                {t.name}
              </span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tier.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="mt-10"
          >
            <p className="text-xs tracking-[0.2em] uppercase text-accent">{tier.from}</p>
            <p className="text-muted text-sm md:text-base mt-4 leading-relaxed max-w-md mx-auto">
              {tier.description}
            </p>
            <ul className="mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-8">
              {tier.includes.map((inc) => (
                <li
                  key={inc}
                  className="flex items-center justify-center gap-2 text-sm text-ivory/80"
                >
                  <Check size={14} className="text-accent shrink-0" />
                  {inc}
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
