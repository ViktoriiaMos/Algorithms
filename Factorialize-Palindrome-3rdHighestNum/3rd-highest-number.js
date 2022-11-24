// 3rd highest number in the array.

// Having an array of numbers, write an algorithm that will return the 3rd highest number in the array. 
// Your algorithm should do only one iteration of the array (just one for/while loop).

const array1 = [3,5,7,1,9,11,100,4,500,200]
 // Initialize first, second and third Largest element
var first = array1[0], second, third;
function thirdLargest()
{
    // Traverse array elements to find the third Largest
    for (var i = 1; i < array1.length; i ++)
    {
        /* If current element is greater than first,
        then update first, second and third */
        if (array1[i] > first)
        {
            third = second;
            second = first;
            first = array1[i];
        }
  
        /* If arr[i] is in between first and second */
        else if (array1[i] > second)
        {
            third = second;
            second = array1[i];
        }
  
        /* If arr[i] is in between second and third */
        else if (array1[i] > third)
            third = array1[i];
    }
  
   
}
thirdLargest();
console.log(third);