// MAP practice
const numbers = [1, 3, 5, 7, 9];
const evenNumber = numbers.map((n) => n + 1);
console.log(evenNumber);

// Filter and find
const ages = [33, 50, 79, 78, 90, 101, 30];
const filterNum = ages.filter((x) => x % 10 == 0);
const findNum = ages.find((f) => f % 10 == 0);
console.log(filterNum);
console.log(findNum);
