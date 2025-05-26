// Le tableau list regroupe des utilisateurs avec leurs coordonnées. Certaines de ces coordonnées sont malheureusement manquantes et matérialisées par une chaîne de caractères vide ou un simple espace.
// Exercices
// À l’aide d’une boucle for…in remplacez les valeurs manquantes par null pour chacun des utilisateurs et ajoutez ces objets modifiés au tableau newList.
// Le résultat devra être retourné par la fonction checkValues.

function checkValues(data) {
    let newList = [];
    let subList = []
    
    // Insert your code here
    for (let item of data) {
        for (const key in item) {
                console.log(`${item} : ${item[key]}`);

                if (item[key] === '' || item[key] === ' ' ) item[key] = null;                
            }
            newList.push(item);
    }
    return newList;
}




const list = [
   { fullname: 'John Doe', age: 42, tel: '', email: ' ' },
   { fullname: 'Vanessa Williams', age: '', tel: ' ', email: 'v.williams@gmail.com' },
   { fullname: 'Richard Lawson', age: 42, tel: '0765432109', email: '' },
];
console.log(checkValues(list));
// Expected:
// [{ fullname: 'John Doe', age: 42, tel: null, email: null },
//     { fullname: 'Vanessa Williams', age: null, tel: null, email: 'v.williams@gmail.com' },
//     { fullname: 'Richard Lawson', age: 42, tel: '0765432109', email: null }]