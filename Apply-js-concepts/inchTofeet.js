function inchToFeet (inch){
    const feet = inch / 12;
    return feet;
}
const inputInch = inchToFeet(60);
console.log(inputInch);

function mileToKilometer (mile){
    const kilometers = mile * 1.609344;
    return kilometers;
}
const inputMile = mileToKilometer(5);
console.log(inputMile);