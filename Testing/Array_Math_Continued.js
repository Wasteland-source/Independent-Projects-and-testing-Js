//Trying to add numbers using only an array
let numbers = [400,645,400];

console.log(numbers[0] + numbers[2]);
//Logs the result

let test = ('402+30');
//A simple test string

let numbersTest = test.match(/\d+/g).map(Number);
//Runs through the test string and pulls out numbers into another array

let operator = test.split('').filter(function (op){
  return (op === '*' || op === '-' || op === '+');
});
//Splits the test string at every character and returns only the characters i set to return

console.log(numbersTest);
console.log(operator);
//Logs the two new arrays to test they have worked
