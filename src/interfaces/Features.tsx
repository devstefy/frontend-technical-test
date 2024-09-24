
export interface FeatureElementProps {
    icon : React.ReactNode,
    name: string,
    description: string,
    link: string,
    buttonName?: string
}

export interface FeatureComponentProps {
    tag: string,
    title: string,
    description: string,
    buttonName: string,
    apps: FeatureElementProps[]
}