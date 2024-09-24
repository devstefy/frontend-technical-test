import { CTACardSection, CTASection, FeatureSection, Footer, IntegrationSection, MetricsSection, Navbar, TestimonialSection } from "@/src";

export default function Home() {
  return (
    <div className="min-w-screen min-h-screen">
      <Navbar></Navbar>
      <IntegrationSection></IntegrationSection>
      <MetricsSection></MetricsSection>
      <FeatureSection></FeatureSection>
      <TestimonialSection></TestimonialSection>
      <CTASection></CTASection>
      <CTACardSection></CTACardSection>
      <Footer></Footer>
    </div>
  );
}
