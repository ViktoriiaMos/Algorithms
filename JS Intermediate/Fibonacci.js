// //4. Fibonacci

// For a fibonacci sequence starting at 0 and 1 add up all the values below 1,000,000.

// A Fibonacci sequence is an infinite series of numbers that is created by adding the last two numbers in the series. A series would start with the numbers 0 and 1 in place, followed by 1 (0+1), 2 (1+1), 3 (1+2), 5 (3+2), etc.
//0 1 1 2 3 5 8 13 21...
//1. start counting from 0 (z)
//2. the number 1 (v)
//3. the third variable to contain the adding operator
// let z = 0;
// let v = 1;
// let r = 0;
//while (z < 10000){
    // z=r+v;
    // r=v;
    // v=z;
//       console.log(z);
// }
let firstNumber = 0;
let secondNumber = 1;
let result = 0;

for(let i=0; i <= 1000000; i++){
    console.log(firstNumber)
    result = firstNumber + secondNumber;
    firstNumber = secondNumber;
    secondNumber = result;
   
}