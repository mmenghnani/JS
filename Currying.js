//Currying is a process in functional programming in which we can transform a function with multiple 
//arguments into a sequence of nesting functions. It returns a new function that expects the next argument inline.

// https://www.youtube.com/watch?v=iZLP4qOwY8I

// let dragon = (name,size,element) => 
// name + ' is a ' + 
// size + ' dragon that breathes ' + 
// element + '!';
// console.log(dragon('superman','large','nitrogen'))

//With currying

// First class functions - Being able to assign functions to a variable or pass them as arguments 
// Higher Order functions - function which accept other functions as arguments.
// Pure functions - A pure function is a function where the return value is only determined by its arguments
// without any side effects.

let dragon = 
name =>
    size => 
        element =>
                name + ' is a ' + 
                size + ' dragon that breathes ' + 
                element + '!';


console.log(dragon('superman')('large')('nitrogen'));
