const apiKey = '6Zai8qml4Zs5nEttdXgzzwSGDLQ6DDxW';


const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// peticion.then(resp=>{
//     resp.json().then(data=>{
//         console.log(data);
//     })
// })
// .catch(console.warn);


//Promesa en cadena
peticion
    .then(resp => resp.json())
    .then(({data}) => {
        const {url} = data.images.original;
        //Crea el elemento img en el html
        const img = document.createElement('img');
        //El elemento img, tendrá un src igual a la url que estamos mandando llamar
        img.src = url;
        //Implementa en el body el img
        document.body.append(img);


    })
    .catch(console.warn);


