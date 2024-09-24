import { navbar } from "@/src/constants";
import Link from "next/link";
import { Logo } from "./logo";
import { NavbarLinkProps } from "@/src/interfaces";
import { CTAButtons, DropdownComponent } from "../common";

export const Navbar = () => {
  const data = navbar;

  return (
    <div className="fixed z-10 w-full min-h-[0vh] md:min-h-[6vh] lg:min-h-[7vh] hidden md:flex flex-row items-center justify-between px-20 bg-white bg-opacity-90">
      <div className="flex flex-row items-center justify-start">
        <Logo icon={data?.company?.icon} name={data?.company?.name}></Logo>
        {data.links.map((link: NavbarLinkProps, index: number) => (
          <>
            {link?.link !== undefined ?
              <Link
                className={`cursor-pointer hover:opacity-80 hidden lg:flex flex-row items-center ml-7`}
                key={`link-${index}`}
                href={link?.link}
                rel="noopener noreferrer" 
                target="_blank"
              >
                  <p className={`font-inter font-semibold text-sm text-textSecondary`}>
                    {link?.text}
                  </p>
              </Link>
              :
              <DropdownComponent {...link}></DropdownComponent>
          }
          </>
        ))}
      </div>
      <div className="flex flex-row items-center justify-end">
        <CTAButtons actions={data.actions} padding="px-4 py-2" margin="" fontSize="text-sm"></CTAButtons>
      </div>
    </div>
  );
};
