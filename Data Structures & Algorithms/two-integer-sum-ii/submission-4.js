class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
if(!nums.length) return []
for(let i = 0; i < nums.length; i++){
    let curr = nums[i]
    let search = nums.slice(i+1)  
    let low = 0
    let high = search.length - 1

    while(low <= high){
        let mid = low + Math.floor((high - low) / 2)
        if(search[mid] == (target - curr)) return [i+1, (i+1) + mid + 1]  
        if(search[mid] > (target - curr)) high = mid - 1
        else low = mid + 1
    }
}
    }
}
