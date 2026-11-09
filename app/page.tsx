import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Departments from "@/components/Departments";
import WorkHub from "@/components/WorkHub";
import Process from "@/components/Process";
import Story from "@/components/Story";
import Contact from "@/components/Contact";
import ScrollProgress from "@/components/ScrollProgress";
import Marquee from "@/components/Marquee";
import BounceScroll from "@/components/BounceScroll";

export default function Home() {
  return (
    <>
      {/* Nav stays outside BounceScroll: a transform on an ancestor breaks
          sticky/fixed positioning. */}
      <ScrollProgress />
      <Nav />
      <main>
        <BounceScroll>
          <Hero />
          <Marquee />
          <Departments />
          <WorkHub />
          <Process />
          <Story />
          <Contact />
        </BounceScroll>
      </main>
    </>
  );
}
