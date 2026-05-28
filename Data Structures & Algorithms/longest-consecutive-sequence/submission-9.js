class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
     if(!nums.length) return 0
    const numSet = new Set(nums)
    let lcs=1
    
    for(const val of numSet){
        if(numSet.has(val-1)) continue
        else{
            let curr=val
            let cs=1
            while(numSet.has(curr+1)){
                cs+=1
                curr+=1
            }
            lcs=Math.max(lcs,cs)
        }
    }
    return lcs
    }
}
