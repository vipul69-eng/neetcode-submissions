class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length==0) return 0
    let ls=1
    for(var i of nums){
        let cs=1
        let curr_num=i
        for(let j=0; j<nums.length;j++){
            if(curr_num+1 == nums[j]){
                cs+=1
                curr_num+=1
                j=-1
            }
        }
        ls=Math.max(ls,cs)
    }
    return ls
    }
}
