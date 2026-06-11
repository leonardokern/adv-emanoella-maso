import Header from "./components/Header";
import Hero from "./components/Hero";
import Areas from "./components/Areas";
import About from "./components/About";
import Values from "./components/Values";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Areas />
        <About />
        <Values />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
