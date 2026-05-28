class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
    let f=""
    for(var c of s){
        const charCode = Number(c.charCodeAt(0))
        if((charCode>=65 && charCode<=90) || 
            (charCode>=97 && charCode<=122) || 
            (charCode>=48 && charCode<=57)){
            f+=c
        }
    }
    f=f.toLowerCase()
    console.log(f)
    let _s=0
    let _e=f.length-1
    while(_s<_e){
        if(f[_s] != f[_e]) return false
        _s+=1
        _e-=1
    }
    return true
    }
}
