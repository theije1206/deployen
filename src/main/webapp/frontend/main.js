import HomePage from "/index.html?raw";
import KanoverhuurPage from "/kanoverhuur.html?raw";
import AdminHomePage from "index.html?raw";

const routes = {
    "/": HomePage,
    "/kanoverhuur": KanoverhuurPage,
    "/admin": AdminHomePage,
};

function render() {
    const app = document.getElementById("app");
    if (!app) return;

    // normaliseer trailing slash
    let path = window.location.pathname.replace(/\/$/, "");
    if (path === "") path = "/";

    const page = routes[path] ?? HomePage;
    app.innerHTML = page;
}

window.addEventListener("popstate", render);

// link clicks afvangen
document.addEventListener("click", (e) => {
    const link = e.target.closest("a");
    if (!link) return;

    const href = link.getAttribute("href");
    if (!href.startsWith("/")) return;

    e.preventDefault();
    history.pushState(null, "", href);
    render();
});

// eerste render
render();
