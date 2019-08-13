function averagePair(arr,target){
    // add whatever parameters you deem necessary - good luck!
    if(arr.length < 2){
        return false;
    }
    let obj = {};
    for(let i=0;i<arr.length;i++){
        if(obj[target*2-arr[i]]){
            return true;
        }
        else obj[arr[i]] = i;
        console.log(obj);
    }
    return false;
  }

  console.log(averagePair([1,2,3],2.5));