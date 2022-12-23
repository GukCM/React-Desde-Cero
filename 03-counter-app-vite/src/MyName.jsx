

export function MyName() {
    return (
        //Sinonimo de un fragmento, evita crear divs innecesarios, tenemos que regresar siempre un nodo padre
        <>
            <h1>Soy Gustavo!</h1>
            <p>Soy un subtitulo</p>
        </>
    )
}

// import { useState } from "react"
// export const MyName = () =>{
//     const [count] = useState(0);
//     return <button onClick={alert("Click me")}>{count}</button>
// }