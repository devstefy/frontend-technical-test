import { GetAppStoreIcon, GetGooglePlayIcon, LogoIcon } from "../icons";
import { FooterProps, NavbarProps } from "../interfaces";

export const navbar : NavbarProps = {
    company: {
        icon: <LogoIcon width="38" height="38"/>,
        name: "Untitled UI",
    },
    links: [
        {
            text: "Home",
            link: ""
        },
        {
            text: "Products",
            links: [
                {
                    text: "Overview",
                    link: ""
                },
                {
                    text: "Features",
                    link: ""
                },
                {
                    text: "Solutions",
                    link: "",
                    tag: "New"
                },
                {
                    text: "Tutorials",
                    link: ""
                },
                {
                    text: "Pricing",
                    link: ""
                },
                {
                    text: "Releases",
                    link: ""
                },
            ]
        },
        {
            text: "Resources",
            links: [
                {
                    text: "Blog",
                    link: ""
                },
                {
                    text: "Newsletter",
                    link: ""
                },
                {
                    text: "Events",
                    link: "",
                },
                {
                    text: "Help center",
                    link: ""
                },
                {
                    text: "Tutorials",
                    link: ""
                },
                {
                    text: "Support",
                    link: ""
                },
            ]
        },
        {
            text: "Pricing",
            link: ""
        }
    ],
    actions: [
        {
            text: {
                text: "Log in",
                color: "text-foreground",
            },
            background: "bg-white",
        },
        {
            text: {
                text: "Sign up",
                color: "text-white",
            },
            background: "bg-buttonPrimary"
         }
    ]
}

export const footer : FooterProps = {
    company: {
        icon: <LogoIcon width="38" height="38"/>,
        name: "Untitled UI",
    },
    getters: [
        {
            icon: <GetAppStoreIcon width="135" height="40"/>,
            link: "https://www.apple.com/la/app-store/"
        },
        {
            icon: <GetGooglePlayIcon width="135" height="40"/>,
            link: "https://play.google.com/store/apps?hl=es_419"
        }
    ],
    sections: [
        {
            name: "Product",
            links: [
                {
                    text: "Overview",
                    link: ""
                },
                {
                    text: "Features",
                    link: ""
                },
                {
                    text: "Solutions",
                    link: "",
                    tag: "New"
                },
                {
                    text: "Tutorials",
                    link: ""
                },
                {
                    text: "Pricing",
                    link: ""
                },
                {
                    text: "Releases",
                    link: ""
                },
            ]
        },
        {
            name: "Company",
            links: [
                {
                    text: "About us",
                    link: ""
                },
                {
                    text: "Careers",
                    link: ""
                },
                {
                    text: "Press",
                    link: "",
                },
                {
                    text: "News",
                    link: ""
                },
                {
                    text: "Media kit",
                    link: ""
                },
                {
                    text: "Contact",
                    link: ""
                },
            ]
        },
        {
            name: "Resources",
            links: [
                {
                    text: "Blog",
                    link: ""
                },
                {
                    text: "Newsletter",
                    link: ""
                },
                {
                    text: "Events",
                    link: "",
                },
                {
                    text: "Help center",
                    link: ""
                },
                {
                    text: "Tutorials",
                    link: ""
                },
                {
                    text: "Support",
                    link: ""
                },
            ]
        },
        {
            name: "Social",
            links: [
                {
                    text: "Twitter",
                    link: ""
                },
                {
                    text: "LinkedIn",
                    link: ""
                },
                {
                    text: "Facebook",
                    link: "",
                },
                {
                    text: "GitHub",
                    link: ""
                },
                {
                    text: "AngelList",
                    link: ""
                },
                {
                    text: "Dribbble",
                    link: ""
                },
            ]
        },
        {
            name: "Legal",
            links: [
                {
                    text: "Terms",
                    link: ""
                },
                {
                    text: "Privacy",
                    link: ""
                },
                {
                    text: "Cookies",
                    link: "",
                },
                {
                    text: "Licenses",
                    link: ""
                },
                {
                    text: "Settings",
                    link: ""
                },
                {
                    text: "Contact",
                    link: ""
                },
            ]
        },
    ],
    copyright: "© 2077 Untitled UI. All rights reserved."
}