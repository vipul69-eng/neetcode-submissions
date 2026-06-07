class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
lengthOfLongestSubstring(s) {
    const visitedSet = new Set()
    let l = 0
    let r = 0
    let maxL = 0                       

    while (r < s.length) {
        while(visitedSet.has(s[r])){
            visitedSet.delete(s[l])
            l++
        }
        visitedSet.add(s[r])
        maxL = Math.max(maxL, r-l+1)
        r+=1
    }

    return maxL
}
}
