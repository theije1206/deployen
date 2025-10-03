import '@/styles/global.css';
import '@/styles/navigation.css';
import '@/styles/typography.css';
import '@/styles/heading.css';
import '@/styles/button.css';
import '@/styles/dashboard.css';

// import '@/pages/admin/dashboard/dashboard.js'

import '@/styles/reservations.css';

import Router from "@/framework/router";
import HomePage from "@/pages/index.html?raw";
import AdminHomePage from "@/pages/admin/home/index.html?raw";
import dashboardPage from "/dashboard.html?raw";
import { reservationsPage } from "@/pages/admin/modules/reservations.js";

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
    {
        path: "/dashboard",
        document: dashboardPage
    },
    {
        path: "/admin/modules/reservations",
        document: reservationsPage
    }
];

new Router(ROUTES, {fallback: "/"});