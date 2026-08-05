import { Reveal } from "./Reveal";

const Icon = ({ d }: { d: string }) => (
  <svg viewBox="0 0 48 48" className="w-9 h-9 stroke-gold" fill="none" strokeWidth="1.2">
    <path d={d} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const items = [
  { t: "Classical Lineage", d: "Trained in Kerala's unbroken gurukula tradition — no shortcuts, no trends.",
    p: "M24 6c6 8 6 16 0 24-6-8-6-16 0-24Z M10 28c8-4 20-4 28 0" },
  { t: "Personalised Protocols", d: "Every plan is composed from your pulse, prakṛti and current vikṛti.",
    p: "M8 32l8-16 8 12 8-20 8 24 M6 38h36" },
  {t: "Personalised Treatment Plans", d: "Every therapy is tailored to your unique constitution, health concerns, and wellness goals.",
  p: "M16 8h16l-2 8a8 8 0 1 1-12 0z M20 36h8v6h-8z"},
  { t: "Slow, Resident Care", d: "Multi-day Panchakarma — because true healing cannot be rushed.",
    p: "M24 8a10 10 0 1 0 10 10 M24 18v8l6 4 M40 8l-4 4" },
  { t: "Discretion & Quiet", d: "A small clinic, by appointment. Your time here belongs to you.",
    p: "M8 24a16 16 0 0 1 32 0 M14 24v10a10 10 0 0 0 20 0V24" },
  { t: "Aftercare Beyond", d: "A 20-day follow-up rhythm — letters, herbs and check-ins after you leave.",
    p: "M8 36l8-8 8 8 16-16 M30 12h10v10" },
];

export function Why() {
  return (
    <section id="why" className="relative bg-cream-deep py-28 md:py-40">
      <div className="container-page">
        <div className="max-w-3xl mb-20">
          <Reveal>
            <p className="eyebrow">— Why Samatraya</p>
            <h2 className="serif-display mt-6 text-5xl md:text-7xl text-forest-deep">
              A practice held to <span className="italic text-clay">older</span> standards.
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-forest-deep/10 border border-forest-deep/10">
          {items.map((it, i) => (
            <Reveal key={it.t} delay={i * 0.04}>
              <div className="bg-cream-deep p-9 md:p-11 h-full hover:bg-cream transition-colors duration-500 group">
                <Icon d={it.p} />
                <h3 className="mt-7 font-serif text-2xl text-forest-deep">{it.t}</h3>
                <p className="mt-3 text-sm text-ink/70 leading-relaxed">{it.d}</p>
                <div className="mt-8 h-px w-8 bg-gold/60 group-hover:w-20 transition-all duration-500" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
