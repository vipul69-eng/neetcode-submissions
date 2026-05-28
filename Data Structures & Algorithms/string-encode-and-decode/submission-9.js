class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
 encode(strs) {
    if(!strs.length) return "/"
    return strs.join("😀")
}

 decode(str) {
    if(str == "/") return []
    return str.split("😀")
}
}
