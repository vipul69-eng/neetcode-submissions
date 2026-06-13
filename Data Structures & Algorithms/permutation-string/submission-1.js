class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
            let hashS1={}
    for(let i=0;i<s1.length;i++){
        hashS1[s1[i]] = hashS1[s1[i]] ? hashS1[s1[i]] + 1 : 1
    }
    let l=0
    let r=s1.length-1
    while(r<s2.length){
        let tempHash = structuredClone(hashS1)

        for(let i=l;i<=r;i++){
            if(!tempHash[s2[i]]){
                break
            }
            else{
                tempHash[s2[i]]--;
            }
        }
        if(Object.values(tempHash).every(value => value === 0)) return true
        l+=1
        r+=1
    }
    return false
    }
}
