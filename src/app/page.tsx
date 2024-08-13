import Header from "./components/Header/Header";
import Hero from "./components/hero";
import Intro from "./components/intro";
import Services from "./components/services";
import Work from "./components/work";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main>
      <Header />
      <div id="home"></div> {/* anchor link for the logo to return to the top of the screen */}
      <Hero />
      <Intro />
      <Services />
      <Work />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
