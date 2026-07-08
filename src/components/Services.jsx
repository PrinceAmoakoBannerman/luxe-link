import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SERVICES } from "../data/services";
import ServiceCard from "./ServiceCard";

export default function Services() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.15 });

  return (
    <section id="services" ref={sectionRef} className="relative py-20 md:py-36">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="mb-14 md:mb-28 max-w-xl">
          <p className="text-xs tracking-[0.25em] uppercase text-accent mb-4">
            Three Services, One Link
          </p>
          <h2 className="font-display text-3xl md:text-5xl leading-tight">
            Everything luxury, in one place.
          </h2>
        </div>

        <div className="relative">
          {/* dim track — desktop only, mobile stays clean */}
          <div className="hidden md:block absolute left-10 top-2 bottom-2 w-px bg-ivory/10" />

          {/* animated accent thread, draws in once the section enters view */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: "top" }}
            className="hidden md:block absolute left-10 top-2 bottom-2 w-px bg-gradient-to-b from-accent to-accent/20"
          />

          <div className="space-y-16 md:space-y-28">
            {SERVICES.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
