"use client";

import { ChevronDownIcon } from "@/src/icons";
import { LinkProps, NavbarLinkProps } from "@/src/interfaces";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export const DropdownComponent = (link: NavbarLinkProps) => {

    const router = useRouter();

    const [isOpen, setIsOpen] = useState(false);

    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
          if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target as Node)
          ) {
            setIsOpen(false);
          }
        };
    
        document.addEventListener("mousedown", handleClickOutside);
    
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, []);

    return (
        <div className="relative inline-block">
            <button
                className={`cursor-pointer hover:opacity-80 hidden lg:flex flex-row items-center ml-7`}
                type="button"
                onClick={() => toggleDropdown()}
            >
                <p className={`font-inter font-semibold text-sm text-textSecondary mr-2`}>
                    {link?.text}
                </p>
                <ChevronDownIcon width={18} height={18}></ChevronDownIcon>
            </button>
            {isOpen && (
                <ul className="absolute top-full left-0 bg-white min-w-[160px] z-20 hidden lg:flex flex-col gap-1 rounded-lg shadow-xl border border-borderSecondary">
                {link?.links &&
                    link.links.map((link : LinkProps, index : number) => (
                    <li
                        key={`dropdown-item-${index}`}
                        onClick={() => {
                            router.push(link?.link);
                            toggleDropdown();
                        }}
                        className="m-0 py-2 pl-2 rounded-sm hover:opacity-80 cursor-pointer"
                    >
                        <p className={`font-inter font-medium text-sm text-textSecondary`}>
                            {link?.text}
                        </p>
                    </li>
                    ))}
                </ul>
            )}
        </div>
    );
};