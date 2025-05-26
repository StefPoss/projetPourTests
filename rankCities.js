// La fonction rankCities est censée retourner un tableau d’objets de villes triées selon la taille de leur population en 2018 uniquement (de la population la plus importante à la plus faible).
// La fonction s'exécute mais le résultat retourné est faux et le code pourrait être grandement simplifié…
// Exercices
// Corrigez le code et simplifiez le pour éliminer les étapes superflues en vous assurant que le résultat est toujours retourné par la fonction rankCities.

const citiesList = [
    {
        city: "Paris",
        year: "2018",
        population: 2174000,
    },
    {
        city: "Bordeaux",
        year: "2017",
        population: 258000,
    },
    {
        city: "Cannes",
        year: "2018",
        population: 74000,
    },
    {
        city: "Lyon",
        year: "2018",
        population: 518000,
    },
    {
        city: "Dijon",
        year: "2016",
        population: 82500,
    },
];

function rankCities(cities) {
    let filteredList = cities.filter(cities => cities.year === "2018");
    let sortedList = filteredList.sort((a, b) => b.population - a.population);
    // let finalList = [];
    console.log(cities);
    console.log(filteredList);
    console.log(sortedList);
  
    // finalList = sortedList;

    return sortedList;
}

console.log(rankCities(citiesList));
// Expected result: 
// [{ city: "Paris", year: "2018", population: 2174000 },
//  { city: "Lyon", year: "2018", population: 518000 }
//  { city: "Cannes", year: "2018", population: 74000 }];
