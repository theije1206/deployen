import '@/styles/global.css';
import '@/styles/navigation.css';
import '@/styles/typography.css';
import '@/styles/heading.css';
import '@/styles/button.css';
import '@/styles/notifications.css';
import '@/styles/sanitair.css';
import '@/styles/reservations.css';


import Router from "@/framework/router";
import HomePage from "@/pages/index.html?raw";
import AdminHomePage from "@/pages/admin/home/index.html?raw";
import sanitairPage from "@/pages/sanitair/index.html?raw";
import hygienePage from'@/pages/sanitair/hygiene.html?raw';
import defectPage from '@/pages/sanitair/defect.html?raw';
import allNotificationsPage from '@/pages/sanitair/all-notifications.html?raw';
import storagePage from '@/pages/sanitair/storage.html?raw';
import elsePage from '@/pages/sanitair/else.html?raw';
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

        path: "/sanitair",
        document: sanitairPage
    },
    {
        path: "/sanitair/hygiene",
        document: hygienePage
    },
    {
        path: "/sanitair/defect",
        document: defectPage
    },
    {
        path: "/sanitair/all-notifications",
        document: allNotificationsPage
    },
    {
        path: "/sanitair/storage",
        document: storagePage
    },
    {
        path: "/sanitair/else",
        document: elsePage
    },
    {
        path: "/admin/modules/reservations",
        document: reservationsPage
    }
];

new Router(ROUTES, {fallback: "/"});