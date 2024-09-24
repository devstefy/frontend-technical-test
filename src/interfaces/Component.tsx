import { CTAComponentProps } from "./CTA";
import { TestimonialElement } from "./Testimonials";

type cardType = "pages" | "CTA";

type cardImagePosition = "left" | "right";
export interface CardComponentProps {
    data: TestimonialElement[] | CTAComponentProps,
    type: cardType,
    imagePosition: cardImagePosition
}

export interface HeaderComponentProps {
    tag?: string,
    title: string,
    titleColor?: string,
    description: string,
    descriptionColor?: string,
    textAlign?: string,
    descriptionFullWidth?: boolean
}