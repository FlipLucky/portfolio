import hello from "./components/hello.js";
import navbar from "./components/nav.js";

//const app = document.createElement('div');
const mainContainer = document.getElementsByTagName('div')[0];
const nav = navbar();

mainContainer.insertBefore(nav,mainContainer.firstChild);
const helloApp = hello('Bas');

console.log(helloApp) 

