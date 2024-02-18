export function Search(){
    //create element
    const d=document,
        $div= d.createElement("div"),
        $search = d.createElement("input"),
        $figure = d.createElement("figure"),
        $img = d.createElement("img");
        
        //add feacture every elements
        $div.classList.add("search_input")

        $figure.classList.add("lupa_container")
        
        $img.classList.add("lupa__icon")
        $img.src="/app/assets/lupa.png"
        $img.alt=`search`

        $search.type=`search`;
        $search.classList="input searchs";
        // $search.setAttribute=("data-dark-element","");
        $search.name="search_country";
        $search.id="search_country";
        $search.placeholder="Search for a country...";

        $figure.appendChild($img)

        $div.appendChild($figure)
        $div.appendChild($search)

        return $div;
}