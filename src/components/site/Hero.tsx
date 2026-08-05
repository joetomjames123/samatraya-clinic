import { motion } from "framer-motion";
import { ScrollFrames } from "./ScrollFrames";

export function Hero() {
  return (
    <section id="top" className="relative w-full bg-cream pt-20 md:pt-24">
      {/* Scroll-scrubbed brand animation sits BELOW the nav, in a perfect 16:9 ratio */}
      <ScrollFrames />

      <div className="relative z-10">
        <div className="container-page pt-16 md:pt-24 pb-20 md:pb-28">
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}
            className="eyebrow text-moss"
          >
            Est. Kerala — Authentic Ayurveda
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.1, ease: [0.16,1,0.3,1] }}
            className="serif-display mt-6 max-w-5xl text-forest-deep text-[clamp(2.4rem,7vw,6.5rem)] leading-[1.05]"
          >
            Where the body<br/>
            <span className="italic text-clay">remembers</span> its balance.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.1 }}
            className="mt-8 max-w-xl text-ink/75 text-base md:text-lg leading-relaxed"
          >
            A sanctuary of classical Ayurveda — guided diagnosis, personalised
            Panchakarma, and quiet, deliberate healing rooted in 5,000 years of practice.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-10 flex flex-wrap items-center gap-5"
          >
            <a href="#contact" className="group inline-flex items-center gap-3 rounded-full bg-forest-deep px-7 py-4 text-[12px] tracking-[0.22em] uppercase text-cream hover:bg-clay transition-colors">
              Begin Your Consultation
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a href="#about" className="text-[12px] tracking-[0.22em] uppercase text-forest-deep/85 border-b border-forest-deep/40 pb-1 hover:text-clay hover:border-clay transition-colors">
              Discover the Practice
            </a>
          </motion.div>
        </div>

        {/* Dosha strip — light theme */}
        <div className="relative border-t border-forest-deep/15 bg-cream">
          <div className="container-page grid grid-cols-3 divide-x divide-forest-deep/15 text-forest-deep">
            {[
               { name: "Vāta" /*,el: "Air · Ether"  */ , line: "movement, breath, intuition"  },
               { name: "Pitta"  /*,el: "Fire · Water"  */ , line: "metabolism, focus, courage"  },
               { name: "Kapha"  /*,el: "Earth · Water"  */ , line: "structure, calm, endurance"  },
            ].map((d, i) => (
              <motion.div
                key={d.name}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.1 }}
                className="px-4 md:px-8 py-6 md:py-8"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-serif text-2xl md:text-4xl">{d.name}</span>
                  <span className="hidden md:inline text-[10px] tracking-[0.25em] uppercase text-moss">{d.el}</span>
                </div>
                <p className="mt-2 text-[11px] md:text-xs tracking-wide text-ink/65">{d.line}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
