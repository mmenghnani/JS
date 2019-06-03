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

