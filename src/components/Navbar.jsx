import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { NAV_LINKS } from "../data/services";
import { useScrollPosition } from "../hooks/useScrollPosition";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollY = useScrollPosition();
  const scrolled = scrollY > 40;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-obsidian/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <a href="/">
          <Logo className="text-base md:text-lg" />
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-wide text-ivory/85 hover:text-accent transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="/#chauffeur"
          className="hidden md:inline-block bg-accent text-obsidian text-xs font-medium tracking-wide uppercase px-5 py-2.5 hover:bg-accent-hover transition-colors duration-300"
        >
          Book Chauffeur
        </a>

        <button
          aria-label="Toggle menu"
          className="md:hidden text-accent"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden bg-obsidian border-t border-accent/15"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-base text-ivory tracking-wide"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/#chauffeur"
                onClick={() => setMenuOpen(false)}
                className="bg-accent text-obsidian text-center text-xs font-medium tracking-wide uppercase px-5 py-3 mt-2"
              >
                Book Chauffeur
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
