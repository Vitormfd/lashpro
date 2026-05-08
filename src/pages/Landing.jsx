import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import Navbar from '../components/landing/Navbar';
import HeroSection from '../components/landing/HeroSection';
import FloatingWhatsAppButton from '../components/landing/FloatingWhatsAppButton';

const ProblemsSection = lazy(() => import('../components/landing/ProblemsSection'));
const SolutionSection = lazy(() => import('../components/landing/SolutionSection'));
const DemoSection = lazy(() => import('../components/landing/DemoSection'));
const BenefitsSection = lazy(() => import('../components/landing/BenefitsSection'));
const SocialProofSection = lazy(() => import('../components/landing/SocialProofSection'));
const PricingSection = lazy(() => import('../components/landing/PricingSection'));
const CTASection = lazy(() => import('../components/landing/CTASection'));
const Footer = lazy(() => import('../components/landing/Footer'));

function DeferredSection({ children, minHeight = 280, rootMargin = '300px 0px' }) {
  const [shouldRender, setShouldRender] = useState(false);
  const markerRef = useRef(null);

  useEffect(() => {
    const marker = markerRef.current;
    if (!marker || shouldRender) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(marker);
    return () => observer.disconnect();
  }, [shouldRender, rootMargin]);

  return (
    <div ref={markerRef}>
      {shouldRender ? (
        <Suspense fallback={<div style={{ minHeight }} />}>
          {children}
        </Suspense>
      ) : (
        <div style={{ minHeight }} aria-hidden="true" />
      )}
    </div>
  );
}

export default function Landing() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <DeferredSection minHeight={420}>
        <ProblemsSection />
      </DeferredSection>
      <DeferredSection minHeight={420}>
        <SolutionSection />
      </DeferredSection>
      <DeferredSection minHeight={620}>
        <DemoSection />
      </DeferredSection>
      <DeferredSection minHeight={520}>
        <BenefitsSection />
      </DeferredSection>
      <DeferredSection minHeight={520}>
        <SocialProofSection />
      </DeferredSection>
      <DeferredSection minHeight={560}>
        <PricingSection />
      </DeferredSection>
      <DeferredSection minHeight={360}>
        <CTASection />
      </DeferredSection>
      <DeferredSection minHeight={240}>
        <Footer />
      </DeferredSection>
      <FloatingWhatsAppButton />
    </div>
  );
}