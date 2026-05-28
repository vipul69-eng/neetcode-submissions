class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const hashMap = {}
        const result = []
        for(var str of strs){
            const charSet = new Array(26).fill(0)
            for(var c of str){
                charSet[c.charCodeAt(0)-97]++;
            }
            if(hashMap[charSet]){
                hashMap[charSet].push(str)
            }
            else{
                hashMap[charSet] = [str]
            }
        }

        for(const [_, value] of Object.entries(hashMap)){
            result.push(value)
        }
        return result
    }
}
