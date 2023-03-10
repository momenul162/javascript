function leapYear(year){
    if ((year%4 == 0) && (year%100 != 0) || (year%400 == 0)){
        console.log('The year is leap year')
    }
     else{
        console.log('Is`t leap year')
    }   
}
const year = leapYear(2022);
console.log(year);