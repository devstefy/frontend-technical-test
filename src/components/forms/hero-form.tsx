import { HelpCircleIcon } from "@/src/icons";
import Link from "next/link";

export const HeroForm = (input: any) => {
  return (
    <form className="w-auto h-auto flex flex-col md:flex-row gap-4  justify-center items-center md:items-start my-16">
      <div className="flex flex-col">
        <div className="w-[15rem] md:w-[18rem] h-[3rem] rounded-md border border-t-0 text-sm font-inter flex flex-row items-center justify-between pr-3 bg-white">
          <input
            className="focus:outline-none pl-3"
            placeholder={input.placeholder}
          />
          <HelpCircleIcon width={16} height={16}></HelpCircleIcon>
        </div>
        <p
          className={`text-xs font-light font-inter text-left text-utilityBrand200 mt-2`}
        >
          {input.hintText + " "}
          <Link
            href={""}
            rel="noopener noreferrer" 
            target="_blank"
            className="text-xs font-light font-inter text-left text-utilityBrand200 mt-2 underline"
            >
            {input.hintLink} 
         </Link>
        </p>
      </div>
      <button
        type="submit"
        className="w-[8rem] h-[3rem] px-4 rounded-md border border-t-0 shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] bg-buttonPrimary border-buttonPrimary"
      >
        <span className="font-inter text-white font-normal">
          {input.buttonText}
        </span>
      </button>
    </form>
  );
};
