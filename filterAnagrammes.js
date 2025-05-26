// Une anagramme est une permutation des lettres formant un nouveau mot qui a un nouveau sens.
// Par exemple, pour le mot "AGE" : AEG, AGE, EAG, EGA, GAE, GEA.
// Exercices
// La fonction filterAnagrams reçoit en argument un mot et un tableau. Filtrez le tableau pour trouver les anagrams du mot.
// La liste des anagrammes renvoyée devra être triée par ordre alphabétique, sans aucun doublon.

function filterAnagrams(word, array) {
    const anagrams = [];
    let motRef = word;

    
    // Insert your code here
    for (let i = 0; i < array.length; i++){
        // On récupère la longueur des 2 strings
        let long1 = array[i].length;
        let long2 = motRef.length;
        let motListe = array[i]
        
        console.log(array[i]);
        console.log("mot: " + motRef);
        console.log(long1 + " " + long2);
        // Si la longueur des 2 strings n'est pas la même on sort ce n'est pas un annagramme
        if (long1 != long2){
            console.log(long1 + " " + long2);
            return false; } else {

            // Sinon on continue et on ordonne les 2 chaines pour les comparers
            console.log("annagramme : " + array[i]);
             console.log("mot: " + motRef);
            // On ordonne les 2 chaines

            array[i] = array[i].split('').sort().join('')
            
            console.log("annagramme : " + array[i]);
            console.log("motRef : " + motRef);
        
            motRef = motRef.split('').sort().join('')
        
            console.log("annagramme : " + array[i]);
            console.log("motRef : " + motRef);

            // On compare les chaînes ordonnées
            if (motRef === array[i])
        
            // Si les chaines sont identiques on pushe les données dans le tableau
            anagrams.push(motListe)
            console.log("annagramme : " + motListe);
        
    }

}
    return anagrams.sort();
}

console.log(filterAnagrams("LEAST", ["STEAL", "STALE", "LANCE", "CRASH", "SLATE", "ROAST", "TESLA"]));

// Expected: ["SLATE","STALE","STEAL","TESLA"]