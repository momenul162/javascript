// Factorial using for loop
let factorial = 1;
for (let i=1; i<=5; i++){
    factorial= factorial*i;
}
console.log(factorial);

// Factorial using function at for loop
function getFactorial (number){
    let fact  = 1;
    for (let i =1; i <= number; i++){
        fact = fact * i;
    }
    return fact;
}
const firstFact = getFactorial(6);
console.log(firstFact);

// Factorial using fanction at while loop
function getFact (number){
    let factorial = 1;
    let i = 1;
    while (i <= number){
        factorial = factorial * i;
        i++;
    }
    return factorial;
}
const myFact = getFact(4);
console.log(myFact);

// Factorial decrement loop
function factorialGet(number){
    let fact = 1;
    let i = number;
    while (i >= 1){
        fact = fact * i;
        i--;
    }
    return fact;
}
const myFactorial = factorialGet(9);
console.log(myFactorial);