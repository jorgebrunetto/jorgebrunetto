import About from "@/components/pages/about";
import Community from "@/components/pages/community";
import Hero from "@/components/pages/home";
import Portfolio from "@/components/pages/portfolio";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Portfolio />
      <Community />
    </>
  );
}
