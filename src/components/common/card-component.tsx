"use client";

import { CardComponentProps, CTAComponentProps, TestimonialElement } from "@/src/interfaces";
import { Dispatch, SetStateAction, useState } from "react";
import { TestimonialComponent } from "./testimonial-component";
import { CTAComponent } from "./cta-component";

export const CardComponent = ({
  data,
  type,
  imagePosition
}: CardComponentProps) => {

  const [cardElement, setCardElement] = useState<TestimonialElement | CTAComponentProps>(Array.isArray(data) && data.length > 0 ? (data?.[0] as TestimonialElement) : (data as CTAComponentProps))

  return (
    <div className={`min-h-[60vh] max-h-[70vh] md:max-h-[60vh] bg-bgBrand mx-16 md:mx-16 lg:mx-40 rounded-2xl flex flex-col ${imagePosition === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} overflow-hidden`}>
      <div className={`w-full md:w-[40%] min-h-full relative overflow-hidden rounded-t-2xl md:rounded-t-none ${imagePosition === 'right' ? 'rounded-t-2xl md:rounded-t-none md:rounded-r-2xl' : 'rounded-t-2xl md:rounded-t-none md:rounded-l-2xl'}`}>
          <img 
              className={`object-cover w-full h-full`}
              src={cardElement.image} 
              alt={`${cardElement?.name}`} 
          />
      </div>
      <div className="min-h-[50vh] md:min-h-[60vh] md:w-[60%] h-full flex items-center justify-center">
          {type === "pages" ?
          <TestimonialComponent {...cardElement as TestimonialElement} data={data as TestimonialElement[]} setData={setCardElement as Dispatch<SetStateAction<TestimonialElement>>}></TestimonialComponent>
          :
          <CTAComponent {...cardElement as CTAComponentProps}></CTAComponent>
          }
      </div>
    </div>
  );
};
