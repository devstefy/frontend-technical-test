import { FeatureComponent } from "@/src";
import { features } from "@/src/constants";

export const FeatureSection = () => {
    const data = features;

    return (
        <section className="w-full min-h-[80vh] md:min-h-[80vh] lg:min-h-[90vh]">
            <FeatureComponent {...data}></FeatureComponent>
        </section>
    );
}