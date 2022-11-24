// //5. Remove the Negative

// Given any array X, for example [1,-2,4,1], remove the negative numbers, 
//so that the output becomes: [1,4,1].
let x = [1, -2, 4, 1, -5, -9]
for(let i = 0; i < x.length;){
if(x[i] < 0){
x.splice(i, 1); //1 how many item you whant to delite 
} else {
    i++;
}

}
console.log(x)