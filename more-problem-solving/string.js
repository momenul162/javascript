const text = 'Hello, how are you?';
for (const char of text){
    console.log(char);
}

// revarse
function revarseText(massage){
    let revarse = '';
    for (const letter of text){
        revarse = letter + revarse;
    }
    return revarse;
}
const revarsed = revarseText(text);
console.log(revarsed);