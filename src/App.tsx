import { Categories } from "@/components/trada/Categories";
import { Challenges } from "@/components/trada/Challenges";
import { Demos } from "@/components/trada/Demos";
import { Faqs } from "@/components/trada/Faqs";
import { FinalCta } from "@/components/trada/FinalCta";
import { Footer } from "@/components/trada/Footer";
import { Header } from "@/components/trada/Header";
import { Hero } from "@/components/trada/Hero";
import { HowItWorks } from "@/components/trada/HowItWorks";
import { Pricing } from "@/components/trada/Pricing";
import { Value } from "@/components/trada/Value";

export function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-primary focus:px-5 focus:py-3 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Challenges />
        <Value />
        <Demos />
        <Categories />
        <HowItWorks />
        <Pricing />
        <Faqs />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
