// Complétez la fonction average() qui calcule la moyenne de chiffre d’affaires mensuel d’une entreprise pour une année donnée.
// Elle prendra comme argument les ventes mensuelles pour une année donnée et retournera un montant arrondi à l’entier le plus proche.
// Stockez le résultat dans une variable calculation et affichez-le dans la console.
// Nous chercherons la moyenne mensuelle du chiffre d’affaires pour l’année 2018.

function average(sales, year) {
  let average = 0

  // Insert your code here
  let yearSales = sales.filter((sale) => sale.year === year)

  console.log(yearSales)

  nbMois = yearSales.length

  console.log(nbMois)

  let sumMois = 0

  const markers = yearSales.map((data, i) => {
    return (sumMois += data.amount)
  })

  console.log("sum is", sumMois)

  average = Math.round(sumMois / 12)

  return average
}

const mySales = [
  {
    year: 2017,
    month: "April",
    amount: 1500,
  },
  {
    year: 2019,
    month: "January",
    amount: 3000,
  },
  {
    year: 2018,
    month: "December",
    amount: 5000,
  },
  {
    year: 2020,
    month: "August",
    amount: 500,
  },
  {
    year: 2018,
    month: "March",
    amount: 2000,
  },
  {
    year: 2021,
    month: "October",
    amount: 1700,
  },
  {
    year: 2019,
    month: "July",
    amount: 800,
  },
  {
    year: 2019,
    month: "July",
    amount: 800,
  },
  {
    year: 2020,
    month: "February",
    amount: 2400,
  },
  {
    year: 2018,
    month: "November",
    amount: 4300,
  },
]
const calculation = average(mySales, 2018)
console.log(calculation)
/// expected : 942
