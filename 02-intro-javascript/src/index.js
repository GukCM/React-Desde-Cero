//Async 


const getImage = async()=>{
    const apiKey = '6Zai8qml4Zs5nEttdXgzzwSGDLQ6DDxW';
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const {data} = await resp.json();
    const {url} = data.images.original;
    console.log(url);
}

getImage()




// peticion
//     .then(resp => resp.json())
//     .then(({data}) => {
//         const {url} = data.images.original;
//         //Crea el elemento img en el html
//         const img = document.createElement('img');
//         //El elemento img, tendrá un src igual a la url que estamos mandando llamar
//         img.src = url;
//         //Implementa en el body el img
//         document.body.append(img);


//     })
//     .catch(console.warn);


