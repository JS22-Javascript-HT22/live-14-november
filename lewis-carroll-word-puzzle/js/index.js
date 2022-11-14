/**
 * 1. Slumpar ett start och slutord
 * 2. Visa start-och slutord för användaren
 * 3. Koppla en eventlistener till en knapp och när användaren klickar på knappen
 * hämta värde från inputfält och spara i en variabel
 * 4. Kolla att användaren enbart bytt ut en bokstav
 * 5. Kolla mot dictionary API att det är ett engelskt ord
 * 6. Visa det ändrade ordet i gränssnittet för användaren
 * 7. Om senaste ordet ej var slutordet starta om från steg 3
 *    Annars visa att användaren vann
 */

const words = [{ start: 'EYE', end: 'LID' }, { start: 'FOUR', end: 'FIVE' }];
let selectedWord = {};

const startWordElem = document.querySelector('#start-word');
const endWordElem = document.querySelector('#end-word');
const inputElem = document.querySelector('#word-input');
const buttonElem = document.querySelector('#change-word');

function startGame() {
    const index = Math.floor(Math.random() * words.length); // Slumpar ett tal mellan 0 och längden på arrayen words
    selectedWord = words[index];

    startWordElem.innerText = selectedWord.start;
    endWordElem.innerText = selectedWord.end;
}

buttonElem.addEventListener('click', () => {
    console.log(inputElem.value);
    const changedWord = inputElem.value; // Hämtar värde från inputfältet
    let changedLetters = 0;

    // En variant på nedanstående lösning
    // console.log(changedWord);
    // for(const index in changedWord) {
    //     console.log('----');
    //     console.log(index);
    //     console.log(changedWord[index]);
    //     console.log('----');
    //     if (changedWord[index] !== selectedWord.start[index]) {
    //         changedLetters++; // Öka med 1
    //     }
    // }

    const lettersChangedWord = changedWord.split(''); // Splitta ordet till en array med varje bokstav i var sin position
    const lettersStartWord = selectedWord.start.split(''); // Splitta startordet till en array med varje bokstav i var sin position
    for (let index = 0; index < lettersChangedWord.length; index++) {
        console.log(`Index: ${index}`);
        console.log(lettersChangedWord[index]);
        console.log('-----');
        console.log(lettersStartWord[index]);
        if (lettersChangedWord[index] !== lettersStartWord[index]) { // Kolla om varje bokstav är olik eller är samma
            changedLetters++; // Öka med 1
        }
    }

    console.log(`Antalet bokstäver bytna: ${changedLetters}`);
    if (changedLetters === 1) {
        // Om användaren enbart byt en bokstav, fortsätt spelet
    } else {
        // Användaren bytte mer än en bokstav, säg till användaren att göra om och rätt
    }
});

startGame();