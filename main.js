// Palidroma
// Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

// prompt per chiedere la parola all'utente

var parola = prompt('dimmi un parola')

var parola2 = checkPalindrom(parola);
// console.log(checkPalindrom(parola));

if (parola == checkPalindrom(parola)) {
  console.log('La parola è palindroma');
} else {
  console.log('La parola non è palindroma');
}

// funzione per definire se la parola è palindroma
function checkPalindrom (parola) {
  return parola.split('').reverse().join('');
}









// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
