import '@/styles/global.css';
import '@/styles/navigation.css';
import '@/styles/typography.css';


import Router from "@/framework/router";

import HomePage from "@/pages/index.html?raw";
import AdminHomePage from "@/pages/admin/home/index.html?raw";

/**
 * @type {Array<{path: string, document: string}>}
 */
const ROUTES = [
    {
        path: "/",
        document: HomePage
    },
    {
        path: "/admin",
        document: AdminHomePage
    }
];

new Router(ROUTES, {fallback: "/"});