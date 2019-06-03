/* Hello sir, My name is Mohit Menghnani. I am currently a UI engineer for the AppDirect Checkout UI Team.
 
My team is responsible for re-building the checkout flow for the AppDirect platform. We rewrote the 
 whole app in React & Redux. 
 
Most of my time is spent in building reusable components, code reviewing, writing unit & smoke tests or 
 contributing the already built components back to the AppDirect React Components library.   

*/

var threeSumClosest = function(nums, target) {
    var res;
    if (nums.length < 3) {
        return res;
    }
    var closest = Number.MAX_VALUE;
    nums = nums.sort((a, b) => a - b);
    for (var i = 0; i < nums.length; i++) {
        var lo = i + 1;
        var hi = nums.length - 1;
        while (lo < hi) {
            var sum = nums[i] + nums[lo] + nums[hi];
            var diff = Math.abs(target - sum)
            if (diff < closest) {
                res = sum;
                closest = diff;
            }
            while (lo < hi && nums[lo] === nums[lo + 1]) lo++;
            while (lo < hi && nums[hi] === nums[hi - 1]) hi--;
            lo++;
            hi--;
        }
    }
    return res;
};

console.log(threeSumClosest([1,1,1,0],-100));