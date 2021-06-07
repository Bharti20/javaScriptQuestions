var twoSum = function(nums, target) {
    let i =0
    let array = []
    while(i<nums.length) {
        let var1 = 1
        while(var1<nums.length){
             if (i !=var1) {
                if (nums[i] + nums[var1] ==target) {
                    array.push(i)
                    array.push(var1)
                    return array
                }
             }
             var1++
        }i++
       
    }
    
    
};
console.log(twoSum([2,5,5,15], 10))