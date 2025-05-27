// Le challenge Mini Uno se compose de plusieurs étapes, la première est de coder le mécanisme d’un tour de jeu d’Uno avec des cartes prédéfinies.
// L’objectif de cette première étape est de simuler un tour de jeu vous permettant de poser votre première carte.
// Le tableau "cards" correspond aux cartes que vous avez dans les mains au moment où la partie démarre et " lastPlay" est la dernière carte retournée sur la pile qui vous indique de quelle couleur ou de quel chiffre devra être la carte suivante.
// Il est possible de jouer une carte seulement si elle possède le même chiffre ou la même couleur que la carte précédemment jouée (lastPlay).
// Si vous pouvez jouer, vous devez toujours poser la première carte de votre jeu (cards) compatible avec la dernière carte posée.
// Exercices
// Après avoir lu toutes les règles, complétez la fonction getFirstCardToPlay pour simuler un tour de jeu vous permettant de poser votre première carte.
// La fonction renverra la première carte qu’il est possible de jouer selon les paramètres reçus.

function getFirstCardToPlay(cards, lastPlay) {
    // Insert your code here

    for (let item of cards) {
        if (item.color === lastPlay.color || item.number === lastPlay.number){
            return item;
          }
    }
    return lastPlay;
}

const cardsExample = [
    { color: 'green', number: 6 },
    { color: 'red', number: 6 },
    { color: 'red', number: 9 },
    { color: 'green', number: 9 },
    { color: 'yellow', number: 9 },
];
const lastPlayExample2 = { color: 'yellow', number: 9 };
const lastPlayExample = { color: 'blue', number: 6 };

console.log(JSON.stringify(getFirstCardToPlay(cardsExample, lastPlayExample2)));
console.log(JSON.stringify(getFirstCardToPlay(cardsExample, lastPlayExample)));