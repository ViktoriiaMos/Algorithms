// //8. Number to String

// Write a program that takes an array of numbers and turns the negative values to strings. For example, for array X = [1,-4,0,-1] the output should be [1,'Turing,0,'Turing'].
var x =[1, -4, 0 , -1];
for(i = 0; i< x.length; i++){
    if(x[i] < 0){
x[i] = 'toring';
    }
}
console.log(x)