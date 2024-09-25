
export interface InputHeroProps {
    placeholder: string,
    buttonText: string,
    hintText: string,
    hintLink: string
}

export interface HeroProps {
    title: string[],
    description: string,
    input: InputHeroProps,
    mockup: string
}