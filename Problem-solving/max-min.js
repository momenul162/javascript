let first = 450;
let second = 650;
let third = 555;
const myNumber = findLergest(first, second, third);
const yourNumber = findLowest(first, second, third);
// find the lergest number
function findLergest(number1, number2, number3){
    if (number1 > number2 && number1 > number3){
        return number1;
    }
    else if (number2 > number1 && number2 > number3){
        return number2;
    }
    else{
        return number3;
    }
}
console.log(myNumber);

// find the lowest number
function findLowest(number1, number2, number3){
    if (number1 < number2 && number1 < number3){
        return number1;
    }
    else if (number2 < number1 && number2 < number3){
        return number2;
    }
    else{
        return number3;
    }
}
console.log(yourNumber);