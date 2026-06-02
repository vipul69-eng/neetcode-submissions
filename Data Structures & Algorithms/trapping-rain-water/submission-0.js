class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
 trap(height){
    let r=[0]
    for(var h=1;h<height.length;h++){
        if(h==height.length-1){
            r.push(0)
        }else{
            const maxL = Math.max(...height.slice(0,h))
            const maxR = Math.max(...height.slice(h))
            const _h = Math.min(maxL,maxR)-height[h]
            r.push(_h>0?_h:0)
        }
    }
    r = r.reduce((a,b)=>a+b)
    return r
}
}
