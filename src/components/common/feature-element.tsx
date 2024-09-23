import { ArrowNarrowRightIcon } from "@/src/icons";
import { FeatureElementProps } from "@/src/interfaces";
import Link from "next/link";

export const FeatureElement = ({
  icon,
  name,
  description,
  link,
  buttonName
}: FeatureElementProps) => {
  return (
    <div className="flex flex-col justify-center items-center">
        <div className="w-fit p-1 flex justify-center items-center border border-borderSecondary rounded-lg shadow">
            {icon}
        </div>
        <h4 className="font-inter text-sm text-center font-bold my-2 mt-3">{name}</h4>
        <p className="w-full sm:w-full md:w-full lg:w-full xl:w-3/5 font-inter text-sm text-center text-textSecondary mb-4">
        {description}
        </p>
        <Link
        href={link}
        rel="noopener noreferrer" 
        target="_blank"
        className="flex justify-center items-center font-inter text-sm text-center font-semibold text-utilityBrand700  hover:cursor-pointer hover:font-bold"
        key={name}
        >
            <p className="mr-2">{buttonName}</p>
            <ArrowNarrowRightIcon width="24" height="24" color="var(--utility-brand-700)" />
        </Link>
    </div>
  );
};
