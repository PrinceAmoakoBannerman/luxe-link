import Logo from "./Logo";
import { NAV_LINKS } from "../data/services";

export default function Footer() {
  return (
    <footer className="border-t border-ivory/10">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div>
          <p>
            <Logo className="text-base" />
          </p>
          <p className="text-muted text-sm mt-2 max-w-xs">
            Luxury experiences connected. Chauffeur, itinerary, and marketplace, in one platform.
          </p>
        </div>
        <div className="flex gap-8 text-sm text-muted">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-accent transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 md:px-10 pb-8 text-xs text-muted tracking-wide">
        © {new Date().getFullYear()} Luxe Link. All rights reserved.
      </div>
    </footer>
  );
}
