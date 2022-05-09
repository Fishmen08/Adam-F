randomPhrase = ['Intermittent fasting is good for longevity', 'Regular weight training will keep you strong into old age', 'Try and eat a decent amount of protein with each meal to increase satiety', 'In most cases the best way to improve overall health is to lose weight', 'Creating healthy habits that you can stick to will have the best long term results', 'Consistecy is the key to gaining any results with weight training and diet']



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

let mobile = document.getElementById('mobileButton');
let mobileMenu = document.getElementById('mobileMenu');

mobile.onclick = function () {
    mobileMenu.style.display = flex;
    words.innerHTML = 'new words'
}