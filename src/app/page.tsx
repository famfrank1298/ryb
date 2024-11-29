import About from "@/sections/about/about";
import Footer from "@/sections/footer/footer";
import Hero from "@/sections/hero/hero";
import Nav from "@/sections/nav/nav";
import ContactForm from "@/sections/contact/contact";
import CTA from "@/sections/cta/cta";

export default function Home() {
  return (
    <div className="home-container">
      <Nav />
      <Hero />
      <About />
      <CTA />
      <ContactForm />
      <Footer />
    </div>
  );
}
