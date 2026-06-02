class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
maxProfit(prices) {
        let buy=Infinity
        let profit=0
        for(var price of prices){
            if(price<buy){
                buy = price
            }else{
                profit=Math.max(profit,price-buy)
            }
        }
        return profit
    }
}
