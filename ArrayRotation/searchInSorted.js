/* Note that at any point of time, half of the array will always be sorted */

var search = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    while(start <= end){
      let mid = Math.floor((start+end)/2);
        if(nums[mid] === target){
          return mid;
        }
        if(nums[mid] <= nums[end]){
          if(target > nums[mid] && target <= nums[end]){
            start = mid + 1;
          }
          else {
            end = mid - 1;
          }
        }
      else {
        if(target >= nums[start] && target < nums[mid]){
          end = mid - 1; 
        }
        else {
          start = mid + 1;
        }
      }
     }
    return -1
  }  


  console.log(search([4,5,6,7,0,1,2],0))