"use client";
import {
  ArrowLeftIcon,
  CarouselElement,
  CTAButtons,
  HeaderComponent,
} from "@/src";
import { carousel } from "@/src/constants";
import { useEffect, useState } from "react";

export const TestimonialCarouselSection = () => {
  const data = carousel;

  const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleTestimonials, setVisibleTestimonials] = useState(1);

    const totalTestimonials = data.testimonials.length;

    const testimonialsToShow = {
        lg: 3,
        md: 2,
        sm: 1,
    };

    const updateVisibleTestimonials = () => {
        if (window.innerWidth >= 1024) {
            setVisibleTestimonials(testimonialsToShow.lg);
        } else if (window.innerWidth >= 768) {
            setVisibleTestimonials(testimonialsToShow.md);
        } else {
            setVisibleTestimonials(testimonialsToShow.sm);
        }
    };

    useEffect(() => {
        updateVisibleTestimonials();
        window.addEventListener('resize', updateVisibleTestimonials);
        return () => {
            window.removeEventListener('resize', updateVisibleTestimonials);
        };
    });

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % (totalTestimonials - visibleTestimonials + 1));
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalTestimonials) % (totalTestimonials - visibleTestimonials + 1));
    };

  return (
    <section className="w-full min-h-[80vh] md:min-h-[70vh] lg:min-h-[70vh] py-10 md:pu-14 lg:pu-40">
      <div className="w-full flex flex-col lg:flex-row justify-between items-start px-10 md:px-14 lg:px-40">
        <div className="">
          <HeaderComponent
            title={data.title}
            description={data.description}
            textAlign="text-left"
            descriptionFullWidth
          ></HeaderComponent>
        </div>
        <CTAButtons
          actions={data.actions}
          grid="grid grid-cols-2"
          width="w-full lg:w-1/3"
          margin="mt-3"
        ></CTAButtons>
      </div>
      <div className="max-w-full overflow-x-hidden mt-14 pl-10 md:pl-14 lg:pl-40">
        <div
          className="flex transition-transform duration-300"
          style={{
            transform: `translateX(-${(currentIndex * 100) / visibleTestimonials}%)`,
          }}
        >
          {data.testimonials.map((testimony, index) => (
            <div
              key={`testimony-carousel-${index}`}
              className={`flex-none w-full md:w-1/2 lg:w-1/3`}
            >
              <CarouselElement {...testimony} />
            </div>
          ))}
        </div>
      </div>
      <div
        className={`w-1/2 flex flex-row gap-4 my-7 md:my-10 px-10 md:px-14 lg:px-40`}
      >
        <button
          className={`p-4 hover:opacity-80 border border-borderButtonSecondary rounded-full`}
          onClick={handlePrev}
        >
          <ArrowLeftIcon width={24} height={24} />
        </button>
        <button
          className={`p-4 hover:opacity-80 border border-borderButtonSecondary rounded-full rotate-180`}
          onClick={handleNext}
        >
          <ArrowLeftIcon width={24} height={24} />
        </button>
      </div>
    </section>
  );
};
