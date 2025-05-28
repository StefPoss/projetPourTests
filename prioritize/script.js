// L'objectif de cet exercice est de manipuler le DOM pour attribuer des couleurs différentes à chaque task selon son niveau de priorité et pour afficher seulement celles qui sont le plus urgentes.

// Utilisez les couleurs suivantes:

// Très urgent (1): #e74c3c
// Urgent (2): #e67e22
// Moyennement urgent (3): #f1c40f
// Pas urgent (4): #2ecc71
// Exercices
// Modifiez la couleur de fond des divs "criticality" selon leur niveau d’urgence.

// Faites disparaître (via display: none) les tasks qui ont un niveau d’urgence supérieur à 2, et laissez tous les autres tasks affichés.

// ⚠️ Attention, les div contenant les tasks sont organisées avec flexbox (display: flex), pensez-à ré-attribuer le display: flex dans le cas où le niveau d’urgence n’est pas supérieur à 2

// document.querySelectorAll(".criticality").forEach((item) => {
//   let prio = item.textContent;
//   console.log(prio);
//   switch (prio) {
//     case "1":
//       item.style.setProperty("background-color", "#e74c3c");
//       break;

//     case "2":
//       item.style.setProperty("background-color", "#e67e22");
//       break;

//     case "3":
//       item.style.setProperty("background-color", "#f1c40f");
//       break;

//     case "4":
//       item.style.setProperty("background-color", "#2ecc71");
//       break;
//   }
// });



// Sélectionne tous les éléments avec la classe .criticality
const criticalityElements = document.querySelectorAll('.criticality');

// Parcourt chaque élément
criticalityElements.forEach((element) => {
  // Trouve le parent le plus proche ayant la classe .row
  const parentRow = element.closest('.row');

  // Vérifie que parentRow existe
  if (parentRow) {
    // Applique une couleur selon le texte dans l'élément .criticality
    switch (element.textContent.trim()) {
      case '1':
        parentRow.style.backgroundColor = #e74c3c;
        break;
      case '2':
        parentRow.style.backgroundColor = #e67e22;
        break;
      case '3':
        parentRow.style.backgroundColor = #f1c40f;
        // parentRow.style.display: none;
        break;
      case '4':
        parentRow.style.backgroundColor = #2ecc71;
    }
  }
});

