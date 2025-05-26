function groupsCount(users) {
  // users.reduce passe sur chaque utilisateur.
  return users.reduce((acc, user) => {
    // user.city donne la ville.
    acc[user.city] = (acc[user.city] ?? 0) + 1
    // On incrémente dans l’objet résultat.
    return acc
  }, {})
}

const usersExample = [
  { name: "Pierre", city: "Paris" },
  { name: "Paul", city: "Lyon" },
  { name: "Jacques", city: "Paris" },
  { name: "Julie", city: "Grenoble" },
  { name: "Quentin", city: "Orléans" },
  { name: "Emma", city: "Grenoble" },
]
console.log(JSON.stringify(groupsCount(usersExample)))
// Expected: {"Paris":2,"Lyon":1,"Grenoble":2,"Orléans":1}
