
export interface CTATextProps {
    text: string,
    color?: string,
    weight?: string
}

export interface CTAActionProps {
    text: CTATextProps,
    background?: string,
    border?: string
}

export interface CTAComponentProps {
    title: CTATextProps,
    description: CTATextProps,
    image: string,
    name: string,
    actions: CTAActionProps[],
    photos?: string[]
}

export interface CTAButtonsProps {
    actions: CTAActionProps[]
}