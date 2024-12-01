import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { BusinessSection } from './components/BusinessSection';
import { PromotionBanner } from './components/PromotionBanner';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <PromotionBanner />
      <BusinessSection />
      <Footer />
    </div>
  );
}

export default App;