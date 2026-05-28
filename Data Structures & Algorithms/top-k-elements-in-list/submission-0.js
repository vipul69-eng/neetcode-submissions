class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const counter = {}
        for(var num of nums){
            if(counter[num]) counter[num]++;
            else counter[num]=1;
        }
        const pq = new PriorityQueue((a,b)=>counter[b]-counter[a])

        for(var num in counter){
            pq.enqueue(Number(num))
        }

        const result = []

        for(var i=0;i<k;i++){
            result.push(pq.dequeue())
        }

        return result
    }
}
