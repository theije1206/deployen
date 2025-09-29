import '@/styles/global.css';
import '@/styles/navigation.css';
import '@/styles/typography.css';
import '@/styles/heading.css';
import '@/styles/button.css';
import '@/styles/dashboard.css';


import Router from "@/framework/router";

import HomePage from "@/pages/index.html?raw";
import AdminHomePage from "@/pages/admin/home/index.html?raw"; 
import DashboardPage from "@/pages/admin/dashboard/dashboard.html?raw";

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
    },
    {   path: "/dashboard",
        document: DashboardPage

    }
];

new Router(ROUTES, {fallback: "/"});