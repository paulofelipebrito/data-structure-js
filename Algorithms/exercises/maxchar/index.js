// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let maxChart = "";
  let maxCount = 0;

  for(let i = 0; i < str.length; i++) {
    const numberOfTimes = str.split("").filter((el) => el === str[i]).length;

    if(numberOfTimes > maxCount) {
      maxCount = numberOfTimes;
      maxChart = str[i]
    }
  }

  return maxChart;
}

const max = maxChar("ab1c1d1e1f1g1")

module.exports = maxChar;
