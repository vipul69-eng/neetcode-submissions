class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        if(!nums.length) return []
            const diffMap = new Map()
    for(let i=0;i<nums.length;i++){
        diffMap.set(target-nums[i],i)
    }
    for(let i=0;i<nums.length;i++){
        const curr=nums[i]
        if(diffMap.has(curr)&&diffMap.get(curr)!=i){
            const j = diffMap.get(curr)
            return [i+1,j+1]
        }
    }
    }
}
