/**
 * rock == 1
 * paper == 2
 * scissors == 3
 */
const containElem = document.querySelector('.container');

// take choice of human
let humanChoice = '';
containElem.addEventListener('click', event =>{
    humanChoice = event.target.id;
    console.log(humanChoice);
});
//take choice of computer
// compare two choice and give result