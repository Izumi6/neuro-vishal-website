import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/home/hero";
import { About } from "@/components/home/about";
import { Services } from "@/components/home/services";
import { Academic } from "@/components/home/academic";
import { Reviews } from "@/components/home/reviews";
import { Contact } from "@/components/home/contact";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Reviews />
      <Academic />
      <Contact />
      <Footer />
    </main>
  );
}
