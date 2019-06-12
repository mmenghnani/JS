// Use 2 pointers, put 1 on the left and put 1 on the right. move the lesser one

var maxArea = function(height) {
    let temp=0,left = 0, right = height.length-1,max=0;
    while(left <= right){
        temp = (right-left)* Math.min(height[left],height[right])
        if(height[left]>height[right]){
            right--;
        }
        else {
            left++;
        }
        max = Math.max(temp,max);
    }
    return max;
};

let arr = [1,8,6,2,5,4,8,3,7];

console.log(maxArea(arr));