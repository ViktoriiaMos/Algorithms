// Sum All Primes
// Sum all the prime numbers up to and including the provided number.
//function sumPrimes take one argument
//inz a number
//don't count one
// Function => loop  => check if the number is a prime  %number
//inz a result => sum all prime number
const x = 14
function sumPrimes(num) {
    let sum = 0;
    function checkPrime(i) {
        for (let p = 2; p < i; p++) {
            if (i % p === 0) {
                return false
            }
        }
        return true
    }
    for (let i = 2; i <= num; i++) {
        if (checkPrime(i)) {
            sum += i
        }
    }
    return sum;
}
console.log(sumPrimes(x));

