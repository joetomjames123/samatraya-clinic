import logo from "@/assets/samatraya-logo.png";

export function Footer() {
  return (
    <footer className="bg-forest-deep text-cream/80">
      <div className="container-page py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Samatraya"
                className="h-10 w-10 object-contain brightness-0 invert opacity-90"
              />
              <span className="font-serif text-2xl text-cream">
                Samatraya
              </span>
            </div>

            <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/65">
              A small clinic of classical Ayurveda in Thayatheru, Kannur.
              Held by hand, by appointment, with care.
            </p>
          </div>

          {/* Visit */}
          <div className="md:col-span-2">
            <p className="text-[10px] tracking-[0.3em] uppercase text-gold/80">
              Visit
            </p>

            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href="#treatments"
                  className="hover:text-gold transition-colors"
                >
                  Treatments
                </a>
              </li>

              <li>
                <a
                  href="#doctor"
                  className="hover:text-gold transition-colors"
                >
                  Doctor
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="hover:text-gold transition-colors"
                >
                  Philosophy
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="hover:text-gold transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <p className="text-[10px] tracking-[0.3em] uppercase text-gold/80">
              Contact
            </p>

            <ul className="mt-5 space-y-3 text-sm">
              <li>care@samatraya.in</li>
              <li>+91 81119 67560</li>
              <li>Thayatheru, Kannur</li>
            </ul>
          </div>

          {/* Follow */}
          <div className="md:col-span-2">
            <p className="text-[10px] tracking-[0.3em] uppercase text-gold/80">
              Follow
            </p>

            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-cream/15 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between text-[11px] tracking-[0.2em] uppercase text-cream/45">
          <p>© {new Date().getFullYear()} Samatraya Ayurveda</p>

          <p className="font-serif italic text-base normal-case tracking-normal text-cream/55">
            सर्वे भवन्तु सुखिनः — may all beings be at ease.
          </p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-gold">
              Privacy
            </a>

            <a href="#" className="hover:text-gold">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}