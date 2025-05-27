function cleanSentence(str) {
    
    // Insert your code here
    const pattern = /[^a-z0-9 ]/ig;
    str = str.replace(pattern, '')
    console.log(str)
    return str
}


const sentence = "J@av@aScri^pt i*s m!y @frie'nd!";
const result = cleanSentence(sentence);
console.log(result)
// Expected : JavaScript is my friend