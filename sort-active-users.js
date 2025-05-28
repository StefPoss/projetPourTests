// 🧪 Exercice : Classement des utilisateurs actifs
// 💬 Énoncé :
// On te donne un tableau d’objets représentant des utilisateurs d’un site :

const users = [
  { username: "Alice", age: 34, active: true },
  { username: "Bob", age: 28, active: false },
  { username: "Charlie", age: 30, active: true },
  { username: "Dora", age: 22, active: true },
  { username: "Eve", age: 41, active: false },
  { username: "Fred", age: 35, active: true },
]

function getActiveUsersSorted(arr) {
  let filteredList = arr.filter((users) => users.active === true)
  let sortedList = filteredList.sort((a, b) => a.age - b.age)
  let nameList = sortedList.map((user) => user.username)

  // let finalList = [];
  //   console.log(users)
  //   console.log(filteredList)
  //   console.log(sortedList)

  // finalList = sortedList;

  return nameList
}

console.log(getActiveUsersSorted(users))

// 🎯 Objectif :
// Écrire une fonction getActiveUsersSorted() qui :
// Filtre uniquement les utilisateurs actifs (active: true)
// Trie ces utilisateurs par âge croissant
// Renvoie un tableau des noms d’utilisateur (username) dans cet ordre
// Affiche le résultat
// 📝 Résultat attendu :
// ["Dora", "Charlie", "Alice", "Fred"]
