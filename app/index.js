// import api from "./helpers/api_routes.js";
import { App } from "./App.js"

document.addEventListener("DOMContentLoaded", App);

 window.addEventListener("hashchange", () => {
                            //  api.page = 1;
                            App();
                         });