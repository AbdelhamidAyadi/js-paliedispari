let word = prompt("Inserisci una parola");

function reverseString(word) {

    var splitString = word.split("");

    var reverseArray = splitString.reverse();

    var joinArray = reverseArray.join("");

    return joinArray;
}


if (reverseString(word) == word) {
    alert("La parola è Palindroma");

} else if (reverseString(word) != word) {
    alert("La parola non è Palindroma");
}