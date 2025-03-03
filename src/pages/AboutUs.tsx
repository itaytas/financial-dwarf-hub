
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import AboutHero from '@/components/about/AboutHero';
import BrandStory from '@/components/about/BrandStory';
import TeamExperts from '@/components/about/TeamExperts';
import CredibilitySection from '@/components/about/CredibilitySection';
import UniqueApproach from '@/components/about/UniqueApproach';
import FounderMessage from '@/components/about/FounderMessage';
import AboutCTA from '@/components/about/AboutCTA';

const AboutUs = () => {
  return (
    <MainLayout>
      <div className="pt-16">
        <AboutHero />
        <BrandStory />
        <TeamExperts />
        <CredibilitySection />
        <UniqueApproach />
        <FounderMessage />
        <AboutCTA />
      </div>
    </MainLayout>
  );
};

export default AboutUs;
