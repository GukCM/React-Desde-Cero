const persona ={
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion:{
        calle: "enrique segoviano",
        numero: 1152,
        cp: 28017,
    }
};
console.log( {persona} );

// const persona2 = persona; Nunca hacer esta asignación

const persona2 = { ...persona };
console.log({persona2});