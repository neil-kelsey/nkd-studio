import Image from "next/image";
import Header from "./components/header";
import Hero from "./components/hero";
import Intro from "./components/intro";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Intro />
    </main>
  );
}
