import { Hero } from './Hero';
import { BusinessSection } from './BusinessSection';
import { PromotionBanner } from './PromotionBanner';

export function Home() {
  return (
    <>
      <Hero />
      <PromotionBanner />
      <BusinessSection />
    </>
  );
}
