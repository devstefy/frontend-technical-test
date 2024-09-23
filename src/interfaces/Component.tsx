import { TestimonialElement } from "./Testimonials";

type cardType = "pages" | "CTA";

type cardImagePosition = "left" | "right";
export interface CardComponentProps {
    data: TestimonialElement[],
    type: cardType,
    imagePosition: cardImagePosition
}

export interface HeaderComponentProps {
    tag?: string,
    title: string,
    description: string
}