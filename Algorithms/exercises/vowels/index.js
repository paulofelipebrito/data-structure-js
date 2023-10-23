// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const v = ["a", "e", "i", "o", "u"]
  const arr = str.split("")

  let count = 0

  v.forEach((letter) => {
    const number = arr.filter((el) => el.toLowerCase() === letter).length;
    count += number
  })

  return count;
}

const test = vowels("aeiou")

module.exports = vowels;
