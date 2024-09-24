import { HeaderComponentProps } from "@/src/interfaces";


export const HeaderComponent = ({title, titleColor = "", description, descriptionColor = "text-textSecondary", textAlign = "text-center", descriptionFullWidth = false, tag} : HeaderComponentProps) => {

    return (
        <>
            { tag && 
            <span className="bg-utilityBrand50 text-utilityBrand700 font-inter text-xs font-medium border-2 rounded-2xl border-utilityBrand200 p-0.5 px-3">{tag}</span>
            }
            <h2 className={`font-inter ${textAlign} text-2xl sm:text-2xl md:text-4xl font-semibold my-3 ${titleColor}`}>{title}</h2>
            <p className={`${descriptionFullWidth ? "w-full" : "w-5/6 sm:w-4/6 md:w-4/5 lg:w-2/5"} text-base sm:text-lg md:text-xl font-inter ${textAlign} ${descriptionColor}`}>{description}</p>
        </>
    );
}