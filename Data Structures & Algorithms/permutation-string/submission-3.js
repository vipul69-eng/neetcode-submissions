class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;
            let hashS1=new Array(26).fill(0)
    let hashS2=new Array(26).fill(0)
    
    // compute inital hash
    for(let i=0;i<s1.length;i++){
        hashS1[s1[i].charCodeAt(0)-97]++
        hashS2[s2[i].charCodeAt(0)-97]++
    }

    let l=0
    let r=s1.length-1

    while(r<s2.length-1){
        if(hashS2.join("")==hashS1.join("")) return true  
        hashS2[s2[l].charCodeAt(0)-97]--;
        l++;
        r++;
        hashS2[s2[r].charCodeAt(0)-97]++;
    }
    return hashS2.join("")==hashS1.join("")
    }
}
