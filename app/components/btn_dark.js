export function btn_darkmode(){

    const $btn = document.createElement("a"),
         $figure = document.createElement("figure"),
         $img = document.createElement("img"),
         $h5 = document.createElement("h5");
        
        $btn.classList="nav__darkmode";
        $btn.href="#";

        $figure.classList="nav__icon";

        $img.classList="nav__img";
        $img.src=`/app/assets/luna.png`;
        $img.alt="icon__darkmode"

        $h5.classList="nav__darktext";
        $h5.textContent="Dark Mode";

        $figure.appendChild($img)
        $btn.appendChild($figure)
        $btn.appendChild($h5)
        
        
        return $btn;
}