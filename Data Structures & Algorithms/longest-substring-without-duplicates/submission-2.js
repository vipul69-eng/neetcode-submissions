class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
lengthOfLongestSubstring(s) {
    if(!s) return 0
    
    let map = new Map()
    let maxLen=0
    for(let i=0;i<s.length;i++){
        if(!map.has(s[i])){
            map.set(s[i],i)      
        }else{
            i=map.get(s[i])
            map.clear()
        }
        maxLen = Math.max(maxLen, map.size);
    }
    return maxLen
}
}
