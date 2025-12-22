import Navbar from "@/components/navbar/index.js";
import "@/styles/global.css";
import "@/styles/catering.css";
import "@/styles/cateringmodal.css";
import "./catering.js";


const navbar = Navbar();
document.querySelector("body").prepend(navbar);

