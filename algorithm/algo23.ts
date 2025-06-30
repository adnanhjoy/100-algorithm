/*
Longest Harmonious Subsequence
We define a harmonious array as an array where the difference between its maximum value and its minimum value is exactly 1.
Given an integer array nums, return the length of its longest harmonious subsequence among all its possible subsequences.

#Example 1:
Input: nums = [1,3,2,2,5,2,3,7]
Output: 5
Explanation:
The longest harmonious subsequence is [3,2,2,2,3].

#Example 2:
Input: nums = [1,2,3,4]
Output: 2
Explanation:
The longest harmonious subsequences are [1,2], [2,3], and [3,4], all of which have a length of 2.

#Example 3:
Input: nums = [1,1,1,1]
Output: 0
*/




function findLHS(nums: number[]): number {
    let maxLen = 0;

    for (let i = 0; i < nums.length; i++) {
        let count = 0;
        let sub: number[] = [];

        for (let j = 0; j < nums.length; j++) {
            const diff = nums[j] - nums[i];
            if (diff === 0 || diff === 1) {
                sub.push(nums[j]);
                if (diff === 1) count++;
            }
        }

        if (count > 0 && sub.length > maxLen) {
            maxLen = sub.length;
        }
    }

    return maxLen;
};


console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7]));
console.log(findLHS([1, 2, 3, 4]));
console.log(findLHS([1, 1, 1, 1]));