import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "./Reveal";

const quotes = [
  { q: "I arrived exhausted from a decade of insomnia. Three weeks of Shirodhara and Dr. Annu James's care, and I sleep through the night again. I cannot describe the gratitude.",
    n: "Mathew.", r: "Trivandrum · Panchakarma guest" },
  { q: "It feels less like a clinic and more like a long, attentive conversation with someone who has been waiting for you to listen to yourself.",
    n: "Joseph.", r: "Banglore " },
  { q: "After two years of chronic migraines I had stopped expecting relief. The protocol Annu designed was patient and exact. I haven't had an episode in months.",
    n: "John Joe.", r: "Kochi" },
  { q: "Every detail — the oils, the food, the silence between sessions — is composed with care. A rare and serious place.",
    n: "Helen.", r: "Kottayam" },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const go = (n: number) => setI((n + quotes.length) % quotes.length);

  return (
    <section id="voices" className="relative bg-forest-deep text-cream py-28 md:py-40 overflow-hidden">
      <div className="absolute inset-0 grain-bg opacity-10 pointer-events-none" />
      <div className="container-page relative">
        <Reveal>
          <p className="eyebrow text-gold/85">— Voices</p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-3">
            <Reveal delay={0.05}>
              <h2 className="serif-display text-4xl md:text-5xl">From those who<br/><span className="italic text-gold">found balance.</span></h2>
            </Reveal>
          </div>

          <div className="md:col-span-9 min-h-[280px] relative">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: [0.16,1,0.3,1] }}
                className="relative"
              >
                <span className="absolute -top-12 -left-2 font-serif text-[10rem] leading-none text-gold/20 select-none">"</span>
                <p className="font-serif text-2xl md:text-4xl leading-[1.35] text-cream/95 font-light max-w-4xl relative">
                  {quotes[i].q}
                </p>
                <footer className="mt-10 flex items-center gap-4">
                  <span className="h-px w-12 bg-gold/70" />
                  <div>
                    <p className="font-serif text-lg">{quotes[i].n}</p>
                    <p className="text-[11px] tracking-[0.25em] uppercase text-cream/55 mt-1">{quotes[i].r}</p>
                  </div>
                </footer>
              </motion.blockquote>
            </AnimatePresence>

            <div className="mt-14 flex items-center gap-6">
              <button onClick={() => go(i - 1)} className="h-11 w-11 rounded-full border border-cream/25 hover:border-gold hover:text-gold transition" aria-label="Previous">←</button>
              <button onClick={() => go(i + 1)} className="h-11 w-11 rounded-full border border-cream/25 hover:border-gold hover:text-gold transition" aria-label="Next">→</button>
              <div className="flex gap-2 ml-4">
                {quotes.map((_, n) => (
                  <button key={n} onClick={() => setI(n)} aria-label={`Voice ${n+1}`}
                    className={`h-px transition-all ${n===i ? "w-10 bg-gold" : "w-6 bg-cream/30"}`} />
                ))}
              </div>
              <span className="ml-auto text-[11px] tracking-[0.3em] uppercase text-cream/50">{String(i+1).padStart(2,"0")} / {String(quotes.length).padStart(2,"0")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
