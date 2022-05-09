randomPhrase = ['You are the champ', 'You will go far kid', 'I think greatly of you', 'Your wife is always right']



let button = document.getElementById('button');
let buttonTwo = document.getElementById('buttonTwo')
let words = document.getElementById('words');
let press = document.getElementById('press');

button.onclick = function () {
    randomNumber = Math.floor(Math.random() * randomPhrase.length);
console.log(randomPhrase[randomNumber]);
    words.hidden = true;
    press.innerHTML = randomPhrase[randomNumber];
    button.hidden = true;
    buttonTwo.hidden = false;    
}

buttonTwo.onclick = function () {
    words.hidden = false;
    button.hidden = false;
    press.innerHTML = 'Try pressing the button below.';
    buttonTwo.hidden = true;
}