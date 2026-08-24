import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import CostCalculator from './components/CostCalculator';
import PortfolioSection from './components/PortfolioSection';
import WhyUsSection from './components/WhyUsSection';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import LeadFormModal from './components/LeadFormModal';
import LiveActivityTicker from './components/LiveActivityTicker';

export default function App() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  return (
    <div style={{ minHeight: '100vh', background: '#080808', color: '#f0ede6' }}>
      <Header onOpenQuote={() => setQuoteOpen(true)} />
      <HeroSection onOpenQuote={() => setQuoteOpen(true)} />
      <ServicesSection onOpenQuote={() => setQuoteOpen(true)} />
      <CostCalculator onOpenQuote={() => setQuoteOpen(true)} />
      <PortfolioSection onOpenQuote={() => setQuoteOpen(true)} />
      <WhyUsSection onOpenQuote={() => setQuoteOpen(true)} />
      <Testimonials />
      <ContactSection onOpenQuote={() => setQuoteOpen(true)} />
      <Footer onOpenQuote={() => setQuoteOpen(true)} />
      <LeadFormModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
      <LiveActivityTicker />
    </div>
  );
}
