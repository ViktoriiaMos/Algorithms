// Search and Replace
// Perform a search and replace on the sentence using the arguments provided and return the new sentence.
const string = "let us go to store"
const before = "store"
const after = "mall"
function myReplace(string, before, after) {
    let stringToArray = string.split(" ")
    if (before[0] === before[0].toUpperCase()) {
        after[0] = after[0].toUpperCase()
    } else {
        after[0] = after[0].toLowerCase()
    }
    for (let i = 0; i < stringToArray.length; i++) {
        if (stringToArray[i] === before) {
            stringToArray[i] = after
        }
    }
    string = stringToArray.join(" ")
    return string;
}
 console.log(myReplace(string, before, after))