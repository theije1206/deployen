import Router from "@/framework/router";

import "./style.css";

import HomePage from "@/pages/index.html?raw";


/**
 * @type {Array<{path: string, document: string}>}
 */
const ROUTES = [
    {
        path: "/",
        document: HomePage
    }
];

new Router(ROUTES, {fallback: "/"});