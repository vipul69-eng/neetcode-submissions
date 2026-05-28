class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        if(!nums.length) return []
        let l=0
        let r=nums.length-1
        while(l<r){
            let currSum=nums[l]+nums[r]
            if(currSum == target) return [l+1,r+1]
            if(currSum > target) r-=1
            else l+=1
        }
    }
}
