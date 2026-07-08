export default function ComingSoon({ title }) {
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
      <p className="text-xs tracking-[0.25em] uppercase text-accent mb-4">Luxe Link</p>
      <h1 className="font-display text-3xl md:text-5xl mb-4">{title}</h1>
      <p className="text-muted max-w-md">
        This page is being crafted next. Return to the homepage to explore the rest of Luxe Link.
      </p>
      <a
        href="/"
        className="mt-8 bg-accent text-obsidian text-xs font-medium tracking-wide uppercase px-6 py-3 hover:bg-accent-hover transition-colors duration-300"
      >
        Back to Home
      </a>
    </section>
  );
}
