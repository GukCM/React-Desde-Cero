const nombre = "Gus";

const apellido = "Ceballos";

// const nombreCompleto = nombre + " " + apellido;
// Respeta saltos de linea dando enter
const nombreCompleto = `
${nombre}
${apellido}
${ 1 + 1} 
`;

console.log(nombreCompleto);

function getSaludo(nombre){
    return 'Hola' + nombre;
}
console.log(`Este es un texto: ${getSaludo( nombre )}`);