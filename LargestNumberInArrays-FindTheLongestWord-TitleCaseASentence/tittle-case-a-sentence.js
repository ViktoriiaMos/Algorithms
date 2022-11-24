// Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize on connecting words like "the" and "of".
// For this algorithm, you can use the split() method.

//function to capitalize every letter 
//use split 

const sentence = "I'm a little tea pot"

function titleCase(str){
let capital = str.split(" ")

let result = capital.map(capitalLetter => capitalLetter[0].toUpperCase()+ capitalLetter.toLowerCase().slice(1, capitalLetter.length))

result =  result.join(" ")
return result

}

 
console.log(titleCase(sentence))//should return "I'm A Little Tea Pot".
// titleCase("sHoRt AnD sToUt")      //should return "Short And Stout".