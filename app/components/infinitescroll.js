import api from '../helpers/api_routes.js'
import  apigetpagination  from '../helpers/getAll.js';
import  {Countries}  from './countries.js';

export async function Infinitescroll (){

    const d=document,
        w=window;
    let apiURL="",
    Component="";

    apiURL=api.GETALL;

    d.addEventListener("change", e=>{
        if (e.target.matches("select")){
            const region = e.target.value;
            apiURL=`${api.REGION}${region}`
        }
    })

    d.addEventListener("submit", async (e) => {

        e.preventDefault();
        if (!e.target.matches(".search__form")) return false;

        const $form = e.target,
        forminput = $form.querySelector(".searchs").value;
        
        if (!forminput == 0 || !forminput == "") {
            apiURL = `${api.SEARCH}${forminput}`
        }

        
    })

    w.addEventListener("scroll", async (e)=>{
        let {scrollTop,clientHeight,scrollHeight}=d.documentElement,
        {hash} =w.location;
            // console.log(scrollTop,clientHeight,scrollHeight)

        if(scrollTop+2+clientHeight>=scrollHeight){

           
            api.PAGE++;
            Component=Countries;  

            if(!hash || hash ==='#/'|| hash ==='#/home'){
               
                await apigetpagination({
                    api:api,
                    url:apiURL,
                    cbSuccess:(posts)=>{
                        console.log(posts);
                        let html="";
                        posts.forEach((post) => (html += Component(post)));
                        d.querySelector(".cards").insertAdjacentHTML("beforeend",html);
                        
                    }
                });
            
            }


            


        }

    })

}