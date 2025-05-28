// Le principe de ce challenge est de s’entraîner à manipuler Thunder Client en faisant une requête en GET auprès de l’API suivante : https://secret-webservice.vercel.app/code afin de récupérer un code secret.

// Exercices
// A partir de Thunder Client, décortiquez la réponse renvoyée par l’API et conservez uniquement la valeur de la propriété "realSecretCode". Assignez cette valeur à la variable "code" dans la fonction getSecretCode.

function getSecretCode() {
  const code = 7777;
  fetch("https://secret-webservice.vercel.app/code")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.realSecretCode);
    });
  return code;
}

console.log(getSecretCode());
