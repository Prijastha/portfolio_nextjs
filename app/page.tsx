import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className=" relative dark:bg-black-700 flex justify-center items-center flex-col   overflow-hidden    z-0 mx-auto sm:px-10 px-5 dark:text-white">
      <div className="max-w-7xl w-full">
        {/* Header */}
        <NavBar />
        {/* Hero */}
        <section id="hero" className="snap-start">
          <Hero />
        </section>
        {/* About */}
        <section id="about" className="snap-center">
          <About />
        </section>
        {/* Projects */}
        <section id="projects" className="snap-start">
          <Projects />
        </section>
        {/* Contact */}
        <section id="contact" className="snap-start">
          <Contact />
        </section>
        <Footer />
      </div>
    </main>
  );
}
