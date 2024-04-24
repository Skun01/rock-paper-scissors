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
containElem.addEventListener('click', () =>{
    digitChoice = Math.round(Math.random()*2);
    computerChoice = digitChoice === 0 ? 'rock' : digitChoice === 1 ? 'paper' : 'scissors';
});
// compare two choice and give result
let resultSectionElem = document.querySelector('.result-section');
let winElem = resultSectionElem.querySelector('.win');
let loseElem = resultSectionElem.querySelector('.lose');
let drawElem = resultSectionElem.querySelector('.draw');
containElem.addEventListener('click', () =>{
    let output = '';
    if(humanChoice === computerChoice){
        output = 'draw';
        drawElem.textContent = +drawElem.textContent + 1;
    }else if(humanChoice === 'rock' && computerChoice === 'scissors'
    || humanChoice === 'paper' && computerChoice === 'rock' || humanChoice === 'scissors' && computerChoice === 'paper'){
        output = 'win';
        winElem.textContent = +winElem.textContent + 1;
    }else{
        output = 'lose';
        loseElem.textContent = +loseElem.textContent + 1;
    }
    alert(`you ${output} computer`);
})
