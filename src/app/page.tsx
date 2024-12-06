import About from "@/sections/about/about";
import Footer from "@/sections/footer/footer";
import Hero from "@/sections/hero/hero";
import Nav from "@/sections/nav/nav";
import ContactForm from "@/sections/contact/contact";
import CTA from "@/sections/cta/cta";
import Services from "@/sections/features/services";

export default function Home() {
  return (
    <div className="home-container">
      <Nav />
      <Hero />
      <About />
      <Services />
      <CTA />
      <ContactForm />
      <Footer />
    </div>
  );
}
