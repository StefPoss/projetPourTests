function generateBuddies(arr) {
  let buddyList = []

  // Insert your code here
  let length = arr.length / 2

  for (let i = 0; i < length; i++) {
    let buddies = []
    for (let j = 0; j < 2; j++) {
      var random = Math.floor(Math.random() * arr.length)
      console.log(random)
      console.log(arr)
      buddies.push(arr[random])
      arr.splice(random, 1)
    }
    buddyList.push(buddies)
  }

  return buddyList
}

const list = [
  "Lebron",
  "Michael",
  "Shaquille",
  "Stephen",
  "Kobe",
  "Kevin",
  "Larry",
  "Scotty",
  "Charles",
  "Magic",
]
const result = generateBuddies(list)
console.log(JSON.stringify(result))
