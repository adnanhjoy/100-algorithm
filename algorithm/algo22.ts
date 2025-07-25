/*
Pascal's Triangle

Given an integer numRows, return the first numRows of Pascal's triangle.
In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

#Example 1:
Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

#Example 2:
Input: numRows = 1
Output: [[1]]
*/


function generate(numRows: number) {

    const triangle: number[][] = [];

    for (let i = 0; i < numRows; i++) {
        const row: number[] = [];
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                row.push(1);
            } else {
                row.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
            }
        }
        triangle.push(row);
    }

    return triangle;
};


console.log(generate(5));