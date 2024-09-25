import { footer } from "@/src/constants";
import { FooterGetProps, LinkProps, FooterSectionProps } from "@/src/interfaces";
import Link from "next/link";
import { Logo } from "./logo";

export const Footer = () => {
  const data = footer;

  return (
    <footer className="w-full min-h-[20vh] md:min-h-[70vh] lg:min-h-[50vh] flex flex-col px-20 pb-8">
      <div className="w-full min-h-[70vh] md:min-h-[60vh] lg:min-h-[40vh] hidden md:grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-4 ">
        {data?.sections.map((section: FooterSectionProps, index: number) => (
          <div className="flex flex-col" key={`section-${index}`}>
            <p className={`font-inter font-semibold text-sm mb-1`}>
              {section?.name}
            </p>
            {section.links.map((link: LinkProps, index: number) => (
                <Link
                    className={`mt-4 cursor-pointer hover:opacity-80 flex flex-row items-center`}
                    key={`link-${index}`}
                    href={link?.link}
                    rel="noopener noreferrer" 
                    target="_blank"
                >
                    <p className="font-inter font-semibold text-base text-utilityBrand700">{link?.text}</p>
                    {link?.tag &&
                        <p className="font-inter font-base text-xs text-utilityBrand700 ml-2 border border-utilityBrand700 px-1.5 rounded-lg">{link?.tag}</p>
                    }
                </Link>
            ))}
          </div>
        ))}
        <div className="flex flex-col">
          <p className={`font-inter font-semibold text-sm mb-1`}>Get the app</p>
          {data.getters.map((get: FooterGetProps, index: number) => (
                <Link
                    className={`mt-4 cursor-pointer hover:opacity-80 flex flex-row items-center`}
                    key={`get-${index}`}
                    href={get?.link}
                    rel="noopener noreferrer" 
                    target="_blank"
                >
                    {get.icon}
                </Link>
            ))}
        </div>
      </div>
      <div className="w-full min-h-[10vh] md:min-h-[10vh] lg:min-h-[10vh] border-t border-borderSecondary flex flex-col md:flex-row justify-center md:justify-between items-center">
        <Logo icon={data?.company?.icon} name={data?.company?.name}></Logo>
        <p
          className={`font-inter text-textQuarterary text-xs md:text-base pt-5 md:pt-0 text-center`}
        >
          {data?.copyright}
        </p>
      </div>
    </footer>
  );
};
