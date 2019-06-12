let arr1 = [9,14,6,2,11];
let arr2 = [8,4,7,20]

function count(arr){
    let countOdd = 0;
    let countEven = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i] %2 === 0){
            countOdd++;
        }
        else {
            countEven++;
        }
    }
    return [countOdd, countEven]
}

let [oddNo1,evenNo1] = count(arr1);
let [oddNo2,evenNo2] = count(arr2);

console.log('No. of pairs with even sum : ' + parseInt(Math.min(oddNo1,oddNo2)+ Math.min(evenNo1,evenNo2)));
console.log('No. of pairs with odd sum : ' + parseInt(Math.min(oddNo1,evenNo2)+ Math.min(oddNo2,evenNo1)));