class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
 characterReplacement(s, k) {
    let l=0
    let r=1
    let maxL=0
    while(r<s.length){
        let len=(r-l)+1
        let charMap = new Array(26).fill(0)
        let substr=s.substring(l,r+1)
        for(var char of substr){
            charMap[char.charCodeAt(0)-65]+=1
        }
        const maxOccur = Math.max(...charMap)
        if(substr.length-maxOccur<=k){
            maxL=Math.max(maxL,substr.length)
            r+=1   
        } else{
            l+=1
        }
    }
    return maxL
}
}
