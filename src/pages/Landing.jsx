import { lazy, Suspense } from 'react';
import Navbar from '../components/landing/Navbar';
import HeroSection from '../components/landing/HeroSection';

const ProblemsSection = lazy(() => import('../components/landing/ProblemsSection'));
const SolutionSection = lazy(() => import('../components/landing/SolutionSection'));
const DemoSection = lazy(() => import('../components/landing/DemoSection'));
const BenefitsSection = lazy(() => import('../components/landing/BenefitsSection'));
const SocialProofSection = lazy(() => import('../components/landing/SocialProofSection'));
const PricingSection = lazy(() => import('../components/landing/PricingSection'));
const CTASection = lazy(() => import('../components/landing/CTASection'));
const Footer = lazy(() => import('../components/landing/Footer'));
const FloatingWhatsAppButton = lazy(() => import('../components/landing/FloatingWhatsAppButton'));

export default function Landing() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <Suspense fallback={null}>
        <ProblemsSection />
        <SolutionSection />
        <DemoSection />
        <BenefitsSection />
        <SocialProofSection />
        <PricingSection />
        <CTASection />
        <Footer />
        <FloatingWhatsAppButton />
      </Suspense>
    </div>
  );
}