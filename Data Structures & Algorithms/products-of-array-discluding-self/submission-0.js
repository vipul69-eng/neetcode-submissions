class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
          function  _pre(nums){
        const result = []
        
        for(var i in nums){
            if(i==0){
                result[i]=1
            }
            else{
                result[i]=nums[i-1]*result[i-1]
            }
        }
        return result
    }

       function _post(nums){
            const result = new Array(nums.length).fill(0)
            for(var i=nums.length-1;i>=0;i--){
                if(i==nums.length-1){
                    result[i]=1
                }
                else{
                    result[i]=nums[i+1]*result[i+1]
                }
            }
            return result
        }
        const pre = _pre(nums)
        const post = _post(nums)
        const result = []
        for(var i in pre){
            result[i] = pre[i] * post[i]
        }
        return result
    }
}
