import {
    mergeHead,
    parseDocument,
    replaceBody,
    runScripts
} from "@/framework/router/lib/dom.js";


/**
 * Manages what document page to render
 */
class Router {
    /**
     * @param {Array<Object>} pages - List of all pages.
     * @param {string} pages.path Route to the document.
     * @param {string} pages.document Document content.
     * @param {Object} options Extra router settings.
     * @param {string} [options.fallback] Fallback page when router cannot find route.
     */
    constructor(pages, options = {fallback: "/404"}) {
        this.pages = this.registerRoutes(pages);
        this.options = options;
        this.init();

    }

    /**
     * @private
     * Initialises the router.
     */
    init() {
        window.addEventListener("popstate", () => {
            this.updateDocumentContent();
        });

        document.addEventListener("DOMContentLoaded", () => {
            document.addEventListener("click", event => {
                this.navigationHandler(event);
            });
            this.updateDocumentContent();
        });

    }

    /**
     * @private
     * @param {Array<Object>} routes
     * @param {string} routes.path
     * @param {string} routes.document
     * @returns {{string: string}}
     */
    registerRoutes(routes) {
        /**
         * @type {{string: string}}
         */
        const routesObject = {};
        routes.map(route => {
            routesObject[route.path] = route.document;
        });
        return routesObject;
    }

    /**
     * @private
     * Updates the document content to the next document.
     */
    updateDocumentContent() {
        const path = window.location.pathname.replace(/\/+$/, "") || "/";
        const html = this.pages[path] || this.pages[this.options.fallback];
        const doc = parseDocument(html);
        this.renderDocumentToBrowser(doc);
    }

    /**
     * @private
     * Handles all site navigation.
     * @param {MouseEvent} event
     */
    navigationHandler(event) {
        if (event.defaultPrevented || event.button !== 0) {
            return;
        }

        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
            return;
        }

        const anchor = event.target.closest("a[href]");
        if (!anchor) {
            return;
        }

        if (anchor.target && anchor.target.toLowerCase() === "_blank") {
            return;
        }

        if (anchor.hasAttribute("download") || anchor.rel?.includes("external")) {
            return;
        }

        const url = new URL(anchor.href, window.location.href);
        const httpsRegex = /^https?:$/;

        if (!httpsRegex.test(url.protocol)) {
            return;
        }

        if (url.origin !== window.location.origin) {
            return;
        }

        if (url.pathname === window.location.pathname &&
            url.hash !== window.location.hash &&
            url.search === window.location.search) {
            return;
        }

        event.preventDefault();

        const currentPath = window.location.pathname + window.location.search + window.location.hash;
        const nextPath = url.pathname + url.search + url.hash;
        if (nextPath === currentPath) {
            return;
        }

        history.pushState(null, null, nextPath);
        this.updateDocumentContent();
    }

    /**
     * @private
     * Renders the next document to the browser.
     * @param {Document} newDocument
     */
    renderDocumentToBrowser(newDocument) {
        mergeHead(newDocument);
        replaceBody(newDocument);
        runScripts();
    }
}

export default Router;