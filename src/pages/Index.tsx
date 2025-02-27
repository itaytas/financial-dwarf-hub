
import React from 'react';
import Hero from '@/components/Hero';
import EligibilityChecker from '@/components/EligibilityChecker';
import HowItWorks from '@/components/HowItWorks';
import TrustSection from '@/components/TrustSection';
import RefundTypes from '@/components/RefundTypes';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

const Index = () => {
  return (
    <div className="pt-16">
      <Hero />
      <EligibilityChecker />
      <HowItWorks />
      <TrustSection />
      <RefundTypes />
      <Testimonials />
      <FAQ />
      <ContactCTA />
    </div>
  );
};

export default Index;
