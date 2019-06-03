// https://www.youtube.com/watch?v=D5ENjfSkHY4 

var arr = [1, [2, [3,[7,8]]]];

function flattenArray(array,result){
array.forEach(item => {
if(Array.isArray(item)){
flattenArray(item,result)
}
else {
result.push(item);
}
})
}

let res = [];
flattenArray(arr,res);
console.log(res);


