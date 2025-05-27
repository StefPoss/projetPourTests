// L’objectif de cet exercice est de créer un tableau comprenant tous les nombres entiers compris entre les valeurs stockées dans les variables min et max.

// Exercices
// Complétez la fonction rangeTable afin que celle-ci renvoie la liste ordonnée des nombres compris entre les valeurs min et max fournies en argument.

function getRangeTable(minVal, maxVal) {
    const list = [];
    
    // Insert your code here
    // On récupère la valeur min
    // on lui ajoute +1 tant qu'on n'a pas atteint la valeur max
    // A chaque boucle on ajoute la valeur calculée au tableau list
    let i = minVal;
    let j = maxVal;
    let newVal = 0;
    list.push(i)
    do {
        i = i + 1;
        console.log(i);
        list.push(i)
      } while (i < j);
    
    return list
};

console.log(getRangeTable(-5, 5));
// Expected: [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]