let koncowa;
let poczatkowa
let posrednie;
let numer;
let nazwa;

function odczytaj() {
    let koncowaI = document.querySelector('#koncowaI');
    koncowa = koncowaI.value;
    let poczatkowaI = document.querySelector('#poczatkowaI');
    poczatkowa = poczatkowaI.value;
    let posrednieI = document.querySelector('#posrednieI');
    posrednie = posrednieI.value;
    let numerI = document.querySelector('#numerI');
    numer = numerI.value;
    let nazwaI = document.querySelector('#nazwaI');
    nazwa = nazwaI.value;
}

function aktualizuj() {
    odczytaj();

    let koncowaO = document.querySelector('#koncowaO');
    koncowaO.textContent = koncowa;
    let poczatkowaO = document.querySelector('#poczatkowaO');
    poczatkowaO.textContent = poczatkowa;
    let posrednieO = document.querySelector('#posrednieO');
    posrednieO.textContent = posrednie;
    let numerO = document.querySelector('#numerO');
    numerO.textContent = numer;
    let nazwaO = document.querySelector('#nazwaO');
    nazwaO.textContent = nazwa.toUpperCase();
}

function wyczysc() {
    let koncowaI = document.querySelector('#koncowaI');
    koncowaI.value = '';
    let poczatkowaI = document.querySelector('#poczatkowaI');
    poczatkowaI.value = '';
    let posrednieI = document.querySelector('#posrednieI');
    posrednieI.value = '';
    let numerI = document.querySelector('#numerI');
    numerI.value = '';
    let nazwaI = document.querySelector('#nazwaI');
    nazwaI.value = '';
}

let aktualizujP = document.querySelector('#aktualizujP');
aktualizujP.onclick = () => aktualizuj();

let wyczyscP = document.querySelector('#wyczyscP');
wyczyscP.onclick = () => wyczysc();