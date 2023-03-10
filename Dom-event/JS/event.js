// function call event handler
function makeRed (){
    document.body.style.backgroundColor = 'red';
}
// Just click not call to function
const goldenRodButton = document.getElementById('make-goldenRod-button');
goldenRodButton.onclick = makeGoldenRod;
function makeGoldenRod (){
    document.body.style.backgroundColor = 'goldenrod';
}
// Anonymous function
const blueButton = document.getElementById('make-blue-button');
blueButton.onclick = function(){
    document.body.style.backgroundColor = 'blue';
}
// By using addEventListener
const greenButton = document.getElementById('make-green-button');
greenButton.addEventListener('click', makeGreen);
function makeGreen (){
    document.body.style.backgroundColor = 'green';
}
// By using addEventListener normal shortcut
const grayButton = document.getElementById('make-gray-button');
grayButton.addEventListener('click', function (){
    document.body.style.backgroundColor = 'gray';
})
// Direct shortcut using event handler
document.getElementById('make-hotPick-button').addEventListener('click', function(){
    document.body.style.backgroundColor = 'hotpink'
})