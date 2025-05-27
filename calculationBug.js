function getTotal(products) {
    let total = 0;

    for (let item of products) {
        total += Number(item.price)
        console.log(total)
    }
    
    return total;
}

console.log(getTotal([
    { product: 't-shirt', price: '15' },
    { product: 'jeans', price: '60' },
    { product: 'sweater', price: '30' },
]));
// Expected: 105
