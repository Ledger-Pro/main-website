import { Hero } from "@/components/hero";
import { LogosMarquee } from "@/components/logos-marquee";
import { Problem } from "@/components/problem";
import { HowItWorks } from "@/components/how-it-works";
import { Features } from "@/components/features";
import { Confidence } from "@/components/confidence";
import { Stats } from "@/components/stats";
import { Compare } from "@/components/compare";
import { Pricing } from "@/components/pricing";
import { Faq } from "@/components/faq";
import { Cta } from "@/components/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <LogosMarquee />
      <Problem />
      <HowItWorks />
      <Features />
      <Confidence />
      <Stats />
      <Compare />
      <Pricing />
      <Faq />
      <Cta />
    </>
  );
}
