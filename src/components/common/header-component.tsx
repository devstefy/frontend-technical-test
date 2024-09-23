import { HeaderComponentProps } from "@/src/interfaces";


export const HeaderComponent = ({title, description, tag} : HeaderComponentProps) => {

    return (
        <>
            { tag && 
            <span className="bg-utilityBrand50 text-utilityBrand700 font-inter text-xs font-medium border-2 rounded-2xl border-utilityBrand200 p-0.5 px-3">{tag}</span>
            }
            <h2 className="font-inter text-center text-2xl font-semibold my-3">{title}</h2>
            <p className="w-5/6 sm:w-4/6 md:w-4/5 lg:w-2/5 font-inter text-center text-textSecondary">{description}</p>
        </>
    );
}