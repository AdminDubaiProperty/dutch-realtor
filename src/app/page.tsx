import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import Solution from "@/components/Solution";
import Countries from "@/components/Countries";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import BlogPreview from "@/components/BlogPreview";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollAnimator from "@/components/ScrollAnimator";

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://thedutchrealtor.nl/#organization",
      name: "The Dutch Realtor",
      url: "https://thedutchrealtor.nl",
      description: "Nederlandse begeleiding bij oriëntatie op buitenlands vastgoed.",
      areaServed: ["Nederland", "Dubai", "Marokko", "Spanje", "Curaçao", "Georgië"],
    },
    {
      "@type": "WebSite",
      "@id": "https://thedutchrealtor.nl/#website",
      url: "https://thedutchrealtor.nl",
      name: "The Dutch Realtor",
      inLanguage: "nl-NL",
      publisher: { "@id": "https://thedutchrealtor.nl/#organization" },
    },
    {
      "@type": "Service",
      name: "Oriëntatie op buitenlands vastgoed",
      provider: { "@id": "https://thedutchrealtor.nl/#organization" },
      serviceType: "Vastgoedoriëntatie en projectvergelijking",
      areaServed: ["Nederland", "Dubai", "Marokko", "Spanje", "Curaçao", "Georgië"],
    },
  ],
};

export default function Home() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }} />
      <ScrollAnimator />
      <Navigation />
      <Hero />
      <PainPoints />
      <Solution />
      <Countries />
      <HowItWorks />
      <Testimonials />
      <BlogPreview />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
