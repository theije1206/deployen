import Navbar from "@/components/navbar/index.js";
import "@/styles/global.css";
import "@/styles/catering.css";
import "@/pages/admin/modules/sanitair/styles.css";

const navbar = Navbar();
document.querySelector("body").prepend(navbar);
