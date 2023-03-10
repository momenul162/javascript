function fibonacciSeries(number){
    fibo = [0, 1];
    for (let i = 2; i <= number; i++){
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo;
}
const fiboNumber = fibonacciSeries(10);
console.log(fiboNumber);