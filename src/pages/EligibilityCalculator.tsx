
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import EligibilityHero from '@/components/eligibility/EligibilityHero';
import EligibilityCalculator from '@/components/eligibility/EligibilityCalculator';
import EligibilityBreakdown from '@/components/eligibility/EligibilityBreakdown';
import EducationalContent from '@/components/eligibility/EducationalContent';
import SuccessStories from '@/components/eligibility/SuccessStories';
import NoWinNoFee from '@/components/eligibility/NoWinNoFee';
import LiveChatWidget from '@/components/LiveChatWidget';

const EligibilityCalculatorPage: React.FC = () => {
  return (
    <MainLayout>
      <EligibilityHero />
      <EligibilityCalculator />
      <EligibilityBreakdown />
      <EducationalContent />
      <SuccessStories />
      <NoWinNoFee />
      <LiveChatWidget />
    </MainLayout>
  );
};

export default EligibilityCalculatorPage;
