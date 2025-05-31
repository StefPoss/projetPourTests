function solve(weight0, weight1, weight2) {
  // Write your code here
  // To debug: console.error('Debug messages...');
  let arr = [weight0, weight1, weight2]

  let maxWeight = Math.max(...arr)
  let index = arr.indexOf(maxWeight)
  console.log(maxWeight, index)

  return index
}

solve(10, 5, 3)
