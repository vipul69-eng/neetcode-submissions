class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
    const N=9
    const rowSet = new Array(N).fill(null).map(() => new Set())
    const colSet = new Array(N).fill(null).map(() => new Set())
    const boxSet = new Array(N).fill(null).map(() => new Set())
    
    for(var r=0; r<N; r++){
        for(var c=0; c<N; c++){
            const val=board[r][c]
            
            if(val == ".") continue
            
            if(rowSet[r].has(val)) return false
            rowSet[r].add(val)
            
            if(colSet[c].has(val)) return false
            colSet[c].add(val)
            
            const idx = (Math.floor(r/3))*3+(Math.floor(c/3))
            if(boxSet[idx].has(val)) return false
            boxSet[idx].add(val)
        }
    }
    return true
    }
}
