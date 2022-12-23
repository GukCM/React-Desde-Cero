    //Funciones asincronas son basicamente un objeto, entonces podría dar errores, no usarlas.
    //Al poner la constante aquí, React no reprosesará la declaración de esta constante.
    //Objetos no son validos como un hijo en React
    // const newMessage = {
    //     message: 'Hola gente',
    //     title: 'Gustavo',
    // };
//     const getResult = () => 4 + 4;
// export function MyName() {


//     return (
//         //Sinonimo de un fragmento, evita crear divs innecesarios, tenemos que regresar siempre un nodo padre
//         <>
//             <h1>{ getResult() }</h1>
//             {/* <code> { JSON.stringify( newMessage) } </code> */}
//             <p>Soy un subtitulo</p>
//         </>
//     )
// }
export const MyName = ({title, subTitle}) =>{
    console.log(title);
    return(
        <>
        <h1>{ title }</h1>
        <h2>{ subTitle + 1 }</h2>
        <p>Soy un subtitulo</p>
        </>
    )
};



// import { useState } from "react"
// export const MyName = () =>{
//     const [count] = useState(0);
//     return <button onClick={alert("Click me")}>{count}</button>
// }