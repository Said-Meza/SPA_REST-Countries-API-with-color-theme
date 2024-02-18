export default function getLenguages(props){

    // console.log(props)
    let lengua=[],
        idiomas="";

    for (const clave in props) {
        if (props.hasOwnProperty(clave)) {
                lengua.push(clave) 
        }
    }

    for (let i = 0; i < lengua.length; i++) {
        idiomas += " " +props[`${lengua[i]}`] ;
    }

    // console.log(idiomas)

    return `${idiomas}`

}