/*
Reverse Integer

Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

#Example 1:
Input: x = 123
Output: 321

#Example 2:
Input: x = -123
Output: -321

#Example 3:
Input: x = 120
Output: 21
*/



function reverse(x: number): number {
    const isNegative = x < 0;
    let reversedStr = x.toString().split('').reverse().join('');
    let reversedNum = parseInt(reversedStr);

    if (reversedNum > 2 ** 31 - 1) return 0;

    return isNegative ? -reversedNum : reversedNum;
};



console.log(reverse(-123))