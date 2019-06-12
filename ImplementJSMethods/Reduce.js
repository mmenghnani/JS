/**
 * The reduce() method executes a reducer function (that you provide) on each element of the array, 
 * resulting in a single output value.
 */

Array.prototype.newReduce = function(func,accumulator){
    this.forEach(item=> {
        accumulator = func(accumulator, item);
    })

    console.log(accumulator)
}

var arr = [1,2,3];
arr.newReduce((x,y) => x*y,1);