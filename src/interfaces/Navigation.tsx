import { CTAActionProps } from "./CTA"



export interface LogoProps {
    icon: React.ReactNode,
    name: string
}

export interface FooterGetProps {
    icon: React.ReactNode,
    link: string
}

export interface LinkProps {
    text: string,
    link: string,
    tag?: string
}

export interface FooterSectionProps {
    name: string,
    links: LinkProps[]
}

export interface FooterProps {
    company: LogoProps,
    getters: FooterGetProps[],
    sections: FooterSectionProps[]
    copyright: string
}

export interface NavbarLinkProps {
    text: string,
    link?: string,
    links?: LinkProps[]
}

export interface NavbarProps {
    company: LogoProps,
    links: NavbarLinkProps[],
    actions: CTAActionProps[]
}