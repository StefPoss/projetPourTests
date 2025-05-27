// Un palindrome est un texte ou un mot dont l'ordre des lettres reste le même, qu'on le lise de gauche à droite ou de droite à gauche.
// Le but de ce challenge est de trouver parmi les différents mots d’un tableau ceux qui ne sont pas des palindromes.
// La liste de mots reçue en paramètre et la liste finale des palindromes seront en majuscule.
// Exercices
// Complétez la fonction getPalindromes pour qu’elle retourne une liste des palindromes issue du tableau de chaine de caractères "words" reçu en paramètre.
// La liste des palindromes renvoyée devra être triée par ordre alphabétique.

function getPalindromes(words) {
    let palindromes = [];
    
    // Insert your code here
        for (let i = 0; i < words.length; i++){
            if (words[i] === words[i].split('').reverse().join('')){
                palindromes.push(words[i]);
            }
            palindromes = palindromes.sort();
        }

        return palindromes;
}
const examplePalindromes = ['HELLO', 'KAYAK', 'ANNA', 'TOTO', 'JAVASCRIPT','LOL', "MODEM"];
console.log(getPalindromes(examplePalindromes));
// Expected: ['ANNA', 'KAYAK', LOL']