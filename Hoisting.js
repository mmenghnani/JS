
//VARIABLE HOISTING
// Output : not defined
// console.log(noSuchVariable); 

// Output: undefined because javascript looks ahead and hoists all the declarations to the top  
// console.log(declaredLater);
// var declaredLater = 'test';

// var name = "Baggins";
// (function () {
//     // Outputs: Original name was undefined "because name is defined again in the inner scope. 
//     //If it was not there then it would have printed Original name was Baggins"
//     console.log("Original name was " + name);
//     var name = "Underhill";
//     // Outputs: "New name is Underhill"
//     console.log("New name is " + name);
// })();

//FUNCTION HOISTING
// 2 ways -> function expressions and function declarations
// Function expressions are not hoisted
// Output : square is not a function
// console.log(square(5))
// var square = function(n){ return n*n }

// Function declarations are hoisted
// Output : 25
// console.log(square(5))
// function square(n){ return n*n }