const menuItems = [
    {
        label: "Home",
        path: "/",
        icon: "fas fa-home",
        newTab: false,
    },
    {
        label: "About Us",
        path: "/about",
        icon: "fas fa-users",
        newTab: false,
    },
];

const mobileMenuItems = [
    ...menuItems,
    {
        label: "Explore Categories",
        path: "/categories",
        icon: "fas fa-th-list",
        newTab: false,
    },
    {
        label: "Support",
        path: "/support",
        icon: "fas fa-phone",
        newTab: false,
    },
];

export { menuItems, mobileMenuItems };
