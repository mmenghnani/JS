// Bubble Sort is the simplest sorting algorithm 
// that works by repeatedly swapping the adjacent 
// elements if they are in wrong order.

function BubbleSort(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-i;j++){
            if(arr[j] > arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }
    console.log(arr);
}

let array = [4,3,2,1];

BubbleSort(array);