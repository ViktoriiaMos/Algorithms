//3. Sum of Printed Numbers

// let j=0;
// for(let i=0; i<136; i++){
//    j = i + j;
//     console.log(`Number: ${i} Sum: ${j}`  )
// }

let sum = 0;
for(let i = 0; i < 136; i++)
{
    sum += i;
    console.log(`Number: ${i} Sum: ${sum}`  )
}
