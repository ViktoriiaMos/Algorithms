///Check for Palindromes
// Declare a function isPalindrome(str) that takes a string as an input.

// Return true if the given string is a palindrome. Otherwise, return false.


// program to check if the string is palindrome or not

function isPalindrome(str) {

    // loop through half of the string
   for (let i = 0; i < str.length / 2; i++) {

       // check if first and last string are same
       if (str[i] !== str[str.length - 1 - i]) {
           return 'It is not a palindrome';
       }
   }
   return 'It is a palindrome';
}

// take input
console.log(isPalindrome('kayak'))