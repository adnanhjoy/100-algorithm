/*
1. Write a function that returns the sum of two numbers.
2. Write a function that returns the sum of all numbers regardless of # of params.

Example
For param1 = 1 and param2 = 2, the output should be add(param1, param2) = 3.

Input/Output

[time limit] 400ms (js)
[input] integer param1


Hints 
Arithmetic Operators
Rest Operators
forEach()
*/


const sum = (params1: number, params2: number) => {
  return params1 + params2
}


const totalSum = (...params: number[]) => {
  let total = 0;
  params.forEach(value => {
    total += value;
  })
  return total
}

console.log(sum(2,3))
console.log(totalSum(1,2,3))