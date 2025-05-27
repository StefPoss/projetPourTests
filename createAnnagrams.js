// Montons en puissance ! Maintenant que vous savez retrouver des anagrammes grâce à un algo, la prochaine étape est de pouvoir générer les anagrammes d’un mot grâce à un algorithme récursif.
// Exercices
// Complétez la fonction anagramMe afin qu’elle retourne la liste des anagrammes issue de la chaîne de caractères word reçue en paramètre.
// La liste des anagrammes renvoyée devra être triée par ordre alphabétique, sans aucun doublon.

function anagramMe(word) {
    // On crée un tableau pour stocker toutes les anagrammes
    const anagramList = [];
        // Insert your code here
        // si word ne fait qu'un caractère ou moins
        // on le renvoie tel quel dans un tableau
        if (word.length <=1){
            return [word];
        } else if (word.length > 5){
            return "Cet outil ne gère pas les anagrammes de plus de 5 lettres";
        }
    
        // Sinon, on passe à la génération des anagrammes
        
        console.log(word);

        // On splitte word en un tableau de lettres
        const wordSplit = word.split('');
    
        console.log(wordSplit);
    
        // Pour chaque caractère de la chaîne
        for (let i = 0; i < wordSplit.length; i++){
            // On isole un caractère à la position i
            const char = wordSplit[i];
            console.log(char);

            // On enlève le caractère courant du tableau
            const charsRestants = wordSplit.slice(0, i).concat(wordSplit.slice(i + 1));
            console.log(charsRestants)
            
            // On génère les anagrammes des caractères restants
            const anagramRestant = anagramMe(charsRestants.join(''));
            console.log(charsRestants)
                        
            // On recompose les mots en ajoutant le caractère courant à chaque anagramme générée
            for (let anagram of anagramRestant) {
                anagramList.push(wordSplit[i] + anagram);
            }
            console.log(char);
        }   
    // return anagramList;

    // On supprime les doublons avec un Set et on trie le tableau
    return [...new Set(anagramList)].sort();    
}

console.log(anagramMe('AG'));
// Expected: ['AG', 'GA']
 console.log(anagramMe('AGE'));
// Expected: ['AEG', 'AGE', 'EAG', 'EGA', 'GAE', 'GEA']
console.log(anagramMe('AGEZ'));
// Expected ['AGEZ', 'AGZE', 'AEGZ', 'AEZG', 'AZGE', 'AZEG', 'GAEZ', 'GAZE', 'GEAZ', 'GEZA', 'GZAE', 'GZEA', 'EAGZ', 'EAZG', 'EGAZ', 'EGZA', 'EZAG', 'EZGA', 'ZAGE', 'ZAEG', 'ZGAE', 'ZGEA', 'ZEAG', 'ZEGA']
console.log(anagramMe('AGEZY'));
// Expected...
console.log(anagramMe('AGEZYZ'));
// Expected : "Cet outil ne gère pas les anagrammes de plus de 5 lettres"
