function getTotal(cart) {
    let total = 0;
    
    // Insert your code here
    for (let i = 0; i < cart.length; i++){
      total += cart[i].price * cart[i].quantity;
    }
    return total;
}

const exampleCart = [
    { name: 'iPhone', price: 909, quantity: 1 },
    { name: 'Samsung Galaxy', price: 799, quantity: 3 },
    { name: 'Steam Deck', price: 419, quantity: 10 },
];
console.log(getTotal(exampleCart));
// Expected: 7496