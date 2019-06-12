let arr1 = [1, 2, 3, 4, 5, 7, 11];
let arr2 = [2, 3, 4, 5, 6, 8, 12];
let k = 10;
let count = 0;
let set = new Set();
for(let i=0;i<arr1.length;i++){
    set.add(arr1[i]);
}
// We can apply the same logic for linkedList as well. If we have 2 linkedList and want to find out the pairs who equate to a given sum.
function numberOfPairsEqualtoSum(arr){
    for(let i=0;i<arr.length;i++){
        if(set.has(k-arr[i])){
            set.delete(k-arr[i]);
            count++;
        }
    }
}

numberOfPairsEqualtoSum(arr2);
console.log(count);

