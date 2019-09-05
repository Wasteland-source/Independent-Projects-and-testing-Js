//Loop testing

/*
for (n=0; n<=7; n++) {
 console.log('Test');
}
*/



let rN = Math.ceil(Math.random() * 11); //Generates random number

while (rN <= 10) {

  rN = Math.ceil(Math.random() * 11); //Regen number

  switch (rN) { //Log's phrases to console until '11' is gened
    case 1:
      console.log('It\'s a 1');
      break;
    case 2:
      console.log('It\'s a 2');
      break;
    case 3:
      console.log('It\'s a 3');
      break;
    case 4:
      console.log('It\'s a 4');
      break;
    case 5:
      console.log('It\'s a 5');
      break;
    case 6:
      console.log('It\'s a 6');
      break;
    case 7:
      console.log('It\'s a 7');
      break;
    case 8:
      console.log('It\'s a 8');
      break;
    case 9:
      console.log('It\'s a 9');
      break;
    case 10:
      console.log('It\'s a 10');
      break;
    case 12:
      console.log('You are a fucking idiot');
      break;
    default:
      console.log('It\'s an 11');
      break;
  }
};
//A simple switch statement logging the loop output
