const phrase = document.querySelector("#phrase");
const btnSend = document.querySelector("#btn");
const displayPhrase = document.getElementById("phrase-typed");
const displayQtdTowels = document.getElementById("qtd-vowels");

btnSend.addEventListener("click", () => {
    const arrVogal = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
    const phraseTyped = phrase.value;
    const arrPhrase = Array.from(phraseTyped);
    let qtdVogal = 0;

    console.log(phraseTyped);
    displayPhrase.textContent = `${phraseTyped}`;
    console.log(arrPhrase);

    arrPhrase.forEach(e => {
        console.log(e);
        if(arrVogal.includes(e)){
            qtdVogal += 1;
        }
    });

    console.log(qtdVogal);
    displayQtdTowels.textContent = `Quantidade de vogais na frase: ${qtdVogal}`;
});