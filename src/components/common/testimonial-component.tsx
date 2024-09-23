"use client";

import { StarIcon } from "@/src/icons";
import { TestimonialComponentProps, TestimonialElement } from "@/src/interfaces";
import { useEffect, useState } from "react";


export const TestimonialComponent = ({ stars, testimony, name, position, company, data, setData } : TestimonialComponentProps) => {

    const [selectedElement, setSelectedElement] = useState<TestimonialElement | null>(null);

    const selectElement = (element: TestimonialElement) => {
        setSelectedElement(element);
        if (setData) setData(element);
    }

    useEffect(() => {
        if (data.length > 0) {
            setSelectedElement(data[0])
        }
    }, [data]);

    return (
        <div className="w-full h-full p-8 flex flex-col justify-center items-left">
            <div className="flex space-x-1">
                {Array.from({ length: stars }, (_, index) => (
                    <StarIcon key={`star-${index}`} width={24} height={24} />
                ))}
            </div>
            <h2 className="font-inter text-left text-xl md:text-3xl lg:text-4xl font-medium text-white my-5">{testimony}</h2>
            <p className="font-inter text-left text-white mb-2">— {name}</p>
            <p className="font-inter text-left font-light text-textTertiary mb-6">{position}, {company}</p>
            <div className="flex space-x-5">
                {data.map(( testimony : TestimonialElement, index : number ) =>
                     <div 
                     key={`button-page-${index}`} 
                     onClick={() => selectElement(testimony)} 
                     className={`w-2.5 h-2.5 rounded-full flex items-center justify-center cursor-pointer ${selectedElement === testimony ? 'bg-white' : 'bg-fgBrandSecondary'}`}
                 >
                 </div>
                )}
            </div>
        </div>
    );
}