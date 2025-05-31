// La fonction findUser sert à vérifier la présence d’un utilisateur au sein de la liste usersList.
// Exercices
// En vous servant de la méthode find() complétez la fonction findUser. Elle renverra un booléen indiquant la présence, ou non, de l’utilisateur recherché dans la usersList.

function findUser(request, list) {
  let userFound = false

  // Insert your code here
  // On boucle sur chaque valeur du tableau
  for (let item of list) {
    // On parse chaque valeur du tableau grâce à findUser() pour comparer avec la request
    list.find((item) => (item = request))
    console.log(item)
    // si la valeur est égale à la request on retourne true
    if (item === request) return true
  }
  // on renvoie le résultat de la recherche true/false
  return userFound
}

const search = "Lucas"
const usersList = [
  "Lucas",
  "Juliette",
  "William",
  "Camille",
  "Pauline",
  "Sébastien",
]

console.log(findUser(search, usersList))
// Expected: true

const liste = ["the", "dog", "is", "hungry", "then", "I", "feed", "him"]
const lettres = "he"

function filterWords(words, letters) {
  // On initialise un tableau vide pour stocker les mots correspondants
  let result = []

  // On initialise une variable booléenne à false : passera à true si au moins un mot correspond
  let found = false

  // On parcourt chaque mot du tableau 'words'
  for (let word of words) {
    // Pour chaque lettre de la chaîne 'letters'
    for (let char of letters) {
      // Si le mot contient la lettre actuelle
      if (word.includes(char)) {
        // On ajoute ce mot au tableau des résultats
        result.push(word)

        // On note qu'on a trouvé au moins un mot qui correspond
        found = true

        // On sort de la boucle interne dès qu'une lettre correspond (pas besoin de vérifier les autres)
        break
      }
    }
  }

  // On retourne un tableau contenant :
  // - un booléen (true/false) selon si on a trouvé au moins un mot correspondant
  // - le tableau des mots trouvés
  return [found, result]
}

const [found, mots] = filterWords(liste, lettres)

console.log(found) // true
console.log(mots) // ["the", "hungry", "then", "feed", "him"]

// LA MEME MAIS AVEC FILTER
function filterWords2(words, letters) {
  // On utilise .filter pour ne garder que les mots contenant au moins une lettre de 'letters'
  const result = words.filter((word) =>
    // .some vérifie si AU MOINS une lettre est incluse dans le mot
    [...letters].some((char) => word.includes(char))
  )

  // On renvoie true si le tableau résultant n'est pas vide, plus le tableau filtré
  return [result.length > 0, result]
}

const [found2, mots2] = filterWords2(liste, lettres)

console.log(found2) // true
console.log(mots2) // ["the", "hungry", "then", "feed", "him"]
