import { Reveal } from "./Reveal";
import intro from "@/assets/intro.jpg";

export function Intro() {
  return (
    <section id="about" className="relative bg-cream py-28 md:py-40">
      <div className="container-page grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-start">
        <Reveal className="md:col-span-5 md:sticky md:top-28">
          <p className="eyebrow">— The Practice</p>
          <h2 className="serif-display mt-6 text-4xl md:text-6xl text-forest-deep">
            Healing is not<br/> a transaction.<br/>
            <span className="italic text-clay">It is a return.</span>
          </h2>
        </Reveal>

        <div className="md:col-span-7 space-y-12">
          <Reveal delay={0.05}>
            <p className="text-lg md:text-xl leading-[1.7] text-ink/80 font-light">
              At Samatraya, the work begins before the first treatment — with stillness,
              observation, and a careful reading of pulse and prakṛti. Every protocol is
              composed by hand for the person in front of us, never a template.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <Reveal delay={0.1}>
              <div className="border-t border-forest-deep/15 pt-6">
                <p className="font-serif text-3xl text-forest-deep">3+</p>
                <p className="mt-2 text-sm text-ink/65 leading-relaxed">years of clinical practice in classical Kerala Ayurveda</p>
              </div>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="border-t border-forest-deep/15 pt-6">
                <p className="font-serif text-3xl text-forest-deep">1000+</p>
                <p className="mt-2 text-sm text-ink/65 leading-relaxed">guests guided through personalised Panchakarma journeys</p>
              </div>
            </Reveal>

          </div>

          <Reveal delay={0.2}>
            <div className="relative overflow-hidden rounded-sm">
              <img src={intro} alt="Tulsi leaf" loading="lazy" className="w-full h-[420px] md:h-[520px] object-cover" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
