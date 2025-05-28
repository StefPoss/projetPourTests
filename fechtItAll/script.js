// A travers le cours vous avez découvert ce qu’est une API et comment récupérer des informations depuis votre code grâce au fetch.

// Passons maintenant à la pratique !

// Le service JSONPlaceholder est un webservice de test permettant de récupérer des jeux de données et s’entraîner à la manipulation d’API.

// Exercices
// Après avoir pris connaissance de la documentation, assignez à la variable "getUserInfo" l’instruction permettant de faire une requête afin de récupérer l’utilisateur portant l’ID 5 (Chelsey Dietrich).

// Votre instruction devra contenir un console.log du résultat ainsi qu’un return pour pouvoir l’exploiter.

const getUserInfo = fetch("https://jsonplaceholder.typicode.com/users/5")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    return data;
  });


  // Cette seconde étape consiste à sélectionner et exploiter les ressources reçues dans l’étape précédente afin de pouvoir manipuler le DOM d’une page web.

  // N’hésitez pas à revenir en arrière pour bien comprendre la structure de la réponse et récupérer le nom de chaque propriété.
  
  // Exercices
  // Assignez les valeurs des propriétés "name", "email" et "phone" de la réponse du webservice aux balises correspondantes du fichier HTML.

function displayUserInfo(userId) {
    return fetch('https://jsonplaceholder.typicode.com/users/' + userId)
        .then(response => response.json())
        .then(data => {
            // Insert your code here
            console.log(data.name);
            console.log(data.email);
            console.log(data.phone);

            document.querySelector('#name').textContent = data.name
            document.querySelector('#e-mail').textContent = data.email
            document.querySelector('#phoneNumber').textContent = data.phone
            return data;
        });
}

displayUserInfo(5);
