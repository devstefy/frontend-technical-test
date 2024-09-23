import { FeatureComponentProps, FeatureElementProps } from "@/src/interfaces";
import { FeatureElement } from "./feature-element";
import { HeaderComponent } from "./header-component";


export const FeatureComponent = ({ tag, title, description, buttonName, apps } : FeatureComponentProps) => {

    return (
        <div className="w-full min-h-[80vh] md:min-h-[80vh] lg:min-h-[90vh] flex flex-col justify-center items-center py-5">
            <HeaderComponent tag={tag} title={title} description={description}></HeaderComponent>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-x-3 lg:gap-x-3 mt-10 px-20">
                {apps.map((app : FeatureElementProps, index : number) => 
                    <FeatureElement key={`app-${index}`} {...app} buttonName={buttonName}></FeatureElement>
                )}
            </div>
        </div>
    );
}