let arr = [1,3,5,7,11];

let k = 2;
// Rotate the array k times 

for(let i=0;i<k;i++){
    let j = arr.shift();
    arr.push(j);
}
console.log(arr);

// This can also be implemented by rewriting reverse function for array prototype
// reverse all elements from 0 to k-1
// reverse all elements from k to n-1
// reverse the whole array.

