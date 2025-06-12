/*
Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime

Example
sumAllPrime(10) should return 17
sumAllPrime(977) should return 73156

Hints
push()
reduce()
*/


const sumAllPrime = (number: number) => {
    let prime: number[] = [];

    for (let i = 2; i <= number; i++) {
        let isPrime = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            prime.push(i)
        }
    }

    const totalSum = prime.reduce((x, y) => x + y, 0);

    return totalSum;
}

console.log(sumAllPrime(10));
console.log(sumAllPrime(977));
