//  Largest Number in Arrays
// Return an array consisting of the largest number from each provided sub-array. For simplicity,
//  the provided array will contain exactly 4 sub-arrays.
// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].


const array = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]

function largestOfFour() {
  let result = []

  for (let i = 0; i < array.length; i++) {
    let max = array[i][0]
    for (let x = 1; x < array[i].length; x++) {
      if (array[i][x] > max) {
        max = array[i][x]
      }
    }
    result[i] = max
  }
  return result;
}


console.log(largestOfFour(array));
  //Returns [5,27,39,1001]