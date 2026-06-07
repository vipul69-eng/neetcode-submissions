class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
 characterReplacement(s, k) {
    let l = 0
    let maxL = 0
    let charMap = new Array(26).fill(0)

    for (let r = 0; r < s.length; r++) {
        charMap[s[r].charCodeAt(0) - 65]++         // add right char

        const maxOccur = Math.max(...charMap)
        const len = r - l + 1

        if (len - maxOccur <= k) {
            maxL = Math.max(maxL, len)              // fix 1: track length
        } else {
            charMap[s[l].charCodeAt(0) - 65]--     // fix 2: remove left char
            l++
        }
    }

    return maxL
}
}
