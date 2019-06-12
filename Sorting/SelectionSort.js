// Repeatedly find the minimum element (considering ascending order) from unsorted part 
// and put it at the beginning. The algorithm maintains two subarrays in a given array.

// 1) The subarray which is already sorted.
// 2) Remaining subarray which is unsorted.

function SelectionSort(arr){
    let min_index;
    let len = arr.length;
    for(let i=0;i<len-1;i++){
        min_index = i;
        for(let j = i + 1;j < len;j++){
            if(arr[j] < arr[min_index]){
                min_index = j;
            }
            [arr[min_index],arr[i]] = [arr[i],arr[min_index]]
        }
    }
    console.log(arr);
}

let array = [4,3,2,1];

SelectionSort(array);