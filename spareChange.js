// Cet exercice est une évolution de l’exercice précédent, il met le focus sur les conditions particulières à prendre en compte pour qu’un résultat soit correct.
// La valeur des chiffres romains est la suivante :
// 1 = I
// 5 = V
// 10 = X
// 50 = L
// 100 = C
// 500 = D
// 1000 = M
// Attention, certains chiffres romains s’expriment différemment (ex: 4 = IV soit “1 avant 5”).
// Exercices
// Complétez la fonction toRomanNumerals qui prend un nombre arabe en entrée et retourne une chaîne de caractères exprimant la valeur demandée en chiffres romains. 

function toRomanNumerals (number) {
    let romanValue = ''
    // Insert your code here
    const romanNumbers = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    const arabicNumbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    for (let i = 0; i < arabicNumbers.length; i++){
        while (number >= arabicNumbers[i]){
            console.log(arabicNumbers[i]);
            
            romanValue += romanNumbers[i];
            
            console.log(romanNumbers[i]);
            
            number -= arabicNumbers[i];
        }
    }

    return romanValue
  }
  
  console.log(toRomanNumerals(984)) 
  // Expected: 'CMLXXXIV'