//User input JavaScript section

let nameUser = ();
//Creates empty variable

function nameFunction() {

  nameUser = prompt('What is your name?');

  if (nameUser != null) {
    document.getElementById('output').innerHTML = 'I\'m going to kill and eat you ' + nameUser;
  }
};
//Brings up a prompt box with a question and adds it to the variable