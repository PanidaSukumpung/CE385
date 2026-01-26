let sumEven = 0;
let productOdd = 1;
for ( let i = 1; i <= 50; i++) {
   
    if (i %2 == 0 ) {
        sumEven += i;
    }
    else if (i<=10) {
        productOdd = productOdd * i;
    }
}

console.log(sumEven)
console.log(productOdd)