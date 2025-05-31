/**
 * Compte le nombre total de pics supérieurs et inférieurs dans une série de mesures de radioactivité.
 *
 * Un "pic supérieur" est une valeur qui est supérieure d'au moins 5 unités à ses deux voisines.
 * Un "pic inférieur" est une valeur qui est inférieure d'au moins 5 unités à ses deux voisines.
 * Le premier et le dernier élément ne peuvent jamais être des pics.
 *
 * @param {number[]} values Les valeurs mesurées par le capteur de radioactivité (entre 0 et 100, taille 0 à 20)
 * @return {number} Le nombre total de pics inférieurs et de pics supérieurs
 */

function countPeaks(values) {
  // Write your code here
  // To debug: console.error('Debug messages...');
  let countPeak = 0

  for (let i = 1; i < values.length - 1; i++) {
    if (values[i] >= values[i + 1] + 5 && values[i] >= values[i - 1] + 5) {
      // Pic supérieur
      countPeak += 1
    } else if (
      values[i] <= values[i + 1] - 5 &&
      values[i] <= values[i - 1] - 5
    ) {
      // Pic inférieur
      countPeak += 1
    }
  }

  return countPeak
}

/* Ignore and do not change the code below */

/**
 * Try a solution
 * @param nbPeaks Le nombre total de pics inférieurs et de pics supérieurs
 */
function trySolution(nbPeaks) {
  console.log("" + JSON.stringify(nbPeaks))
}
trySolution(countPeaks(JSON.parse(readline())))

/* Ignore and do not change the code above */
