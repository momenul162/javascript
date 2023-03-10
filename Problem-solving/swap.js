let first = 7;
let second = 9;
console.log(first, second);

// swap first way
let temp = first;
first = second;
second = temp;
console.log(first, second);

// swap second way
[first, second] = [second, first];
console.log(first, second);