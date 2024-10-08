import { CTACardSection, CTASection, FAQSection, FeatureSection, Footer, HeroSection, IntegrationSection, MetricsSection, Navbar, TestimonialCarouselSection, TestimonialSection } from "@/src";

export default function Home() {
  return (
    <div className="min-w-screen min-h-screen">
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <IntegrationSection></IntegrationSection>
      <MetricsSection></MetricsSection>
      <FeatureSection></FeatureSection>
      <TestimonialSection></TestimonialSection>
      <CTASection></CTASection>
      <FAQSection></FAQSection>
      <TestimonialCarouselSection></TestimonialCarouselSection>
      <CTACardSection></CTACardSection>
      <Footer></Footer>
    </div>
  );
}
