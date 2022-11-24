// 6. Get Average

// Given an array X, write a program that will return the average value of all elements in the array. For example, for array X = [2,1,3] your output should be 2.

var x =[2,1,3];
let sum = 0;
for(i = 0; i < x.length; i++){
sum = x[i] + sum;
}
console.log(sum/x.length);