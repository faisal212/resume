import { Header } from "@/app/components/header";
import { Hero } from "@/app/components/hero";
import { Services } from "@/app/components/services";
import { About } from "@/app/components/about";
import { Experience } from "@/app/components/experience";
import { Portfolio } from "@/app/components/portfolio";
import { Contact } from "@/app/components/contact";
import { Footer } from "@/app/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Services />
        <About />
        <Experience />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
