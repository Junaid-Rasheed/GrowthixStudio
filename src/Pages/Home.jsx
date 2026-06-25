import Hero from "../Components/Hero";
import MarketplaceLogos from "../Components/MarketplaceLogos";
import Services from "../Components/Services";
import Stats from "../Components/Stats";
import CTA from "../Components/CTA";
import OurWork from "../Components/OurWork";
import FAQ from "../Components/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <MarketplaceLogos />
      <Stats />
      <OurWork />
      <Services />
      <CTA />
      <FAQ />
    </>
  );
}