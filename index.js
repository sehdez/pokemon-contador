const img    = document.querySelector('img')
const mas    = document.querySelector('#mas')
const menos  = document.querySelector('#menos')
const nombre = document.querySelector('h1')
const txt    = document.querySelector('input')
const buscar = document.querySelector('#buscar');
// const butoon


fetch('https://pokeapi.co/api/v2/pokemon/1').then( data => data.json())
    .then(data => {
        img.src = data.sprites.other.dream_world.front_default;
        nombre.innerText = data.name;
        console.log(contador)

    })


contador = 1;

mas.addEventListener('click', ()=>{
    contador ++;
    fetch(`https://pokeapi.co/api/v2/pokemon/${contador}`).then( data => data.json())
    .then(data => {
        console.log(contador)
        img.src = data.sprites.other.dream_world.front_default;
        nombre.innerText = data.name;
    })
})

menos.addEventListener('click', ()=>{
    if(contador === 1){
        return
    }
    contador --;
    fetch(`https://pokeapi.co/api/v2/pokemon/${contador}`).then( data => data.json())
    .then(data => {
        console.log(contador)
        img.src = data.sprites.other.dream_world.front_default;
        nombre.innerText = data.name;
    })
})

buscar.addEventListener('click', ()=>{
    const pokemon = txt.value
    if (pokemon > 0){
        contador = pokemon;
        console.log(contador)
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then( data => data.json())
        .then(data => {
            img.src = data.sprites.other.dream_world.front_default;
            nombre.innerText = data.name;
        })
    }
})