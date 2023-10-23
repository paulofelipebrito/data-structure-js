// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  const reversedArr = str.split('').reduce((rev, char) => char + rev, '');

  let isPalindrome = false;

  for(let i = 0; i < str.length; i++){
    if(str[i] === reversedArr[i]){
      isPalindrome = true
    } else {
      isPalindrome = false
    }
  }

  return isPalindrome;
}

const isPalindrome = palindrome("123321")

module.exports = palindrome;
