import React from 'react';
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import Work from "./components/Work/Work";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

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
