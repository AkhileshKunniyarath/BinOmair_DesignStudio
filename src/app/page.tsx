import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Team from "@/components/sections/Team";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Newsletter from "@/components/sections/Newsletter";

export default function Home() {
  return (
    <main className="min-h-screen neumorph-base selection:bg-brand-500 selection:text-white">
      <Header />
      <Hero />
      <About />
      <Team />
      <Services />
      <Portfolio />
      <Newsletter />
      <Footer />
    </main>
  );
}
