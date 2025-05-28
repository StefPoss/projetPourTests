// Le tableau arrays contient des sous-tableaux contenant eux-mêmes des éléments de différentes natures (booléens, nombres, chaîne de caractères…).

// Exercices
// Pour chaque tableau, vérifiez si les éléments présents sont identiques ou différents.

// Si tous les éléments d’un sous-tableau sont identiques, ajoutez la valeur true dans le tableau result. Dans le cas contraire, ajoutez false.

// Le résultat devra être retourné par la fonction checkDifferences.

function checkDifferences(arrays) {
  let result = [];
  // console.log(arrays)
  for (let sousTableau of arrays) {
    let tousEgaux = sousTableau.every((element) => element === sousTableau[0]);
    // console.log(allEqual)
    result.push(tousEgaux);
  }
  return result;
}

console.log(
  checkDifferences([
    [true, true, true, true],
    ["test", "test", "test"],
    [1, 1, 1, 2],
    ["10", 10, 10, 10],
  ])
);
// Expected: true, true, false, false
