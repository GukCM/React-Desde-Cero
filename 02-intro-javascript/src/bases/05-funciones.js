//Funcion normal
const saludar = function (nombre) {
    return `Hola, ${nombre}`;
}
console.log(saludar("Juanito"));
//Funcion normal pero con flecha
const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}
console.log(saludar2("Camelo"));
//Funcion flecha simplificada solo cuando el return está implicito y regresa 1 cosa
const saludar3 = (nombre) => `Hola, ${nombre}`;
console.log(saludar3('YeahBuddy'));
//Funcion flecha que no recibe ningún dato, solo imprime
const saludar4 = () => 'Hola mundo';
console.log(saludar4());


const getUser = () =>
({
    uid: 'ABC123',
    username: 'juanito_123',
})//Poner parentesis para decirle a js que devolveremos un objeto implicito, no el cuerpo de la funcion
console.log(getUser());

const getUsuarioActivo = (nombre) =>
({
    uid: 'ABC567',
    username: nombre,
})
const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);