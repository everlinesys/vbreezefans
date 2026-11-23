import { About } from "~/components/home/about";
import { Contact } from "~/components/home/contact";
import { Hero } from "~/components/home/hero";
import MotorStandout from "~/components/home/motorcomparison";
import { Products } from "~/components/home/products";
import { SecondHero } from "~/components/home/secondhero";
import { Services } from "~/components/home/services";
import { VisionMission } from "~/components/home/visionmission";
import { WhyChooseUs } from "~/components/home/whychoose";

export function Welcome() {
  return (
    <>
      <Hero />
      <SecondHero />
      <Products />
      <Services />
      <WhyChooseUs />
      
      <MotorStandout/>
      <About />
      <VisionMission />
      <Contact />
    </>
  );
}
