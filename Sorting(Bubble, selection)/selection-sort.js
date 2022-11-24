// // Selection Sort
const arraySelection = [1,5, 4, 9,  10, 0, 2, 3, 7]
function selectSort (arr){
    for( let i = 0 ; i<arraySelection.length; i++){
         let lowestNum = i
         for( let r=i+1 ; r<arraySelection.length; r++){
            if (arraySelection[r]<arraySelection[lowestNum]){
                lowestNum=r
            }
         }
         if( lowestNum !== i){
            // swap
            [arraySelection[i], arraySelection[lowestNum] ] = [arraySelection[lowestNum], arraySelection[i]]
            // [a,b]=[b,a]
         }
    }
    return arraySelection
}
console.log(selectSort(arraySelection))



