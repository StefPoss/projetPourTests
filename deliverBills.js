
// Nous allons créer un algorithme pour simuler la logique d’un distributeur de billets.
// Les billets disponibles dans le distributeur sont des billets de 5, 10, 20, 50, 100, 200 et 500.
// Exercice :
// Complétez la fonction deliverBills afin de retourner un tableau contenant le minimum de billets pour arriver à la somme demandée. 

function deliverBills (amount) {
    const withdrawal = [];
    let billets = [500, 200, 100, 50, 20, 10, 5];
    // insert your code here
    for (let i = 0; i < billets.length; i++){
         while (amount >= billets[i]){
            console.log(amount)
            amount -= billets[i];
            console.log(billets[i])
            withdrawal.push(billets[i]);
            console.log(withdrawal[i]);
         }
    }
    return withdrawal;
  }
  
  console.log(deliverBills(770)); 
  // Expected: [500,200,50,20]
  console.log(deliverBills(1360));
  // Expected: [500,500,200,100,50,10]