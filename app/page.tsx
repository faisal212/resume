import Nav from "@/app/components/nav";
import Hero from "@/app/components/hero";
import LogoRow from "@/app/components/logo-row";
import Marquee from "@/app/components/marquee";
import Metrics from "@/app/components/metrics";
import CaseStudies from "@/app/components/case-studies";
import Testimonials from "@/app/components/testimonials";
import Expertise from "@/app/components/expertise";
import Experience from "@/app/components/experience";
import Playground from "@/app/components/playground";
import Notes from "@/app/components/notes";
import Contact from "@/app/components/contact";
import Footer from "@/app/components/footer";
import CommandPalette from "@/app/components/command-palette";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <LogoRow />
        <Marquee />
        <Metrics />
        <CaseStudies />
        <Testimonials />
        <Expertise />
        <Experience />
        <Playground />
        <Notes />
        <Contact />
      </main>
      <Footer />
      <CommandPalette />
    </>
  );
}
