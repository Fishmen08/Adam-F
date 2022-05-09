let user = '';


let guessGame = num => {
    let randomNumber = (Math.ceil(Math.random() *10));
    let computerGuess = (Math.ceil(Math.random() *10))
    let userDiff = Math.abs(num-randomNumber);
    let compDiff = Math.abs(computerGuess-randomNumber);
    console.log(randomNumber);
    console.log(computerGuess);
    console.log(userDiff);
    console.log(compDiff);
    if (userDiff < compDiff) {
        console.log('Congratulations you win!')
    } else if (userDiff === compDiff) {
        console.log("It's a tie, try again.")
    } else {
        console.log('Sorry, the computer won this time.')
    };
    };

guessGame(8);    