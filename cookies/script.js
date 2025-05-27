// L'objectif de cet exercice est de manger les cookies au clic.

// L’URLl de l’image d’un cookie croqué est : https://static.lacapsule.academy/practice/cookies/cookie-2.jpg

// Exercices
// Au clic sur un cookie, affichez la nouvelle image avec le cookie croqué.

// Au second clic, le cookie doit être supprimé. Vous devez utiliser la méthode indexOf() permettant la vérification de la valeur de l’attribut src.

function eventListenerCroqueCookie() {
  let srcCookieId = document.querySelector(".cookie").src;
  let imgSrcCookieCroque =
    "https://static.lacapsule.academy/practice/cookies/cookie-2.jpg";

  const changeCookie = document.querySelectorAll(".cookie");
  console.log(changeCookie)
  // for (let i = 0; i < changeCookie.length; i++) {
    // On vient écouter le clic sur la classe cookie
    
    changeCookie.addEventListener("click", function () {
    //   console.log(element);
      console.log("Clic");

      // if (srcCookieId.includes("1")) {
      //   this.src.CookieId = imgSrcCookieCroque;

      //   console.log("srcCookie : " + srcCookieId);
      //   console.log("srcCookieCroque : " + imgSrcCookieCroque);
      // }
    });
  // }
}

eventListenerCroqueCookie();
