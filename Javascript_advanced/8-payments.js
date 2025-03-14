function processpayment(amount) {
    console.log(`collecting payment of ${amount}`)
}

function processorder(orderid, amount) {
    console.log(`${orderid} is being processed`)

    processpayment(amount);

    console.log(`${orderid} has been fully processed`)
}

console.log('processing orders');
processorder(12321, 10.99);
processorder(12322, 12.99);
processorder(12323, 15.0);
console.log('all the orders have been processed')