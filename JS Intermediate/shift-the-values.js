// //2. Shift the Values

// Given any array X, for example [2,1,6,4,-7], create an algorithm that shifts 
//each number by one to the front. When your program is done the output for 
//array [2,1,6,4,-7] should be [-7,4,6,1,2].
var xy = [2, 1, 6 ,4, -7]
var xy2 = [];
limit = xy.length-1;

for(let i = 0; i < xy.length; i++){

xy2[limit-i] = xy[i];

}
console.log(xy);
console.log(xy2);