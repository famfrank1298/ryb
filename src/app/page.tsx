import About from "@/sections/about/about";
import Footer from "@/sections/footer/footer";
import Hero from "@/sections/hero/hero";
import Nav from "@/sections/nav/nav";

export default function Home() {
  return (
    <div className="home-container">
      <Nav />
      <Hero />
      <About />
      <Footer />
    </div>
  );
}
