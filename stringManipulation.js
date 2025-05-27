function stringManipulation(str1, str2) {
    let finalWord = '';
    
    // Insert your code here
    const regex = /%/i;
    let newWord1 = str1[0].toUpperCase() + str1.slice(1)
    let newWord2 =  str2.replace(regex, "").split("").reverse().join("")
    newWord2 = newWord2[0].toUpperCase() + newWord2.slice(1)

    finalWord = newWord1 + newWord2
    return finalWord;
}


const word1 = 'java';
const word2= 'tpi%rcs';
console.log(stringManipulation(word1, word2));
// Expected result: JavaScript