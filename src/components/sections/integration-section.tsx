import { FeatureComponent } from "@/src";
import { integrations } from "@/src/constants";

export const IntegrationSection = () => {
    const data = integrations;

    return (
        <section className="w-full min-h-screen">
            <FeatureComponent {...data}></FeatureComponent>
        </section>
    );
}