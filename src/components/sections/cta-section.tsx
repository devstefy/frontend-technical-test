import { CTAButtons, HeaderComponent, ImageComponent } from "@/src";
import { cta } from "@/src/constants/cta.const";

export const CTASection = () => {
    const data = cta;

    return (
        <section className="w-full min-h-[80vh] md:min-h-[80vh] lg:min-h-[90vh] bg-bgSecondary flex flex-col-reverse md:flex-row">
            <div className="w-full md:w-1/2 min-h-[50vh] md:min-h-[80vh] lg:min-h-[90vh] flex flex-col justify-center px-16 md:pr-0 lg:pl-40">
                <HeaderComponent
                    title={data?.title}
                    description={data?.description}
                    textAlign="text-left"
                    descriptionFullWidth
                ></HeaderComponent>
                <CTAButtons actions={data.actions}></CTAButtons>
            </div>
            <div className="w-full md:w-1/2 min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh] flex flex-col justify-center px-16 md:pl-10 lg:pr-40 space-y-4">
                <ImageComponent photos={data?.photos}></ImageComponent>
            </div>
        </section>
    );
}