import { metrics } from "@/src/constants";
import { HeaderComponent, MetricElement } from "../common";
import { MetricElementProps } from "@/src/interfaces";

export const MetricsSection = () => {
    const data = metrics;

    return (
        <section className="w-full min-h-screen md:min-h-[60vh] lg:min-h-[70vh] flex flex-col justify-center items-center py-5">
            <HeaderComponent title={data.title} description={data.description}></HeaderComponent>
            <div className="w-[80%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-x-3 lg:gap-x-3 mt-10 mx-20 p-8 py-12 bg-bgSecondary">
                {data.metrics.map((metric : MetricElementProps, index : number) => 
                    <MetricElement key={`metric-${index}`} {...metric}></MetricElement>
                )}
            </div>
        </section>
    );
}