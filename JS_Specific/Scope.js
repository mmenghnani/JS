//ES5 - Variables were function scoped.
//ES6 - Variables are block scoped. both let and const.
//let and const are not subject to hoisting.

// Example 1
function foo() {
    var bar = 'hello';
    console.log(bar);
  }
  foo(); // prints hello
console.log(bar) // bar is not defined because bar does not exist outside the scope of function.


// Example 2
function foo(){
    if(false){
        var bar = 'hello';
    }
    console.log(bar)
}

foo(); //prints undefined because of hoisting. the declaration is moved to the top.


// Example 3
var a = 10;

function Foo() {
  if (true) {
    var a = 4;
  }

  console.log(a); // alerts '10' because the 'let' keyword
}
Foo();


