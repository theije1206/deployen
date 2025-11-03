import '@/styles/global.css';
import '@/styles/navigation.css';
import '@/styles/typography.css';
import '@/styles/heading.css';
import '@/styles/button.css';
import '@/styles/dashboard.css';
import '@/styles/notifications.css';
import '@/styles/sanitair.css';
import '@/styles/reservations.css';
import '@/styles/catering.css'


import Router from "@/framework/router";
import HomePage from "@/pages/index.html?raw";
import AdminHomePage from "@/pages/admin/home/index.html?raw";
import dashboardPage from "/dashboard.html?raw";
import sanitairPage from "@/pages/sanitair/index.html?raw";
import hygienePage from'@/pages/sanitair/hygiene.html?raw';
import defectPage from '@/pages/sanitair/defect.html?raw';
import allNotificationsPage from '@/pages/sanitair/all-notifications.html?raw';
import reservationsPage from "@/pages/admin/modules/reservations.html?raw";
import storagePage from '@/pages/sanitair/storage.html?raw';
import elsePage from '@/pages/sanitair/else.html?raw';
import cateringPage from "@/pages/catering.html?raw"
import cateringOrder from "@/pages/cat_orders.html?raw"
import cateringBakery from "@/pages/cat_bakery.html?raw"


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
        path: "/reserveringen",
        document: reservationsPage
    },

    {
        path: "/catering",
        document: cateringPage
    },
    {
        path: "/catering/orders",
        document: cateringOrder
    },
    {
        path: "/catering/bakery",
        document: cateringBakery
    }
];

new Router(ROUTES, {fallback: "/"});