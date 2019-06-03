var dog = {
    sound : 'woof',
    talk : function(){
        console.log(this.sound);
    }
}

//dog.talk();

let talkFunction = dog.talk;
//output : woof
let boundFunction = talkFunction.bind(dog);
boundFunction();

//output : undefined
let unboundFunction = talkFunction;
unboundFunction();

