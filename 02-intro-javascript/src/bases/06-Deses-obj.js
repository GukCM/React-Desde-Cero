//Desestructuración de objetos - Asignación desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
}

const { nombre, edad, clave } = persona; //Estoy creando una constante nombre, edad,clave 
//con la asignacion del objeto persona.nombre, persona.edad y persona.clave
// const { nombre:nombre2 } = persona; //Estoy creando una constante nombre2, con la asignacion del objeto persona.nombre



// console.log(nombre);
// console.log(persona.edad);
// console.log(persona.clave);

// const retornaPersona = (usuario)=>{
//     const {edad,nombre,clave} = usuario;
//     console.log(edad,nombre,clave);
// }

//Desestructuracion desde el parametro recibido
// const retornaPersona = ({ nombre, edad, rango = 'Capitan' }) => {
//     console.log(nombre, edad, rango);
// }

const retornaPersona = ({ clave, nombre, edad, rango = 'Capitan' }) => {

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 142423,
            lng: -12.2323
        },
    }

}

//Extrae objetos anindados "latlng:{lat,lng}"
const { nombreClave, anios, latlng: { lat, lng } } = retornaPersona(persona);
console.log(nombreClave, anios, lat, lng);
