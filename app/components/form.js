import ajax from "../helpers/ajax.js";
import api from "../helpers/api_routes.js";
import apigetpagination from "../helpers/getAll.js";
import { Countries } from "./countries.js";
import { Search } from "./search.js";
import { Select } from "./select.js";

let URL = "";
export function Form() {
    //create elemet Form
    const $form = document.createElement("form"),
    d =document;

    //add feactures
    $form.classList.add("search__form"),
        $form.action = "#";

    $form.appendChild(Search())
    $form.appendChild(Select())

    d.addEventListener("submit", async (e) => {
        e.preventDefault();
        if (!e.target.matches(".search__form")) return false;

        const $form = e.target,
            forminput = $form.querySelector(".searchs").value;

         if (!forminput == 0 || !forminput == "") {
             URL = `${api.SEARCH}${forminput}`
            await apigetpagination({
                url: URL,
                api: api,
                cbSuccess: (search) => {
                    let html = "";

                    search.forEach(el => { html += Countries(el)});
                    const $cards = d.querySelector(".cards");

                    $cards.innerHTML = "";
                    $cards.innerHTML = html;
                }
            })
        }
    })

    document.addEventListener("change", async e => {

        if (!e.target.matches("select")) return false;

        if (e.target.matches("select")) {

            const region = e.target.value;
             URL=`${api.REGION}${region}`
            await apigetpagination({
                
                url: URL,
                api:api,
                cbSuccess: (side) => {
                    // console.log(side)
                    let html = "";

                    side.forEach(el => {html += Countries(el)});
                    const $cards = d.querySelector(".cards");
                    $cards.innerHTML = "";
                    $cards.innerHTML = html;


                }
            })

        }

    })

    return $form;
}