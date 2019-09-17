//A game inwhich you input a number and it tells you if it's higher or lower

const readlineNum = require('readline')
//Imports readline library

let guesses = 0
//A variable that will count the guesses used

const randomNumber = Math.floor(Math.random() * 100)
//Generates a random number

let numberInput = readlineNum.createInterface({
  input: process.stdin,
  output: process.stdout
})
//Opens an input and preps for output

numberInput.setPrompt('Please enter a guess from 0-100:');
//Set's a prompt asking for the users guess

numberInput.prompt();
//Print's the prompt

numberInput.on('line', function(numberIn) {
  //Detects when the prompt event is used

  if (guesses === 10) {
    console.log('Game over, You\'ve ran out of guesses')
    guesses++
    process.exit()
  } else if (numberIn > randomNumber) {
    console.log('Your guess was too high')
    guesses++
    console.log(`You have used ${guesses} guesses`)
    numberInput.prompt()
  } else if (numberIn < randomNumber) {
    console.log('Your guess was too low')
    guesses++
    console.log(`You have used ${guesses} guesses`)
    numberInput.prompt()
  } else if (numberIn == randomNumber) {
    console.log('Congratulations! You\'ve guessed the number!')
    guesses++
    console.log(`You guessed the number in ${guesses} guesses`)
    process.exit()
  } else {
    console.log('I\'m sorry i don\'t recognize that as a number')
    console.log(`You have used ${guesses} guesses. This will not be counted as a guess`)
    numberInput.prompt()
  }
});
//An if/elseif/else statement that checks if the player has guesses remaining, If the number is too high or too low, if the input is equal to the random number and if none outputs an error message
