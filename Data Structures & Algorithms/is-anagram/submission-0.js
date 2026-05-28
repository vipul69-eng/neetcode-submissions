class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length) return false
        const charSet = new Array(26).fill(0)
        for(var i=0; i<s.length; i++){
            charSet[s[i].charCodeAt(0)-97]++;
            charSet[t[i].charCodeAt(0)-97]--;
        }

        for(var count of charSet){
            if(count!=0) return false
        }
        return true
    }
}
