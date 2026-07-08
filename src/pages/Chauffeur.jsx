import ChauffeurHero from "../components/chauffeur/ChauffeurHero";
import FleetShowcase from "../components/chauffeur/FleetShowcase";
import ServiceTypes from "../components/chauffeur/ServiceTypes";
import Standards from "../components/chauffeur/Standards";
import PageCta from "../components/PageCta";

export default function Chauffeur() {
  return (
    <>
      <ChauffeurHero />
      <FleetShowcase />
      <ServiceTypes />
      <Standards />
      <PageCta
        kicker="Luxury Chauffeur"
        title="The car is the easy part. The standard is the point."
        body="Fixed pricing, vetted chauffeurs, and a concierge who answers."
        ctaLabel="Book Chauffeur"
        href="/#chauffeur"
      />
    </>
  );
}
