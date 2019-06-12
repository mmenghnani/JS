var maxSubArray = function(nums) {
  let max_so_far = nums[0];
  let curr_max = nums[0];
  
  for(let i=0;i<nums.length;i++){
      curr_max = Math.max(nums[i],curr_max+nums[i]);
      max_so_far = Math.max(curr_max,max_so_far);
  }
  return max_so_far;
};

let arr = [-2,1,-3,4,-1,2,1,-5,4];

console.log(maxSubArray(arr));