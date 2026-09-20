import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import BounceScroll from "@/components/BounceScroll";

export default function Home() {
  return (
    <main>
      <Nav />
      {/* Nav is deliberately outside BounceScroll: applying a transform
          to an ancestor of a `position: fixed` element breaks that
          fixed positioning, so the nav would otherwise drift with the
          bounce instead of staying pinned. */}
      <BounceScroll>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Experience />
        <Contact />
      </BounceScroll>
    </main>
  );
}
