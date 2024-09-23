import { CardComponent } from "@/src";
import { testimonials } from "@/src/constants";


export const TestimonialSection = () => {
    const data = testimonials;

    return (
        <section className="w-full min-h-[80vh] md:min-h-[70vh] lg:min-h-[70vh]">
            <CardComponent data={data} type="pages" imagePosition="left"></CardComponent>
        </section>
    );
}