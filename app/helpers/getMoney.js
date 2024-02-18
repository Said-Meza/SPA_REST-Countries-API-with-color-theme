export default function getMoney(props){

    let cadena="";
    
    for (const clave in props) {
        if (props.hasOwnProperty(clave)) {
                cadena = clave
        }
    }

    // console.log(props[`${cadena}`].name)


    return `${props[`${cadena}`].name}`

}