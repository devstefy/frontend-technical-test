import { FeatureComponentProps, FeatureElementProps } from "@/src/interfaces";
import { FeatureElement } from "./feature-element";


export const FeatureComponent = ({ tag, title, description, buttonName, apps } : FeatureComponentProps) => {

    return (
        <div className="w-full min-h-[80vh] md:min-h-[80vh] lg:min-h-[90vh] flex flex-col justify-center items-center py-5">
            <span className="bg-utilityBrand50 text-utilityBrand700 font-inter text-xs font-medium border-2 rounded-2xl border-utilityBrand200 p-0.5 px-3">{tag}</span>
            <h2 className="font-inter text-center text-2xl font-semibold my-3">{title}</h2>
            <p className="w-5/6 sm:w-4/6 md:w-4/5 lg:w-2/5 font-inter text-center text-textSecondary">{description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-x-3 lg:gap-x-3 mt-10 px-20">
                {apps.map((app : FeatureElementProps, index : number) => 
                    <FeatureElement key={`app-${index}`} {...app} buttonName={buttonName}></FeatureElement>
                )}
            </div>
        </div>
    );
}