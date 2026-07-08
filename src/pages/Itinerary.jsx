import ItineraryHero from "../components/itinerary/ItineraryHero";
import OccasionBrowser from "../components/itinerary/OccasionBrowser";
import TimelinePreview from "../components/itinerary/TimelinePreview";
import BudgetSelector from "../components/itinerary/BudgetSelector";
import PackageCards from "../components/itinerary/PackageCards";
import ExperienceGallery from "../components/itinerary/ExperienceGallery";
import PageCta from "../components/PageCta";

export default function Itinerary() {
  return (
    <>
      <ItineraryHero />
      <OccasionBrowser />
      <TimelinePreview />
      <BudgetSelector />
      <PackageCards />
      <ExperienceGallery />
      <PageCta
        kicker="Itinerary & Events"
        title="Tell us the occasion. We'll draft the hours."
        body="A first itinerary sketch within forty-eight hours of the conversation."
        ctaLabel="Plan My Trip"
        href="/#itinerary"
      />
    </>
  );
}
