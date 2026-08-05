export function LocationSection() {
  return (
    <section className="bg-forest-deep text-cream py-24">
      <div className="container-page text-center max-w-4xl mx-auto">
        <p className="text-sm tracking-[0.3em] uppercase text-cream/70">
          Visit Us
        </p>

        <h2 className="serif-display mt-6 text-4xl md:text-6xl">
          Experience Healing
          <br />
          In Person
        </h2>

        <p className="mt-6 text-cream/80 leading-relaxed max-w-2xl mx-auto">
          Samatraya Ayurveda is located in Thayatheru, Kannur.
          Visit our clinic for personalised consultations,
          Panchakarma therapies, and classical Ayurvedic care.
        </p>

        <div className="mt-10">
          <a
            href="https://maps.google.com/?q=V9FG+2F2,Thayatheru,Rd,Thayatheru,Thana,Kannur,Kerala,670002"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-cream px-8 py-4 text-xs tracking-[0.25em] uppercase text-forest-deep transition hover:scale-105"
          >
            📍 Open in Google Maps
          </a>
        </div>

        <div className="mt-12 border-t border-cream/20 pt-8">
          <p className="text-lg font-light">
            Thayatheru, Kannur, Kerala 670002
          </p>
        </div>
      </div>
    </section>
  );
}