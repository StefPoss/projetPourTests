/**
 * @param {number[]} values Les valeurs mesurées par le capteur de radioactivité
 * @return {number} Le nombre total de pics inférieurs et de pics supérieurs
 */
function countPeaks(values) {
  // Write your code here
  // To debug: console.error('Debug messages...');
  for (let i = 0; i > values.length; i++) {
    if (values[i] > values[i + 1] + 5 || values[i] > values[i - 1] + 5) {
      console.log(values[i], "est un pic")
    }
  }
  return 62
}

const values = [8, 10.7, 17.1, 11.2, 13.5, 9.9, 14.9, 9.4, 9.4, 3.1, 12.7]
