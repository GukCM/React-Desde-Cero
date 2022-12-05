//Desestructuracion de Arreglos / Asignacion desestructurante de arreglos

const personajes = ['Goku','Vegeta','Trunks'];
//declarar una constante con llaves cuadradas quiere decir que haré una desestructuracion de un arreglo
//La coma indica que el primer elemento y el segundo será obviado y pasará a la siguiente posicion
const [ , ,p3] = personajes;
console.log(p3);

const retornaArreglo = ()=>{
    return ['ABC',123];
}

const [letras,numeros]= retornaArreglo();
console.log(letras,numeros);

const Stat = ( valor ) =>{
    return [valor,()=>{console.log("Hola mundo")}];
}
//Desestructura el nombre (valor) que le estamos dando que es "Goku" y la funcion hola mundo en setNombre
const [nombre, setNombre] = Stat('Goku');
console.log(nombre);
setNombre();