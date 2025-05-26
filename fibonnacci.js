// En mathématiques, la suite de Fibonacci est une suite de nombres entiers dans laquelle chaque terme est la somme des deux termes qui le précèdent.
// Cette suite permet de représenter en termes mathématiques (ou en code algorithmique !) des motifs qui se produisent spontanément dans la nature.
// Exercices
// Complétez la fonction fibonacci pour renvoyer les termes de la suite de Fibonacci en fonction du nombre de termes n fourni en argument.
// Les 2 premiers termes de la suite sont dans le tableau result. À vous de la compléter !
// ⚠️ Pensez à créer une condition pour gérer le cas où n est inférieur ou égal à 2.

function fibonacci(n) {
    let result = [0, 1];
    let first = 0;
    let second = 1;
    let next;
  
    //Ecrivez votre code ici
    if (n <=2 ){
        return result.slice(0,n);
        } 
        
        for (let i = 2; i < n; i++){
    
        // le suivant est la somme des deux précédents
        next = first + second;
        console.log(next)
        // le premier devient le second
        first = second;
        console.log(first)
        // le second devient le suivant
        second = next;
        console.log(second)
        // on ajoute le suivant au tableau}
        result.push(next);
        console.log(result)
        }
    return result;
 
}
console.log(fibonacci(0));
// Attendu: []
console.log(fibonacci(1));
// Attendu: [0]
console.log(fibonacci(2));
// Attendu: [0, 1]
console.log(fibonacci(3));
// Attendu: [0, 1, 1]
console.log(fibonacci(10));
// Attendu: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]


