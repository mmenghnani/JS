// countUniqueValues in an array
// sorted array and you need to count the unique values in the array

function countUniqueValues(arr){
    if(arr.length === 0) return 0;
    let firstPointer = 0;
    for(let i=1;i<arr.length;i++){
        if(arr[firstPointer] !== arr[i]){
            firstPointer++;
            arr[firstPointer] = arr[i]; //setting the value of firstPointer to be the different element value
        }
    }
    return firstPointer+1;
}

console.log(countUniqueValues([-2,-1,-1,0,1]));
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]));