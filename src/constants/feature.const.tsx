import { ChartBreakoutIcon, ChatIcon, DropBoxIcon, GoogleDriveIcon, IntercomIcon, JiraIcon, LightningBoltIcon, NotionIcon, SlackIcon } from "../icons";

export const integrations = {
    tag: "Integrations",
    title: "Get more value from your tools",
    description: "Connect your tools, connect your teams. With over 100 apps already available in our directory, your team's favourite tools are just a click away.",
    buttonName: "View integration",
    apps: [
        {
           icon : <NotionIcon width="45" height="45"/>,
           name: "Notion integration",
           description: "Work faster and smarter by integrating directly with Notion, right in the app.",
           link: "https://www.notion.so/"
        },
        {
            icon : <SlackIcon width="45" height="45"/>,
            name: "Slack integration",
            description: "Work faster and smarter by integrating directly with Notion, right in the app.",
            link: "https://slack.com/intl/es-ve"
         },
         {
            icon : <GoogleDriveIcon width="45" height="45"/>,
            name: "Google Drive integration",
            description: "Work faster and smarter by integrating directly with Notion, right in the app.",
            link: "https://www.google.com/intl/es/drive/"
         },
         {
            icon : <IntercomIcon width="45" height="45"/>,
            name: "Intercom integration",
            description: "Work faster and smarter by integrating directly with Notion, right in the app.",
            link: "https://www.intercom.com/"
         },
         {
            icon : <JiraIcon width="45" height="45"/>,
            name: "Jira integration",
            description: "Work faster and smarter by integrating directly with Notion, right in the app.",
            link: "https://www.atlassian.com/es/software/jira"
         },
         {
            icon : <DropBoxIcon width="45" height="45"/>,
            name: "Dropbox integration",
            description: "Work faster and smarter by integrating directly with Notion, right in the app.",
            link: "https://www.dropbox.com/official-teams-page?_tk=paid_sem_goog_biz_b&_camp=19605186703&_kw=dropbox|e&_ad=676237179999||c&gad_source=1&gclid=Cj0KCQjwgL-3BhDnARIsAL6KZ6_O3MsUO0UcoveA20C7xLbTiHeKiYky9agY1SOiRlNWcVZBfTiMh8IaAuAVEALw_wcB"
         },
    ]
}

export const features = {
    tag: "Features",
    title: "Cutting-edge features for advanced analytics",
    description: "Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.",
    buttonName: "Learn more",
    apps: [
        {
           icon : <ChatIcon width="30" height="30"/>,
           name: "Share team inboxes",
           description: "Wheter you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
           link: ""
        },
        {
            icon : <LightningBoltIcon width="24" height="24"/>,
            name: "Deliver instant answers",
            description: "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
            link: ""
         },
         {
            icon : <ChartBreakoutIcon width="24" height="24"/>,
            name: "Manage you team with reports",
            description: "Measures what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
            link: ""
         }
    ]
}