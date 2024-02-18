import ajax from '../helpers/ajax.js';
import api from '../helpers/api_routes.js'
import apigetpagination from '../helpers/getAll.js';
import getLenguages from '../helpers/getLenguage.js';
import getMoney from '../helpers/getMoney.js';
import  md from '../helpers/darkmode.js';
import { ComeBack } from './botonback.js';
import {Countries}  from './countries.js';
import { Form } from './form.js';
import { borderCountries } from './getBorder.js';
import { moreAboutCountry } from './moreaboutCountry.js';

export async function Router()
{
  //create elements to use more later
  const d=document,
    w=window,
    $main=d.getElementById("main"),
    $section=d.createElement("section")

    let LINKURL="",
    {hash}=location

    //add feecture a elements
    $section.classList="cards container"
        
         $main.innerHTML= null;
        
         if( !hash || hash==="#/" || hash.includes("#/home"))
         {
           
             $main.appendChild(Form())
             $main.appendChild($section)
             
              LINKURL=api.GETALL;

             await  apigetpagination({
                  api:api,
                  url:LINKURL,
                   cbSuccess:(countries)=>{
                    //  console.log(countries)
                           let html="";
                          
                          countries.forEach(el => {
                               html += Countries(el);
                      
                          });
                         
                         $section.innerHTML=html;
                }
            });
                  
                //   $main.innerHTML =`<h2>principal menu </h2>`;
                
        }else if( hash.includes("#/query=")) {
                
           
                  $main.innerHTML ="";
                //   $main.innerHTML =`<h2>more about country </h2>`;
                  
                    let {hash}=location;
                    const param = hash.substring(2),
                    [key, value] = param.split('=');

                  await  ajax({
                    url:`${api.SEARCH}${value}`,
                    cbSuccess:(more)=>{
                        // console.log(more)
                        // console.log(more[0].borders)
                            const border= more[0].borders;
                            let html="";
                            more.forEach(el => {html += moreAboutCountry(el)});
                           
                            $main.innerHTML=html;

                            document.querySelector(".currencies").textContent= getMoney(more[0].currencies);
                            document.querySelector(".languaje").textContent= getLenguages(more[0].languages);

                            if(border){
                                let element="";
                                border.forEach( (el)=> {
                                     element +=borderCountries(el) 
                                    })
                                    document.querySelector(".other__container").innerHTML=element;
                                
                            }else{
                                document.querySelector(".morepaises").textContent=`No has Border Countries`
                            }

                        }
                    });
                    
                    $main.insertAdjacentElement("beforebegin",ComeBack())

        }
        else
        {
            $main.innerHTML =`<h2>error code:404"  pag no fount"</h2>`;
        }
}