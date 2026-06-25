import Hero from "../Components/Hero";
import MarketplaceLogos from "../Components/MarketplaceLogos";
import Services from "../Components/Services";
import Stats from "../Components/Stats";
import CTA from "../Components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <MarketplaceLogos />
      <Services />
      <Stats />
      <CTA />
    </>
  );
}