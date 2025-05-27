
let str1 = "Hello World";
let str2 = "End of the story";
let str3 = "Start a new chapter";
let str4 = "inside";
let str5 = "999 is the end";

let strings = ["Hello World", "End of the story", "Start a new chapter", "inside", "999 is the end"];

// 👉 Utilisez l'ancre de début de chaîne pour trouver une correspondance pour "Hello" uniquement s'il apparaît au début de la chaîne.

const patttern1 = /^Hello/;
console.log(patttern1.test(str1));
// Attendu : true

// 👉 Utilisez l'ancre de fin de chaîne pour vérifier si "end" est à la fin de n'importe quelle chaîne.
const pattern2 = /end$/;
function checkEnd(str){
    console.log(str);
    return pattern2.test(str);
}
console.log(checkEnd(strings));
// Attendu : true

// 👉 Écrivez une expression régulière utilisant l'ancre de limite de mot pour trouver "Start" uniquement lorsqu'il s'agit d'un mot entier au début d'une chaîne.
const pattern3 =/^\bstart\b/i;
console.log(pattern3.test(str3));

// 👉 Utilisez une non-limite de mot pour trouver "inside" lorsqu'il n'est pas utilisé comme un mot isolé, par exemple dans "inside" mais pas comme partie d'un autre mot.
const pattern4 = /\Binside\B/;
console.log(`trouver inside dans ${str4} : ${pattern4.test(str4)}`);
// Attendu : true > mais je trouve false ???!!

// 👉 Combinez les ancres de début et de fin pour identifier les chaînes qui commencent et finissent par un chiffre.
const pattern5 = /^\d*\d$/;
console.log(pattern5.test(str5));
// Attendu : false

// 👉 Utilisez les limites de mot pour trouver toutes les occurrences de "new" lorsqu'ils apparaissent comme des mots entiers dans une phrase.
const pattern6 = /\bnew\b/g;
console.log(str3.match(pattern6));
// Attendu : [ 'new' ]


let str6 = "hello hello how are you?";
let str7 = "bye bye see you soon";
let str8 = "happy to to meet you";
let str9 = "no repetition here";
let str10 = "what what is is this this";

// 👉 Écrivez une expression régulière pour détecter les mots répétés immédiatement l'un après l'autre dans une phrase. Testez cela sur la phrase 1.
// Cherche une limite de mot (\b) avec plusieurs caractères (\w+) qui se répètent 1 fois (\1) et qui se termine par une limite de mot (\b)
const pattern7 = /\b(\w+)\s\1\b/g;
console.log(str6.match(pattern7))
// attendu : [ 'hello hello' ]

// 👉 Modifiez l'expression régulière de la question 1 pour inclure les mots séparés par un seul espace et testez-la sur la phrase 5.
// Cherche une limite de mot (\b) avec plusieurs caractères (\w+) séparés pas un espace (\s)  qui se répètent 1 fois (\1) et qui se termine par une limite de mot (\b)
const pattern8 = /\b(\w+)\s\1\b/g;
console.log(str10.match(pattern8))
// attendu : [ 'what what', 'is is', 'this this' ]


// 👉 Étendez votre expression régulière pour ignorer la casse (i.e., "Hello" suivi de "hello" devrait également être considéré comme une répétition). Testez cette expression sur une version modifiée de la phrase 1 où le second "hello" est en majuscule.
const pattern9 = /\b(\w+)\s\1\b/ig;
console.log(str10.match(pattern9))
// attendu : [ 'what what', 'is is', 'this this' ]

// 👉 Utilisez votre expression régulière pour remplacer tous les mots répétés par un seul mot et retournez la chaîne corrigée pour la phrase 5.
function replaceDoublons(str) {
    const pattern10 = /\b(\w+)\s\1\b/ig;
    return str.replace(pattern10,);
}
const cleanDoublons = replaceDoublons(str10);
console.log(cleanDoublons);

// 👉 Écrivez une expression régulière pour identifier les cas où un mot est répété deux fois mais avec un ou plusieurs mots intermédiaires. Par exemple, détecter "to" dans la phrase 3.


// 👉 Créez une fonction en JavaScript qui utilise votre expression régulière pour nettoyer une chaîne de tous les mots répétés, qu'ils soient adjacents ou séparés par d'autres mots. Appliquez cette fonction à toutes les phrases données.