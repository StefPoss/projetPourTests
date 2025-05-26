// On te donne une liste de noms de participants dans un tableau, certains doublés, certains avec des majuscules différentes ou des espaces en trop.

// const rawParticipants = [
//   " Alice ", "bob", "Alice", "BOB", "Charlie", " alice", "charlie ", "Bob "
// ]
// 🎯 Objectifs :
// Écrire une fonction cleanNames() qui :
// - Nettoie les espaces au début et à la fin de chaque nom,
// - Met tous les noms en minuscules,
// - Supprime les doublons,
// - Renvoie la liste propre triée par ordre alphabétique.

// Afficher :
// - Le tableau propre obtenu,
// - Le nombre de participants uniques.
// 📝 Exemple attendu :
// ["alice", "bob", "charlie"]
// 3
// ⌛ Difficulté :
// Facile à intermédiaire. Bonne occasion de tester :
// .map()
// .trim()
// .toLowerCase()
// Set
// .sort()

function cleanNames(arr) {
  // On init un tableau vide pour stocker les résultats
  const cleanedArr = []

  // On supprime les espaces avant après chaque élément du tableau
  let trimArr = arr.map((e) => e.trim())

  // On boucle sur trimArr pour passer chaque élément avec
  // 1ettre majuscule les autres en minuscule
  for (let i = 0; i < trimArr.length; i++) {
    const formatted =
      trimArr[i].charAt(0).toUpperCase() + trimArr[i].slice(1).toLowerCase()
    // On pushe dans le tableau formatted
    cleanedArr.push(formatted)
  }
  // On supprime les doublons avec un Set et on trie le tableau
  return [[...new Set(cleanedArr)].sort(), [...new Set(cleanedArr)].length]
}

function cleanNamesFactorized(arr) {
  // On mappe sur arr et on supprime les espaces + on passe tout en lower case
  const cleanedArr = arr.map((e) => e.trim().toLowerCase())

  // On supprime les doublons avec un Set et on trie le tableau
  const uniqueSorted = [...new Set(cleanedArr)].sort()

  // On retourne le tableau nettoyé trié et on indique sa longueur
  return [uniqueSorted, uniqueSorted.length]
}

const rawParticipants = [
  " Alice ",
  "bob",
  "Alice",
  "BOB",
  "Charlie",
  " alice",
  "charlie ",
  "Bob ",
]
console.log(cleanNames(rawParticipants))
console.log(cleanNamesFactorized(rawParticipants))
