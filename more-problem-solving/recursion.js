function sum (i){
    if (i == 1){
        return 1;
    }
    return i + sum(--i);
}
console.log(sum(5));