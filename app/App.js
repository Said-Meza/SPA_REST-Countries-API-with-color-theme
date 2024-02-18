import { Router } from "./components/Router.js";
import { Header } from "./components/header.js";
import { Main } from "./components/main.js";
import { Infinitescroll } from "./components/infinitescroll.js";


export function App(){
    
    const $root = document.getElementById("root");
     $root.innerHTML="";
     $root.appendChild(Header());
     $root.appendChild(Main());
    

        Router();
        Infinitescroll()

   

}
