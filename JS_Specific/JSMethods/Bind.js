// The bind() method creates a new function that, when called, has its this keyword set to the provided value, 
// with a given sequence of arguments preceding any provided when the new function is called.

var dog = {
    sound : 'woof',
    talk : function(){
        console.log(this.sound);
    }
}

//output : woof
dog.talk();

let talkFunction = dog.talk;
//output : woof
let boundFunction = talkFunction.bind(dog);
boundFunction();

//output : undefined
let unboundFunction = talkFunction;
unboundFunction();

