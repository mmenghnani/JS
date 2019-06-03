var marks = {};
var marks = new Object();
var marks = {physics: 98, maths:95, chemistry: 91}; //its like a map with a key-value pairs.

//Converts object into JSON format.
JSON.stringify(marks) 

//Get Object from string.
JSON.parse('{"physics":98,"maths":95,"chemistry":91}');

// Example 1
let highScore = 0;
for (i of Object.keys(marks)) {
    if (marks[i] > highScore)
       highScore = marks[i];
 }
 console.log(highScore);

// Example 2
console.log(marks.hasOwnProperty('physics')); // True
console.log(marks.hasOwnProperty('greek')); // False

// Example 3
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
var newCar = new Car('Honda', 'City', 2007);
console.log(newCar instanceof Car); // returns true

// Example 4 - Object.freeze() -> Freeze an object so the properties cant be modified
// Object.isFrozen() -> returns true if the object is freeze.
// Object.seal -> does not allow addition/deletion of properties but modification of existing is allowed.
// Object.isSealed

