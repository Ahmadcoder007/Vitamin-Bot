const sidebarItems = [
    {
        name: "Bot List",
        id: "bot_list",
        url: "/dashboard"
    },
    {
        name: "Create New Bot",
        id: "create_new_bot",
        url: "/dashboard/createbot"
    },
    {
        name: "Price",
        id: "price",
        url: "/dashboard"
    },
    {
        name: "Configuration",
        id: "configration",
        url: "/dashboard/configuration"
    },
    {
        name: "Logs",
        id: "logs",
        url: "/dashboard/logs"
    },
    {
        name: "Logout",
        id: "logout",
        url: "/"
    },
]


const logs = [
    {
        date: "13/April/2023",
        time: "12:35 PM",
        action: "INFO",
        content: "Program is working as expected"
    },
    {
        date: "13/April/2023",
        time: "12:35 PM",
        action: "SUCCESS",
        content: "Ahmad has set a bot to train"
    },
    {
        date: "13/April/2023",
        time: "12:35 PM",
        action: "DANGER",
        content: "Waqas has deleted facebook crawler"
    },
    {
        date: "13/April/2023",
        time: "12:35 PM",
        action: "SUCCESS",
        content: "Youtube Crawler run successfully"
    },
    {
        date: "13/April/2023",
        time: "12:35 PM",
        action: "WARNING",
        content: "Linkedin Crawler could have unexpected results"
    },
]

export {
    sidebarItems,
    logs
}