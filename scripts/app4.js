let total = 0;

function addCart(price) {
    return total += price;
}

total = addCart(500);
total = addCart(500);

console.log(total);

function calculateTax(total) {
    return total * 1.15;
}

const totalCart = calculateTax(total);

console.log(totalCart);








