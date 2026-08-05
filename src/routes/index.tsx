import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Intro } from "@/components/site/Intro";
import { Doctor } from "@/components/site/Doctor";
import { Treatments } from "@/components/site/Treatments";
import { Why } from "@/components/site/Why";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { ReviewSection } from "@/components/site/ReviewSection";
import { LocationSection } from "@/components/site/LocationSection";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Samatraya" },
      
      { name: "description", content: "A sanctuary of classical Ayurveda in Thayatheru, Kannur. Personalised Panchakarma, Abhyanga, Shirodhara and Yoga therapy with Dr. Annu James (BAMS)." },
      { property: "og:title", content: "Samatraya — Classical Ayurveda" },
      { property: "og:description", content: "Where the body remembers its balance. Personalised Ayurvedic care, Thayatheru, Kannur." },

    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-cream text-ink overflow-x-clip">
      <Nav />
      <Hero />
      <Intro />
      <Doctor />
      <Treatments />
      <Why />
      <Testimonials />
      <Contact />
      
      <LocationSection />
      <ReviewSection />
      <Footer />
    </main>
  );
}
