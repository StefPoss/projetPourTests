// L'objectif de cet exercice est de faire courir un chat grâce à la méthode setInterval.

// L’URL de la première image est : https://raw.githubusercontent.com/La-Capsule-Bootcamp/static/main/catwalk/cat-1.jpg

// Le nom des 10 images va de cat-1.jpg à cat-10.jpg.
// Une fois la dernière image affichée, la première est de nouveau affichée et ainsi de suite.

// Exercices
// Prenez connaissance du code fourni et modifiez-le afin de donner l’impression que le chat court, en changeant d’image toutes les 100 ms, par exemple.

// Vous devez obligatoirement utiliser la fonction "getCatImage" qui est censée renvoyer l’URL de l’image du chat en recevant l’index en paramètre (de 1 à 10).

let start = 1;

function getCatImage(imgNumber) {
  let url = `https://raw.githubusercontent.com/La-Capsule-Bootcamp/static/main/catwalk/cat-${imgNumber}.jpg`;
  return url;
}

setInterval(() => {
  document.getElementById("cat-run").src = getCatImage(start);
  console.log(start);
  start++;
  if (start > 10) {
    start = 1;
  }
}, 200);

document.querySelector("#cat-run").src = getCatImage(10);
