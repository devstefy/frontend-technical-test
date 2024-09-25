"use client";

import { MinusCircleIcon, PlusCircleIcon } from "@/src/icons";
import { FAQElementProps } from "@/src/interfaces/FAQ";
import { useEffect, useRef, useState } from "react";

export const AccordionComponent = ({title, description, borderBottom = false}: FAQElementProps) => {

    const [isOpen, setIsOpen] = useState(false);

    const accordionRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
          if (
            accordionRef.current &&
            !accordionRef.current.contains(event.target as Node)
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
        <div ref={accordionRef} className={`relative inline-block w-full ${borderBottom ? "border-b border-borderSecondary" : ""} py-6`}>
            <button
                className={`w-full cursor-pointer hover:opacity-80 flex flex-row justify-between items-center`}
                type="button"
                onClick={() => toggleDropdown()}
            >
                <p className={`font-inter font-semibold text-base mr-2`}>
                    {title}
                </p>
                {isOpen ?
                <MinusCircleIcon width={20} height={20}></MinusCircleIcon>
                :
                <PlusCircleIcon width={20} height={20}></PlusCircleIcon>
                }
            </button>
            {isOpen && (
                <div className="w-full pt-2 flex items-start pr-10">
                    <p className={`font-inter font-normal text-sm text-textSecondary`}>
                        {description}
                    </p>
                </div>
            )}
        </div>
    );
};