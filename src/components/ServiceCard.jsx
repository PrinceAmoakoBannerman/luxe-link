import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ServiceCard({ service, index }) {
  const { id, numeral, icon: Icon, title, description, tags, cta, href, image } = service;

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: index * 0.15 }}
      className="relative md:pl-28"
    >
      {/* numeral node, sits on the thread — desktop only */}
      <div className="absolute left-10 top-0 -translate-x-1/2 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-obsidian border border-accent">
        <span className="font-display text-sm text-accent">{numeral}</span>
      </div>

      <div className="group grid md:grid-cols-2 gap-8 md:gap-14 items-center">
        <div className="relative rounded-lg md:rounded-2xl overflow-hidden aspect-video md:aspect-[4/3] bg-obsidian-soft">
          <img
            src={image}
            srcSet={`${image.replace(/w=\d+/, "w=700")} 700w, ${image.replace(/w=\d+/, "w=1000")} 1000w, ${image} 1400w`}
            sizes="(min-width: 768px) 50vw, 100vw"
            alt={title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-[1.06]"
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(180deg, rgba(15,15,16,0) 60%, rgba(15,15,16,0.55) 100%)",
            }}
          />
          <div className="absolute top-4 left-4 md:top-5 md:left-5 flex items-center gap-2 bg-obsidian/55 px-3 py-1.5">
            <Icon size={14} className="text-accent" />
            <span className="text-[11px] tracking-wide uppercase text-ivory">{title}</span>
          </div>
        </div>

        <div>
          <h3 className="font-display text-2xl md:text-3xl mb-4">{title}</h3>
          <p className="text-muted text-sm md:text-base leading-relaxed mb-6 max-w-md">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] tracking-wide uppercase px-3 py-1.5 border border-ivory/15 text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
          <a
            href={href}
            className="inline-flex items-center gap-2 text-sm tracking-wide uppercase text-accent group/cta"
          >
            {cta}
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover/cta:translate-x-1.5"
            />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
