/**
 * The difference is that apply lets you invoke the function with arguments as an array; 
 * call requires the parameters be listed explicitly. A useful mnemonic is "A for array 
 * and C for comma."
 * 
 */
var obj = {
    num : 2
}

var addToThis = function(a){
    return this.num + a
}

//Functionname.call(context, arguments)

console.log(addToThis.call(obj, 5))

// For apply, the arguments are passed as an array
console.log(addToThis.apply(obj, [5]))


//bound
var bound = addToThis.bind(obj);
console.log(bound(5));