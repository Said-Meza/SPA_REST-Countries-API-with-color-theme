import { btn_darkmode } from "./btn_dark.js";
import { Title } from "./title.js";
import md from "../helpers/darkmode.js";

const ls=localStorage
let conta=0;


export function Header(){

    //create elemets
    const $header=document.createElement("header"),
        $nav=document.createElement("nav");

    //add feature every element
    $header.classList.add("header")
    $nav.classList.add("nav")
    
    //add comopnets how children an nav
    $nav.appendChild(Title())
    $nav.appendChild(btn_darkmode())

    //add component nav a header
    $header.appendChild($nav);

    if (ls.getItem("modedark")==1){
          md.darkmode();
        }

    document.addEventListener("click",(e)=>{
      
        // console.log(e.target)
        if(e.target.matches(".nav__darktext") || e.target.matches(".nav__img") || e.target.matches(".nav__darkmode")){
            e.preventDefault();
          
            conta++;
    
            if(conta==1){
                md.darkmode()
                ls.setItem("modedark","1")
            }
            if(conta>1 ||conta ==0)
            {
                md.ligthmode()
                conta=0
                ls.setItem("modedark","0")
            }
        }
    })


    return $header;
}