import Navbar from '../components/landing/Navbar';
import HeroSection from '../components/landing/HeroSection';
import ProblemsSection from '../components/landing/ProblemsSection';
import SolutionSection from '../components/landing/SolutionSection';
import DemoSection from '../components/landing/DemoSection';
import BenefitsSection from '../components/landing/BenefitsSection';
import SocialProofSection from '../components/landing/SocialProofSection';
import PricingSection from '../components/landing/PricingSection';
import CTASection from '../components/landing/CTASection';
import Footer from '../components/landing/Footer';
import FloatingWhatsAppButton from '../components/landing/FloatingWhatsAppButton';

export default function Landing() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ProblemsSection />
      <SolutionSection />
      <DemoSection />
      <BenefitsSection />
      <SocialProofSection />
      <PricingSection />
      <CTASection />
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
}