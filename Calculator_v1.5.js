//Basic Calculator

function addition(num1, num2) {
  return num1 + num2;
};
//Adds num1 and num2

function subtraction(num1, num2) {
  return num1 - num2;
};
//Subtracts num1 and num2

function multiply(num1, num2) {
  return num1 * num2;
};
//Multiplys num1 and num2

function divide(num1, num2) {
  return num1 / num2;
};
//Diivides num1 and num2

function factorial(fac) {
  let result = 1;
  let argue;
  for (argue = fac; argue > 1; argue--) {
    result *= argue
  };
  return result
};
//Finds the factorial of an inputted number

let readlineOne = require('readline');
//Imports the readline library

let numberInput = readlineOne.createInterface({
  input: process.stdin,
  output: process.stdout
})
//Opens an input and prepares for an output

numberInput.question('What is your calculation', function(numberIn) {

  numberInput.close()
  //Log's a string(Question) and saves the input as a parameter(numberIn) then closes the input interface

let numberArray = numberIn.match(/\d+/g).map(Number);
//Runs through the inputed string and picks out anything seen as a number and saves it to it's own array

let operatorArray = numberIn.split('').filter(function(op){
  return (op === '+' || op === '-' || op === '/' || op === '*' || op === '!');
})
//Splits the input string after every character and only returns the characters i've specified

  let numberOne = numberArray[0];
  let numberTwo = numberArray[1];
  let operator = operatorArray[0];
  //Creates an array using the users input and saves the strings to variables

  numberOne = Number(numberOne);
  numberTwo = Number(numberTwo);
  //Converts the variables containing the users number strings to number datatypes and overwrites the strings

  switch (operator) {
    case "+":
      console.log(addition(numberOne, numberTwo));
      break;
    case "-":
      console.log(subtraction(numberOne, numberTwo));
      break;
    case "/":
      console.log(divide(numberOne, numberTwo));
      break;
    case "*":
      console.log(multiply(numberOne, numberTwo));
      break;
    case "!":
      console.log(factorial(numberOne));
      break;
    default:
      console.log("You collosal fucking idiot");
      break;
  };
});
//A switch statement checking which operator the user inputted and calling the corresonding function
