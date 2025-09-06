import Hero from "./Hero/page";
import About from "./About/page";
import Skills from "./Skills/page";
import Projects from "./Projects/page";
import Contact from "./Contact/page";
import Footer from "./Footer/page";

export default function Home() {
  return (
    <div  className="font-sans items-center min-h-screen overflow-x-hidden">
      <main id='mainDiv' className="flex flex-col justify-center items-center h-full w-full md:h-screen ">
        <Hero/>
      </main>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
    </div>
  );
}
