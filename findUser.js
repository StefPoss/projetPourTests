// La fonction findUser sert à vérifier la présence d’un utilisateur au sein de la liste usersList.
// Exercices
// En vous servant de la méthode find() complétez la fonction findUser. Elle renverra un booléen indiquant la présence, ou non, de l’utilisateur recherché dans la usersList.

function findUser(request, list) {
    let userFound = false;
    
    // Insert your code here
    // On boucle sur chaque valeur du tableau
    for (let item of list){
        // On parse chaque valeur du tableau grâce à findUser() pour comparer avec la request
        list.find((item) => item = request);
        console.log(item);
        // si la valeur est égale à la request on retourne true
        if (item === request) return true;
    }
    // on renvoie le résultat de la recherche true/false
  return userFound;
}

const search = 'Lucas';
const usersList = ['Lucas', 'Juliette', 'William', 'Camille', 'Pauline', 'Sébastien'];

console.log(findUser(search, usersList));
// Expected: true