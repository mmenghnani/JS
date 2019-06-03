/**
 * The reduce() method executes a reducer function (that you provide) on each element of the array, 
 * resulting in a single output value.
 */

let arr = [1, 2, 3];

let sum = arr.reduce((accu,curr) => {
  return accu + curr;
});

console.log(sum);