import { FeatureSection, IntegrationSection, MetricsSection } from "@/src";

export default function Home() {
  return (
    <div className="min-w-screen min-h-screen">
      <IntegrationSection></IntegrationSection>
      <MetricsSection></MetricsSection>
      <FeatureSection></FeatureSection>
    </div>
  );
}
