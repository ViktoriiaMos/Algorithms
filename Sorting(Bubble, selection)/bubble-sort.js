// Bubble Sort
const arraySort = [5, 1, 9 ,4, 3, 7]
// console.log(arraySort)
// console.log("+++++++++++++++++++++++++++++++++++++++++++++")
let temp;
for(let i =0; i< arraySort.length; i++){
    for( let j =0 ; j< (arraySort.length-i-1); j++){
        if(arraySort[j] > arraySort[j+1]){
            let temp = arraySort[j];
            arraySort[j]= arraySort[j+1]
            arraySort[j+1]= temp
        }
    }
}
console.log(arraySort)