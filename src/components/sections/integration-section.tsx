import { FeatureComponent } from "@/src";
import { integrations } from "@/src/constants";

export const IntegrationSection = () => {
    const data = integrations;

    return (
        <section className="w-full min-h-[80vh] md:min-h-[80vh] lg:min-h-[90vh]">
            <FeatureComponent {...data}></FeatureComponent>
        </section>
    );
}