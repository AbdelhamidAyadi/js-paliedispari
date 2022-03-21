pariDispari = prompt("Scegli: pari o dispari. ");
number = Number(prompt("Inserisci un numero da 1 a 5."));

function randomNumber(x) {
    let random = Math.floor((Math.random()*x)+1);
    return random;
}

let randomComputer = randomNumber(5);
if (number>5) {
    alert("Il numero è maggiore di 5!");
}else if (number <= 5) {
    result = number + randomComputer;
    console.log(result);
    if ( result % 2 == 0 && pariDispari == "pari" ) {
        alert("Hai vinto!")
    }else if ( result % 2 != 0 && pariDispari == "pari" ) {
        alert("Hai perso!")
    }else if ( result % 2 == 0 && pariDispari == "dispari" ) {
        alert("Hai perso!")
    }else if ( result % 2 != 0 && pariDispari == "dispari" ) {
        alert("Hai vinto!")
    }
}