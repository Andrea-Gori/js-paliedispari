// Palidroma
// Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

// prompt per chiedere la parola all'utente

// var parola = prompt('dimmi un parola')
//
// var parola2 = checkPalindrom(parola);
// // console.log(checkPalindrom(parola));
//
// if (parola == parola2) {
//   console.log('La parola è palindroma');
// } else {
//   console.log('La parola non è palindroma');
// }
//
// // funzione per definire se la parola è palindroma
// function checkPalindrom (parola) {
//   return parola.split('').reverse().join('');
// }

// Pari e Dispari


// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
var scelta = prompt('scegli pari o dispari');
console.log(scelta);

var numeroUtente = parseInt(prompt('scegli un numero da 1 a 5'));
console.log(numeroUtente);

var numRandom = numeroRandom(1, 5);
console.log(numRandom);

var sommaPoD = sommaPoD(numeroUtente, numRandom);


if (sommaPoD == 0) {
  console.log('La somma è pari');
} else {
  console.log('La somma è dispari');
}

// Dichiariamo chi ha vinto.
if (scelta == 'pari' && sommaPoD == 0 || scelta == 'dispari' && sommaPoD == 1){
  console.log('Hai vinto');
} else {
  console.log('CPU vince');
}


// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function numeroRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function sommaPoD(numeroUtente, numRandom) {
  return (numeroUtente + numRandom)%2;
}
