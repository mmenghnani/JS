Array.prototype.newReduce = function(func,accumulator){
    this.forEach(item=> {
        accumulator = func(accumulator, item);
    })

    console.log(accumulator)
}

var arr = [1,2,3];
arr.newReduce((x,y) => x*y,1);