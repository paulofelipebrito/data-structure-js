// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  const splittedStr = str.split(" ");
  let newStr = "";

  splittedStr.forEach((el) => {
    const firstChar = el.split("").shift();
    newStr += `${firstChar.toUpperCase()}${el.slice(1, el.length)} `;
  })

  return newStr.slice(0, newStr.length - 1);
}
const test = capitalize('a lazy fox')
module.exports = capitalize;
