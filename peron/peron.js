let koncowa;
let posrednie;
let godzina;
let inne;
let peron;
let tor;
let numer

function odczytaj() {
    let koncowaI = document.querySelector('#koncowaI');
    koncowa = koncowaI.value;
    let posrednieI = document.querySelector('#posrednieI');
    posrednie = posrednieI.value;
    let godzinaI = document.querySelector('#godzinaI');
    godzina = godzinaI.value;
    let inneI = document.querySelector('#inneI');
    inne = inneI.value;
    let peronI = document.querySelector('#peronI');
    peron = peronI.value;
    let torI = document.querySelector('#torI');
    tor = torI.value;
    let numerI = document.querySelector('#numerI');
    numer = numerI.value;
}

function aktualizuj() {
    odczytaj();

    let koncowaO = document.querySelector('#koncowaO');
    koncowaO.textContent = koncowa;
    let posrednieO = document.querySelector('#posrednieO');
    posrednieO.textContent = posrednie;
    let godzinaO = document.querySelector('#godzinaO');
    godzinaO.textContent = godzina;
    let inneO = document.querySelector('#inneO');
    inneO.textContent = inne;
    let peronO = document.querySelector('#peronO');
    peronO.textContent = peron;
    let torO = document.querySelector('#torO');
    torO.textContent = tor;
    let numerO = document.querySelector('#numerO');
    numerO.textContent = numer;
}

function wyczysc() {
    let koncowaI = document.querySelector('#koncowaI');
    koncowaI.value = '';
    let posrednieI = document.querySelector('#posrednieI');
    posrednieI.value = '';
    let godzinaI = document.querySelector('#godzinaI');
    godzinaI.value = '';
    let inneI = document.querySelector('#inneI');
    inneI.value = '';
    let peronI = document.querySelector('#peronI');
    peronI.value = '';
    let torI = document.querySelector('#torI');
    torI.value = '';
    let numerI = document.querySelector('#numerI');
    numerI.value = '';
}

let aktualizujP = document.querySelector('#aktualizujP');
aktualizujP.onclick = () => aktualizuj();

let wyczyscP = document.querySelector('#wyczyscP');
wyczyscP.onclick = () => wyczysc();