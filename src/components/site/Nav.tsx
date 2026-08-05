import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logo from "@/assets/samatraya-logo.png";


const links = [
  { href: "#about", label: "Philosophy" },
  { href: "#doctor", label: "Doctor" },
  { href: "#treatments", label: "Treatments" },
  { href: "#why", label: "Why Us" },
  { href: "#voices", label: "Voices" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-cream/85 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="container-page flex items-center justify-between py-5">
        <a href="#top" className="flex items-center gap-2 group">
          <img src={logo} alt="Samatraya" className="h-9 w-9 object-contain" />
          <span className="font-serif text-xl tracking-wide text-forest-deep">Samatraya</span>

        </a>

        <ul className="hidden md:flex items-center gap-9 text-[13px] tracking-wide text-ink/75">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="relative py-1 transition-colors hover:text-forest-deep after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-forest after:transition-all hover:after:w-full">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="hidden md:inline-flex items-center gap-2 rounded-full border border-forest-deep/80 px-5 py-2 text-[12px] tracking-[0.18em] uppercase text-forest-deep hover:bg-forest-deep hover:text-cream transition-colors">
          Book Consultation
        </a>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-forest-deep" aria-label="Menu">
          <div className="space-y-1.5">
            <span className={`block h-px w-6 bg-current transition ${open ? "translate-y-1.5 rotate-45" : ""}`}/>
            <span className={`block h-px w-6 bg-current transition ${open ? "opacity-0" : ""}`}/>
            <span className={`block h-px w-6 bg-current transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`}/>
          </div>
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-cream">
          <ul className="container-page py-6 space-y-4 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block py-1 text-forest-deep">{l.label}</a>
              </li>
            ))}
            <li><a href="#contact" onClick={() => setOpen(false)} className="inline-block mt-2 rounded-full bg-forest-deep px-5 py-2 text-cream text-[12px] tracking-[0.18em] uppercase">Book Consultation</a></li>
          </ul>
        </div>
      )}
    </motion.header>
  );
}
