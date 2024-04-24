/**
 * rock == 0
 * paper == 1
 * scissors == 2
 */
const containElem = document.querySelector('.container');

// take choice of human
let humanChoice = '';
containElem.addEventListener('click', event =>{
    humanChoice = event.target.id;
    console.log(humanChoice);
});
//take choice of computer
let computerChoice = '';
let digitChoice;
containElem.addEventListener('click', event =>{
    digitChoice = Math.round(Math.random()*2);
    computerChoice = digitChoice === 0 ? 'rock' : digitChoice === 1 ? 'paper' : 'scissors';
});


// compare two choice and give result