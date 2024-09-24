
export interface FAQElementProps {
    title: string,
    description: string,
    borderBottom?: boolean
}

export interface FAQProps extends FAQElementProps {
    faq: FAQElementProps[]
}