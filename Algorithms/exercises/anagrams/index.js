// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  if(stringA.length !== stringB.length){
    return false;
  }

  let arrA = stringA.trim().split("");
  let arrB = stringB.trim().split("");

  let isAnagram = true;
  for(let i = 0; i < arrA.length; i ++){
    if(arrA.filter((el) => el === arrA[i]).length !== arrB.filter((el) => el === arrA[i]).length){
      isAnagram = false
    }
  }

  return isAnagram;
}

const test = anagrams('rail safety', 'fairy tales')

module.exports = anagrams;
