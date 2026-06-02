class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
 trap(height){
    let l=0
    let r=height.length-1
    let lmax=0
    let rmax=0
    let total=0
    while(l<r){
        if(height[l]<height[r]){
            if (lmax<=height[l]){
                lmax=height[l]
            }else{
            total+=lmax-height[l]
            }
            l+=1
        }
        else{
            if (rmax<=height[r]){
                rmax=height[r]
            }else{
            total+=rmax-height[r]
            }
            r-=1
        }
    }
    return total
}
}
