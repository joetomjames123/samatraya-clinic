import { Reveal } from "./Reveal";
import { motion } from "framer-motion";
import pan from "@/assets/treatment-panchakarma.jpg";
import abh from "@/assets/treatment-abhyanga.jpg";
import shi from "@/assets/treatment-shirodhara.jpg";
import yog from "@/assets/treatment-yoga.jpg";

const items = [
  { no: "01", title: "Panchakarma", img: pan, sub: "Five Actions",
    body: "A multi-week purification protocol that gently draws accumulated doshas from the tissues — the cornerstone of classical Ayurvedic medicine." },
  { no: "02", title: "Abhyanga", img: abh, sub: "Warm Oil Therapy",
    body: "Synchronised four-handed massage with herb-infused sesame and coconut oils, calibrated to your constitution and the season." },
  { no: "03", title: "Shirodhara", img: shi, sub: "Crown of Oil",
    body: "A continuous, slow stream of medicated oil over the forehead — quieting the nervous system and restoring deep, dreamless sleep." },
  { no: "04", title: "Yoga Therapy", img: yog, sub: "Embodied Practice",
    body: "Private āsana, prāṇāyāma and meditation sequences designed alongside your treatment plan to anchor its effects." },
];

export function Treatments() {
  return (
    <section id="treatments" className="relative bg-cream py-28 md:py-40">
      <div className="container-page">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">
          <Reveal>
            <p className="eyebrow">— Treatments</p>
            <h2 className="serif-display mt-6 text-5xl md:text-7xl text-forest-deep max-w-2xl">
              Four <span className="italic text-clay">disciplines</span>, one continuous practice.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-ink/70 leading-relaxed">
              Each therapy is prescribed only after consultation. We never sell sessions —
              we compose journeys.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-20">
          {items.map((it, i) => (
            <Reveal key={it.no} delay={i * 0.05}>
              <motion.article
                whileHover="hover"
                initial="rest"
                animate="rest"
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden bg-forest-deep/5">
                  <motion.img
                    src={it.img}
                    alt={it.title}
                    loading="lazy"
                    variants={{ rest: { scale: 1 }, hover: { scale: 1.06 } }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full aspect-[4/5] object-cover"
                  />
                  <motion.div
                    variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 bg-forest-deep/35"
                  />
                  <span className="absolute top-5 left-5 text-[11px] tracking-[0.3em] uppercase text-cream/85 font-mono">{it.no}</span>
                </div>
                <div className="flex items-baseline justify-between mt-7">
                  <div>
                    <h3 className="font-serif text-3xl md:text-4xl text-forest-deep">{it.title}</h3>
                    <p className="mt-1 text-[11px] tracking-[0.28em] uppercase text-moss">{it.sub}</p>
                  </div>
                  <motion.span
                    variants={{ rest: { x: 0 }, hover: { x: 6 } }}
                    className="text-forest-deep text-xl"
                  >↗</motion.span>
                </div>
                <p className="mt-4 text-ink/75 leading-relaxed max-w-md">{it.body}</p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
