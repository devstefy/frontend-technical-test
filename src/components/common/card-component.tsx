"use client";

import { CardComponentProps, TestimonialElement } from "@/src/interfaces";
import Image from "next/image";
import { useState } from "react";
import { TestimonialComponent } from "./testimonial-component";

export const CardComponent = ({
  data,
  type,
  imagePosition
}: CardComponentProps) => {

  const [cardElement, setCardElement] = useState<TestimonialElement>(data?.[0] ?? data)

  return (
    <div className={`min-h-[60vh] max-h-[70vh] md:max-h-[60vh] bg-bgBrand mx-16 md:mx-16 lg:mx-40 rounded-2xl flex flex-col ${imagePosition === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
      <div className={`w-full md:w-[40%] min-h-full relative overflow-hidden rounded-t-2xl md:rounded-t-none ${imagePosition === 'right' ? 'rounded-t-2xl md:rounded-t-none md:rounded-r-2xl' : 'rounded-t-2xl md:rounded-t-none md:rounded-l-2xl'}`}>
          <img 
              className={`object-cover w-full h-full`}
              src={cardElement.image} 
              alt={`${cardElement.name} Testimony`} 
          />
      </div>
      <div className="min-h-[50vh] md:min-h-[60vh] md:w-[60%] h-full flex items-center justify-center">
          {type === "pages" ?
          <TestimonialComponent {...cardElement} data={data} setData={setCardElement}></TestimonialComponent>
          :
          <TestimonialComponent {...cardElement} data={data} setData={setCardElement}></TestimonialComponent>
          }
      </div>
    </div>
  );
};
