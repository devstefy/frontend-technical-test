import { faq } from "@/src/constants";
import { AccordionComponent, HeaderComponent } from "../common";
import { FAQElementProps } from "@/src/interfaces/FAQ";

export const FAQSection = () => {
    const data = faq;

    return (
        <section className="w-full min-h-screen md:min-h-[60vh] lg:min-h-[70vh] flex flex-col justify-center items-center py-5 px-10 md:px-14 lg:px-20">
            <HeaderComponent title={data.title} description={data.description}></HeaderComponent>
            {data.faq.map((faq: FAQElementProps, index: number) => (
                <div className="w-[100%] md:w-[70%]">
                    <AccordionComponent {...faq} borderBottom={(index + 1) === data.faq.length ? false : true}></AccordionComponent>
                </div>
            ))}
        </section>
    );
}