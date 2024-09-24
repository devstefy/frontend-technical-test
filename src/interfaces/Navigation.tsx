

export interface FooterCompanyProps {
    icon: React.ReactNode,
    name: string
}

export interface FooterGetProps {
    icon: React.ReactNode,
    link: string
}

export interface FooterLinkProps {
    text: string,
    link: string,
    tag?: string
}

export interface FooterSectionProps {
    name: string,
    links: FooterLinkProps[]
}

export interface FooterProps {
    company: FooterCompanyProps,
    getters: FooterGetProps[],
    sections: FooterSectionProps[]
    copyright: string
}