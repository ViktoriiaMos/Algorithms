//5. Find Max
//Given an array X, write a program that would find the maximum value of the array. Your program should work also work with negative values (eg. X = [2,-3,-1]) and zero.
var arr = [2, -3, -1, 0, 12];
 var val = arr[0];

for(var i=1; i<arr.length; i++){
    if(arr[i]> val){
     val = arr[i];
    }
}
console.log(val);

// console.log(Math.max(...arr));