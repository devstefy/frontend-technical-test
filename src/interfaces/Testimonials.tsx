import { Dispatch, SetStateAction } from "react";

export interface TestimonialElement {
    image?: string;
    stars: number;
    testimony: string;
    name: string;
    position: string;
    company: string;
}

export interface TestimonialComponentProps extends TestimonialElement {
    data: TestimonialElement[],
    setData?: Dispatch<SetStateAction<TestimonialElement>>;
}

export interface CarouselElementProps {
    image: string;
    stars: number;
    testimony?: string;
    name: string;
    position: string;
    company: string;
}