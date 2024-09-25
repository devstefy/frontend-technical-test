import { hero } from "@/src/constants";
import { HeaderComponent } from "../common";
import { HelpCircleIcon } from "@/src/icons";
import { HeroForm } from "../forms";

export const HeroSection = () => {
    const data = hero;

    return (
        <section className="w-full min-h-screen md:min-h-[90vh] lg:min-h-[90vh] flex flex-col justify-center items-center px-10 md:px-14 lg:px-20">
            <div className="bg-bgBrand w-full min-h-[70vh] md:min-h-[60vh] lg:min-h-[70vh] rounded-2xl flex flex-col justify-center items-center mt-24">
                <div className="flex flex-col justify-center items-center">
                    <h2 className={`font-inter text-center text-2xl sm:text-2xl md:text-6xl font-semibold my-3 text flex flex-col`}><span className="text-white">{data.title[0] + " "}</span><span className="text-utilityBrand200 mt-3">{data.title[1]}</span></h2>
                    <p className={`w-5/6 sm:w-4/6 md:w-4/5 lg:w-[60%] text-base sm:text-lg md:text-xl font-light font-inter text-center text-utilityBrand200 mt-4`}>{data.description}</p>
                    <HeroForm {...data?.input}></HeroForm>
                </div>
            </div>
            <div className="bg-opacity-0 w-full min-h-[20vh] md:min-h-[30vh] lg:min-h-[40vh] flex justify-center relative -mt-20">
                <img 
                    className={`object-cover w-[80%] lg:w-[60%] h-full`}
                    src={data?.mockup}
                    alt={`Hero Image`} 
                />
            </div>
        </section>
    );
}