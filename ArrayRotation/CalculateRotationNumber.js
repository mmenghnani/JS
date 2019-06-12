let arr = [4,5,6,7,8,9,1,2];

function numberOfRotations(arr){
    return helper(arr,0,arr.length-1);
}

function helper(arr,lo,hi){
    while(hi > lo){
        mid = Math.floor((lo+hi)/2);
        if(arr[mid]>arr[hi]) {
            lo = mid+1;
        }
            else hi=mid;
    }
    let rot=lo;
    console.log(rot);
}

numberOfRotations(arr);