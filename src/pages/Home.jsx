import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Starfield from "../components/ui/Starfield";
import Hero from "../components/sections/Hero";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Certificates from "../components/sections/Certificates";
import Achievements from "../components/sections/Achievements";
import Resume from "../components/sections/Resume";
import Contact from "../components/sections/Contact";

function Home() {
  return (
    <div className="min-h-screen  text-slate-200 font-sans flex flex-col relative overflow-hidden">
      <Navbar />

      <main className="flex-1 relative z-10 w-full mb-20">
        <Starfield />
        <Hero />
        <Skills />
        <Projects />
        <Certificates />
        <Achievements />
        <Resume />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default Home;
