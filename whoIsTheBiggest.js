// À partir du tableau à deux dimensions, recréez un nouveau tableau des nombres les plus grands de chaque série.

let list = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];

function getBiggest(numbers) {
    let bigNumbers = [];
    for (let array of numbers){
        console.log("Tableau => ",array)
        console.log("NumMax = ",Math.max(...array))
        let numMax = Math.max(...array)
        bigNumbers.push(numMax)
    }
    return bigNumbers;
}


console.log(getBiggest(list));
// Expected result : [5,27,39,1001]