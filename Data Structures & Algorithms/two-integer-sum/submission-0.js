class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        if(!nums.length) return nums
        const hashMap = {}

        for(var i in nums){
            if (hashMap[target-nums[i]]){
                return [Number(i), Number(hashMap[target-nums[i]])]
            }
            hashMap[nums[i]] = i;
        }
    }
}
