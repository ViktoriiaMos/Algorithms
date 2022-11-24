// Sum All Numbers in a Range
// We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them


const sum = [10,5]   // => 1+2+3+4 = 10

function sumAll(arr) {
  let result = 0 

  if(sum[0]>sum[1]){
    for( i=sum[1]; i<=sum[0]; i++){
      result = i+result
    }
  }else{
    for( i=sum[0]; i<=sum[1]; i++ ){
  result = i+result
}
  }


  return result ;
}


//The lowest number will not always come first.

console.log(sumAll(sum))  //should return 10.
// sumAll([4, 1])  //should return 10.
// sumAll([5, 10]) //should return 45.