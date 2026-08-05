import { useState } from "react";
import emailjs from "@emailjs/browser";

export function ReviewSection() {
  const [form, setForm] = useState({
    name: "",
    place: "",
    treatment: "",
    review: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    if (
      !form.name.trim() ||
      !form.place.trim() ||
      !form.treatment.trim() ||
      !form.review.trim()
    ) {
      alert("Please fill all fields.");
      return;
    }

    try {
      setLoading(true);

      await emailjs.send(
        "service_7sf6846",
        "template_eyrmbhx",
        {
          name: form.name,
          place: form.place,
          treatment: form.treatment,
          review: form.review,
        },
        "Cm4HUWHl_YDTZhB0o"
      );

      setSubmitted(true);

      setForm({
        name: "",
        place: "",
        treatment: "",
        review: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to send review. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="container-page max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <div className="text-3xl">★★★★★</div>

          <p className="mt-3 text-sm tracking-[0.25em] uppercase text-moss">
            Patient Experiences
          </p>

          <h2 className="serif-display mt-4 text-4xl md:text-5xl text-forest-deep">
            1000+ Happy Patients
          </h2>

          <p className="mt-4 text-ink/70">
            Trusted by families across Kannur and beyond.
          </p>
        </div>

        <div className="border border-forest-deep/15 bg-cream p-8 md:p-10">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label className="text-sm text-ink/70">
                Your Name
              </label>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="mt-2 w-full border-b border-forest-deep/20 bg-transparent py-3 outline-none"
              />
            </div>

            <div>
              <label className="text-sm text-ink/70">
                Place
              </label>

              <input
                type="text"
                name="place"
                value={form.place}
                onChange={handleChange}
                placeholder="Kannur, Kochi..."
                className="mt-2 w-full border-b border-forest-deep/20 bg-transparent py-3 outline-none"
              />
            </div>
          </div>

          <div className="mt-8">
            <label className="text-sm text-ink/70">
              Treatment Received
            </label>

            <input
              type="text"
              name="treatment"
              value={form.treatment}
              onChange={handleChange}
              placeholder="Treatment received"
              className="mt-2 w-full border-b border-forest-deep/20 bg-transparent py-3 outline-none"
            />
          </div>

          <div className="mt-8">
            <label className="text-sm text-ink/70">
              Your Review
            </label>

            <textarea
              name="review"
              value={form.review}
              onChange={handleChange}
              rows={3}
              placeholder="A few words about your experience..."
              className="mt-2 w-full border border-forest-deep/20 bg-transparent p-4 outline-none resize-none"
            />
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            disabled={loading}
            className="mt-8 rounded-full bg-forest-deep px-8 py-4 text-xs uppercase tracking-[0.25em] text-cream transition hover:opacity-90 disabled:opacity-50"
          >
            {loading ? "Sending..." : "Share Experience"}
          </button>

          {submitted && (
            <div className="mt-6 rounded-lg border border-green-200 bg-green-50 p-4">
              <p className="text-green-800">
                Thank you for sharing your experience. Your review has been received successfully.
              </p>
            </div>
          )}

          {/* <a
            href="https://maps.google.com/?q=V9FG+2F2,Thayatheru,Rd,Thayatheru,Thana,Kannur,Kerala,670002"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-forest-deep px-6 py-3 text-xs uppercase tracking-[0.2em] text-forest-deep transition hover:bg-forest-deep hover:text-cream"
          >
            View Clinic Location
          </a> */}
        </div>
      </div>
    </section>
  );
}