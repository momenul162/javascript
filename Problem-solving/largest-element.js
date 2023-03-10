const numbers = [25, 75, 15, 85, 35];

// find the largest number in array
function largestElement (number){
    let largest = 0;
    for (let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        if (element > largest){
            largest = element;
        }
    }
    return largest;
}
const oldest = largestElement(numbers);
console.log(oldest);

// find the smallest number in array
function lowestElement (number){
    let lowest = numbers[0];
    for (let i = 1; i < numbers.length; i++){
        const element = numbers[i];
        if (element < lowest){
            lowest = element;
        }
    }
    return lowest;
}
const smallest = lowestElement(numbers);
console.log(smallest);

