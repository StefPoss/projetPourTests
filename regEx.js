function testRegex(text) {
    
    const pattern = /[0-9]/;
    const result = pattern.test(text)
    console.log(result)
    return result;
}

const str1 = "My address is: 256 brick lane.";
console.log(testRegex(str1))
// Expected : true
// ________________________
// ________________________

function extractText(text) {
    const pattern = /v[a-z]*/ig;
    result = text.match(pattern)
    console.log(result)
    return result
}

const str2 = "My name is vanessa Vampire";
console.log(extractText(str2))
// Expected : [vanessa, Vampire]
// ________________________
// ________________________

function replaceText(text) {
    const pattern = /codage/ig;
    result = text.replace(pattern, 'code')
    console.log(result)
    return result
}

const str = "J'adore le codage informatique!";
console.log(replaceText(str))
// Expected : J'adore le code informatique!
