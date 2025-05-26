let randomInteger = 0;
let fixedInteger = 0;
let score = 0;
let result = 0;
 
function calculateScore(integer) {
 
 // randomInteger = Math.floor(Math.random() * 90) + 1; // random integer between 0 and 90
 randomInteger = Math.floor(Math.random() * (80 - 0 + 1)) + 1;

 console.log(randomInteger);
 score = fixedInteger + randomInteger;
 console.log(score);
 
 if (score === 90) {
    return result = {
     score : score,
     result: "best score, you win !"   
    };
  } else {
     return result = {
     score : score,
     result: "not bad, try again !"
     };
  }
 }
 
// console.log(sum);
console.log(result);
 
fixedInteger = 10;
console.log(calculateScore(fixedInteger));
// Expected: { score: 70, result: "not bad, try again !" }