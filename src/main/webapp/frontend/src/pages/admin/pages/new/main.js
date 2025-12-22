import Navbar from "@/components/navbar/index.js";
import "@/styles/global.css";
import "@/styles/typography.css";
import "@/pages/admin/pages/style.css";
import "@/styles/button.css";

const navbar = Navbar();

document.querySelector("body").prepend(navbar);