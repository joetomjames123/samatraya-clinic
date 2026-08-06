import { Reveal } from "./Reveal";
import doctorAsset from "@/assets/doctor-annu-v2.jpg.asset.json";
import abh from '@/assets/treatment-abhyanga.jpg';
const doctor = doctorAsset.url;


export function Doctor() {
  return (
    <section id="doctor" className="relative bg-forest-deep text-cream py-28 md:py-40 overflow-hidden">
      <div className="container-page grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
        <Reveal className="md:col-span-5">
          <div className="relative">
            <div className="absolute -inset-3 border border-gold/30" />
            <img src={doctor} alt="Dr. Annu James" loading="lazy" className="relative w-full aspect-[4/5] object-cover" />
          </div>
        </Reveal>

        <div className="md:col-span-7 md:pl-8">
          <Reveal>
            <p className="eyebrow text-gold/90">— Founder & Vaidya —</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="serif-display mt-6 text-5xl md:text-7xl">
              Dr. Annu James
            </h2>
            <p className="mt-3 text-sm tracking-[0.28em] uppercase text-cream/65">BAMS · Ayurvedic Physician</p>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-10 text-base md:text-lg leading-[1.85] text-cream/80 font-light max-w-xl">
              A graduate of MVR Ayurveda Medical College, Parassinikadavu, Kannur, Dr.Annu James combines a strong foundation in classical Ayurvedic medicine with a compassionate, patient-centered approach. She believes in understanding the root cause of illness rather than simply treating symptoms, offering personalized treatments that promote lasting health, balance, and well-being.

            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 gap-x-10 gap-y-6 max-w-lg">
            {[
              ["Specialisations", "Panchakarma · Women's Health · Chronic Pain . Infertility"],
              ["Training", "MVR Ayurveda Medical College, Parassinikadavu , Gov.Ayurveda dispensary mannarkkad "],
              ["Languages", "English · Malayalam · Hindi · Tamil"],
              ["Member", "AMMAI"],

            ].map(([k, v]) => (
              <Reveal key={k} delay={0.15}>
                <div className="border-t border-cream/15 pt-3">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-gold/80">{k}</p>
                  <p className="mt-2 text-sm text-cream/80 leading-relaxed">{v}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
