import navbar from "./components/nav.js";
import mainContent from "./components/mainContent.js";

//const app = document.createElement('div');
const container = document.getElementsByTagName('div')[0];
const nav = navbar();
const main = mainContent();


container.appendChild(nav);
container.appendChild(main);