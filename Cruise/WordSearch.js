/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 var exist = function(board, word) {
    
    // Base case
    if (!board || board.length === 0) {
       return false;
    }

    checkAtCurrentChar(board, word, 0, 0, 0);
        
    // for (let i=0; i<board.length; i++) {
    //     for (let j=0; j<board[0].length; j++) {
    //         if (checkAtCurrentChar(board, word, i, j, 0)) {
    //             return true;
    //         }
    //     }
    // }
    
    // return false;
};


var checkAtCurrentChar = function(board, word, row, column, currentChar) {
  
    let stack = [];
    let visited = JSON.parse(JSON.stringify(board));

    // Fill it with false
    for (let row of visited) {
        row = row.fill(false);
    }

    stack.push()

    while (stack.length > 0) {

    }

}

console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED"));


// if (currentChar === word.length-1) {
//     return true;
// }
    
// if (word.charAt(currentChar) === board[row][column]) {

//     currentChar++;

//     // Check Top
//     if (row-1 >= 0) {
//         if (word.charAt(currentChar) === board[row-1][column]) {
//             checkAtCurrentChar(board, word, row-1, column, currentChar);
//         }
//     }

//     // Check Bottom
//     if (row+1 < board.length) {
//         if (word.charAt(currentChar) === board[row+1][column]) {
//             checkAtCurrentChar(board, word, row+1, column, currentChar);
//         }
//     }

//     // Check Left
//     if (column-1 >= 0) {
//         if (word.charAt(currentChar) === board[row][column-1]) {
//             checkAtCurrentChar(board, word, row, column-1, currentChar);
//         }
//     }

//     // Check right
//     if (column+1 < board[0].length) {
//         if (word.charAt(currentChar) === board[row][column+1]) {
//             checkAtCurrentChar(board, word, row, column+1, currentChar);
//         }
//     }
// } else {
//     return false;
// }