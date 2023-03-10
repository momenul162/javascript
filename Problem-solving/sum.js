const numbers = [54, 45, 25, 35, 75, 15];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     sum = sum + element;
// }
// console.log(sum);

function arraySum (number){
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
const myNumber = arraySum(numbers);
console.log(myNumber);