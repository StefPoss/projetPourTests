let a = ["rouge", "bleu", "vert"]
console.log(a[1])

// /**
//  * @param {number[]} numbers Une liste de nombre entiers
//  * @return {number[]} La liste inversée, avec uniquement les nombres pairs
//  */
// const arr = [4, 2, 28, 19, 44, 32, 18, 26, 2, 13]
// function spell(numbers) {
//   // Write your code here
//   // To debug: console.error('Debug messages...');

//   // on reverse le tableau
//   revArr = numbers.reverse()

//   console.log(revArr)

//   // On filtre uniquement sur les nombres pairs
//   let evenNumbers = numbers.filter(function (number) {
//     return number % 2 === 0
//   })

//   console.log(evenNumbers)
//   // on retourne les nombre pairs
//   return evenNumbers

// }

// spell(arr)

// const arr = [4, 2, 28, 19, 44, 32, 18, 26, 2, 13]
// function largest(arr) {
//     let max = arr[0];

//     // compare chaque element avec le max courant
//         for (let i = 1; i < arr.length; i++)
//         if (arr[i] > max)
//             max = arr[i];

//     return max;
// }

// largest(arr)

/**
 * @param {number} nbPersons Nombre de personnes pour qui préparer la recette. Entier strictement positif.
 * @param {string[]} ingredients Liste d'ingrédients. Ils commencent tous par un nombre entier strictement positif.
 * @return {string[]} Liste d'ingrédients, avec les quantités multipliées par le nombre de personnes.
 */
const nb = 2
const liste = [
  "2 oeufs",
  "200 grammes de farine",
  "150 grammes de sucre",
  "1 litre de lait",
]
function adjustQuantities(nbPersons, ingredients) {
  // Write your code here
  // To debug: console.error('Debug messages...');

  
  // Initialiser le tablau de sortie
  let result = []

  // On boucle sur le tableau d'ingredients
  for (let ligne of ingredients) {
    // On sépare les quantité des ingrédients
    let parties = ligne.split(" ")
    let quantite = parseInt(parties[0])
    let ingredient = parties.slice(1).join(" ")
    // on réassemble tout en multipliant quatité par le nbPersons
    result.push((quantite * nbPersons) + " " + ingredient)
   

  }
  console.log(result)
  return result
  

}

adjustQuantities(nb, liste)
