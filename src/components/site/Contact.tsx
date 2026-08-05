import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Reveal } from "./Reveal";

export function Contact() {
  const [sent, setSent] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    try {
      await emailjs.sendForm(
        "service_7sf6846",
        "template_bxflka9",
        form,
        "Cm4HUWHl_YDTZhB0o"
      );

      setSent(true);
      form.reset();
    } catch (error) {
      console.error("Email sending failed:", error);
      alert("Failed to send request. Please try again.");
    }
  };

  return (
    <section id="contact" className="relative bg-cream py-28 md:py-40">
      <div className="container-page grid grid-cols-1 md:grid-cols-12 gap-14 md:gap-20">
        <Reveal className="md:col-span-5">
          <p className="eyebrow">— Begin</p>

          <h2 className="serif-display mt-6 text-5xl md:text-6xl text-forest-deep">
            Request a
            <br />
            <span className="italic text-clay">consultation.</span>
          </h2>

          <p className="mt-8 text-ink/75 leading-relaxed max-w-md">
            Tell us a little about what brings you to Ayurveda. Dr. Annu James
            responds personally to every enquiry within two working days.
          </p>

          <div className="mt-12 space-y-8 text-sm">
            {[
              [
                "Clinic",
                "Samatraya Ayurveda\nThayatheru, Kannur\nKerala, India",
              ],
              [
                "Hours",
                "Monday — Saturday\n8:00am — 05:00pm · By appointment",
              ],
              ["Direct", "care@samatraya.in\n+91 81119 67560"],
            ].map(([k, v]) => (
              <div
                key={k}
                className="border-t border-forest-deep/15 pt-4"
              >
                <p className="text-[10px] tracking-[0.3em] uppercase text-moss">
                  {k}
                </p>
                <p className="mt-2 whitespace-pre-line text-ink/80 leading-relaxed">
                  {v}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-7">
          <form
            onSubmit={sendEmail}
            className="bg-cream-deep p-8 md:p-12 border border-forest-deep/10"
          >
            {sent ? (
              <div className="py-16 text-center">
                <p className="font-serif text-3xl text-forest-deep">
                  Thank you.
                </p>

                <p className="mt-4 text-ink/70">
                  Your message has been sent successfully. We will contact you
                  soon.
                </p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Field
                    label="Your name"
                    name="name"
                    required
                  />

                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    required
                  />

                  <Field
                    label="Phone (optional)"
                    name="phone"
                  />

                  <Field
                    label="Preferred date"
                    name="date"
                    type="date"
                  />
                </div>

                <div className="mt-6">
                  <label className="block text-[10px] tracking-[0.3em] uppercase text-moss mb-3">
                    Area of concern
                  </label>

                  <div className="flex flex-wrap gap-2">
                    {[
                      "Panchakarma",
                      "Stress & Sleep",
                      "Chronic Pain",
                      "Women's Health",
                      "Digestion",
                      "General",
                    ].map((t) => (
                      <label key={t} className="cursor-pointer">
                        <input
                          type="checkbox"
                          name="concern"
                          value={t}
                          className="peer sr-only"
                        />

                        <span className="inline-block rounded-full border border-forest-deep/25 px-4 py-1.5 text-xs text-ink/75 peer-checked:bg-forest-deep peer-checked:text-cream peer-checked:border-forest-deep transition">
                          {t}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-[10px] tracking-[0.3em] uppercase text-moss mb-3">
                    A few words
                  </label>

                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="w-full bg-transparent border-b border-forest-deep/30 focus:border-forest-deep outline-none py-2 text-ink resize-none"
                    placeholder="What brings you here?"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-10 inline-flex items-center gap-3 rounded-full bg-forest-deep px-8 py-4 text-[12px] tracking-[0.22em] uppercase text-cream hover:bg-gold hover:text-forest-deep transition-colors"
                >
                  Send Request <span>→</span>
                </button>
              </>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="block text-[10px] tracking-[0.3em] uppercase text-moss mb-2">
        {label}
      </span>

      <input
        name={name}
        type={type}
        required={required}
        className="w-full bg-transparent border-b border-forest-deep/30 focus:border-forest-deep outline-none py-2 text-ink"
      />
    </label>
  );
}