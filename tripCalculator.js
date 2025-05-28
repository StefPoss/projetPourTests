// Complétez la fonction calculateTrip: Pour chaque trajet dans la liste trips,
// ajoutez une propriété totalTime ayant pour valeur une estimation du temps en minutes (nombre)
// et une propriété estimatedTime ayant pour valeur un string “XhXX”
// si le trajet dure plus d’une heure ou “XX min” dans le cas contraire.

function calculateTrip(arr) {
  for (let proposition of arr) {
    const arrival = new Date(proposition.arrival)
    const departure = new Date(proposition.departure)

    // Calcul simplifié de la durée
    const diffMs = arrival - departure
    const totalMinNum = Math.floor(diffMs / (1000 * 60))
    const hours = Math.floor(totalMinNum / 60)
    const minutes = totalMinNum % 60

    proposition.totalTime = totalMinNum

    const paddedMin = minutes < 10 ? `0${minutes}` : minutes
    proposition.estimatedTime =
      hours > 0 ? `${hours}h${paddedMin}` : `${minutes} min`
  }

  // **Ajout du tri pour l’ordre croissant**
  arr.sort((a, b) => a.totalTime - b.totalTime)

  return arr
}

const trips = [
  { departure: "2021/12/24 07:45:00", arrival: "2021/12/24 09:05:00" },
  { departure: "2021/12/24 08:00:00", arrival: "2021/12/24 08:50:00" },
  { departure: "2021/12/24 08:00:00", arrival: "2021/12/24 09:05:00" },
]
const result = calculateTrip(trips)
console.log(result)

// Expected :
// [
//     {
//         departure: '2021/12/24 08:00:00',
//         arrival: '2021/12/24 08:50:00',
//         totalTime: 50,
//         estimatedTime: '50 min'
//     },
//     {
//         departure: '2021/12/24 08:00:00',
//         arrival: '2021/12/24 09:05:00',
//         totalTime: 65,
//         estimatedTime: '1h05'
//     },
//     {
//         departure: '2021/12/24 07:45:00',
//         arrival: '2021/12/24 09:05:00',
//         totalTime: 80,
//         estimatedTime: '1h20'
//     }
// ]
