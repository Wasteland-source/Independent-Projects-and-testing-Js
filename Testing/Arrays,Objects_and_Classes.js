//Testing Arrays and running through them with loops

const arrayOne = ['Leslie', 'Ben', 'Ron', 'Tom', 'April', 'Andy', 'JerryLarryGaryTerry', 'Ann', 'Chris'];
//Declaring an array
/*
arrayOne.splice(7,8);
//Taking out specific parts of arrayOne


for (let pr = 0; pr < arrayOne.length; pr++) {
  console.log(arrayOne[pr]);
};
//Runs through arrayOne and logs everything within it using for loop

arrayOne.forEach(function(names){
  console.log(names)
})
//Running a code block for every string in the array
*/

let parksCrew = {
  parksDepartment: {
    'Deputy Director': {
      name: 'Leslie Knope',
      'Favourite Food': 'Waffles'
    },
    'Director': {
      name: 'Ron Swanson',
      'Favourite Food': 'Steak'
    },
    'Administrator': {
      name: 'Tom Havorford',
      'Favourite Food': 'Swag'
    },
    'Permit Security': {
      name: 'Donna Meagle',
      'Favourite Food': 'Drama'
    },
    'Deputy Director of Animal Control/Demon': {
      name: 'April Ludgate',
      'Favourite Food': 'Souls'
    },
    'Shoe shinest/Assistant to various/Johnny Karate': {
      name: 'Andy Dwyer',
      'Favourite Food': 'Andy\'s skittle suprise'
    },
    'Office Manager/Mayor of Pawnee': {
      name: 'Gary,Jerry,Larry,Terry Gergich',
      'Favourite Food': 'Gale\'s pie'
    },
  },
  Other: {
    'Audit Specialist/Accountant/City Manager': {
      name: 'Ben Wyatt',
      'Favourite Food': 'Calzones'
    },
    'Audit Specialist/City Manager': {
      name: 'Chris Traeger',
      'Favourite Food': 'Excerise'
    },
    'Nurse/PR Director of Health Department': {
      name: 'Ann Perkins',
      'Favourite Food': '*See SO\'s favourite food'
    }
  }
};
//A nested object, Follow left to right and down

function simpleObjectCreator(name, favourite) {
  return {
    name: name,
    'Favourite Food': favourite
  }
};
//A function that creates objects
/*
const jeanRalphio = simpleObjectCreator('Jean-Ralphio', 'Drugs');
//Calls the creator function and applies it to the name of the variable

console.log(jeanRalphio.name);
console.log(jeanRalphio['Favourite Food']);
//Logs jeanRalphio to check it works
*/
for (let title in parksCrew.parksDepartment) {
  console.log(`${title} : ${parksCrew.parksDepartment[title].name}`);
};
for (let titleOther in parksCrew.Other) {
  console.log(`${titleOther} : ${parksCrew.Other[titleOther].name}`);
};
//The variable declared in the for loop runs through the location shown after the 'in' keyword. Interpolating is used to declare the location of the looped variable and any other strings within the object

class SideCharacter {
  constructor(name, favouriteFood) {
    this.name = name,
      this.FavouriteFood = favouriteFood
  }
}
//A super class used to create objects and pass down the parameters to child classes

class MinorCharacter {
  constructor(name, favouriteFood) {
    super(name)
  }
}
//A child class calling the super class and using it's passed down parameters

const jeanRalphio = new SideCharacter('Jean Ralphio', 'Drugs');
console.log(`${jeanRalphio.name} : ${jeanRalphio.FavouriteFood}`)
//Creating a new object and logging the Interpolation of that object
