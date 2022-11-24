// Find the longest Word in a String
// Return the length of the longest word in the provided sentence.
// Your response should be a number. For these algorithms you are allowed to use the split() method.

//get the length of the word 
//result it is a number

const string = "The quick brown fox jumped over the lazy dog";

function findLongestWord(str){
split = string.split(" ")

let result = 0
for( let i=0 ; i<split.length; i++){

result = (split[i].length > result) ? split[i].length : result ;

}
return result
}

const l =  findLongestWord(string) 
console.log(l) //should return 6.

// findLongestWord("May the force be with you")  //should return 5.