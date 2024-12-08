import About from "@/sections/about/about";
import Hero from "@/sections/hero/hero";
import ContactForm from "@/sections/contact/contact";
import CTA from "@/sections/cta/cta";
import Services from "@/sections/features/services";

export default function Home() {
  return (
    <div className="home-container">
      <Hero />
      <About />
      <Services />
      <CTA />
      <ContactForm />
    </div>
  );
}
