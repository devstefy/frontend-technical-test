import { CardComponent, CTAComponentProps } from "@/src";
import { ctaCard } from "@/src/constants/cta.const";


export const CTACardSection = () => {
    const data: CTAComponentProps = { ...ctaCard };


    return (
        <section className="w-full min-h-[80vh] md:min-h-[70vh] lg:min-h-[70vh]">
            <CardComponent data={data} type="CTA" imagePosition="right"></CardComponent>
        </section>
    );
}