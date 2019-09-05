//Testing readline

let test = require('readline');
//importing the readline library

let inputOne = test.createInterface({
  input: process.stdin,
  output: process.stdout
});
//opening an interface object

inputOne.question('Does this work', function(answer) {
  console.log(answer);
  inputOne.close();
});
//Takes an input and logs it to console
