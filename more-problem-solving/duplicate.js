const friends = ['shakib', 'mehedi', 'shakib', 'hridoy', 'mehedi', 'mamun'];
function duplicateName (names){
    let unique = [];
    for (const element of friends){
        if (unique.indexOf(element) == -1){
            unique.push(element);
        }
    }
    return unique;
}
const friendName = duplicateName(friends);
console.log(friendName);

const numbers = [45, 35, 15, 45, 15, 65, 35, 81, 15, 54]
function duplicateNumber (number){
    let uniqueNumber = [];
    for (const element of numbers){
        if (uniqueNumber.indexOf(element) == -1){
            uniqueNumber.push(element);
        }
    }
    return uniqueNumber;
}
const myNumber = duplicateNumber(numbers);
console.log(myNumber);