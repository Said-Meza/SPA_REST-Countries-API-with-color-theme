import optionSelect from "./optionSelect.js";


export function Select(){
    const $select = document.createElement("select");
        $select.setAttribute=("data-dark-element","");
        $select.classList="select input ";
        $select.name="search__selected";
        $select.id="search__selected";
        $select.placeholder="Search for a country...";

        optionSelect.forEach(el=>{
            const $optionesSelect =document.createElement("option");
                $optionesSelect.value=el.value;
                $optionesSelect.textContent=el.label;
                $optionesSelect.classList="options";
                (el.selected)?$optionesSelect.setAttribute("selected",""):"";
                $select.appendChild($optionesSelect)
                
        })
        // console.log(optionSelect.length)

        return $select;

        //terminar el select y los eventos van en el  formulario
}