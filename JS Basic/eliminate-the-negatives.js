// //7. Eliminate the Negatives

// Given an array X, write a program that will remove all negative numbers 
//and replace them with a 0. For example, for array X = [2,-1,4,-3] 
//the output of your program should be [2,0,4,0].
var x =[2, -1, 4, -3]
for(let i = 0; i < x.length; i++){
    if(x[i] < 0){
x[i] = 0;
    }
}
console.log(x)