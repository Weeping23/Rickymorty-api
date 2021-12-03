// DECLARO API COMO STRING DENTRO DE UNA CONSTANTE
const API = 'https://rickandmortyapi.com/api/character/'

// SELECCIONO MI CONTENEDOR A MODIFICAR
let cargarinfo = document.querySelector(".main")

// DECLARO VALOR CHARACTER NUMBER (MAIN)
let characterNumber = 1;

//CREO FUNCIÓN PARA LLAMAR A LA API
function loadInfo() {
    fetch(API + characterNumber)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            cargarinfo.innerHTML = `
        <div class="main-info">
    <h1 id="main-info-name">${data.name}</h1>
    <div class="main-info-stats">Género:
        <h3 id="">${data.gender}</h3>
    </div>
    <div class="main-info-stats">Especie:
        <h3 id="">${data.species}</h3>
    </div>
    <div class="main-info-stats">Status:
        <h3 id="">${data.status}</h3>
    </div>
</div>
<div class="main-characterimg">
    <img src="${data.image}" alt="">`
    console.log(data.status);
        })
}
loadInfo()

//DECLARO VARIABLE 
let arrowNext = document.getElementById('arrow')
//CREO EL EVENTO DE MAIN SIGUIENTE Y COJO LA FUNCIÓN ABAJO EXPRESADA
arrowNext.addEventListener('click', next)
// CREO FUNCIÓN PARA SUMAR 1 A VALOR DE CHARACTERNUMBER (MAIN)
function next() {
    characterNumber++
    // CONDICIONA SI ES MAYOR QUE 826 DEVUELVA A 1
    if (characterNumber > 826) {
        characterNumber = 1
    }
    loadInfo()
}
// DECLARO VARIABLE
let arrowBack = document.getElementById('back')
// CREO EVENTO DE MAIN ANTERIOR
arrowBack.addEventListener('click', back)
function back() {
    characterNumber--
    // CONDICIONA SI ES MENOR QUE 1 DEVUELVA A 826
    if (characterNumber < 1) {
        characterNumber = 826
    }
    loadInfo()
}

