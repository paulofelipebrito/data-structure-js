// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  ' 5/3 = 2,5
//       ' ### ' 5/3 = 
//       '#####'
//   pyramid(4)
//       '   #   ' i=0 j=4 i+1
//       '  ###  ' i=1 j=3,4,5 i+2
//       ' ##### ' i=2 j=2,3,4,5,6 i+3
//       '#######' i=3 j=1,2,3,4,5,6,7 i+4
//   pyramid(5)
//       '    #    '
//       '   ###   '
//       '  #####  '
//       ' ####### ' 
//       '#########'

function pyramid(n) {
  const numberOfColumns = n + n - 1;
  for(let i = 0; i < n; i++) {
    let str = "";
    for(let j = 0; j < numberOfColumns; j++) {
      const middleIndex = Math.floor(numberOfColumns/2)
      if(j >= middleIndex - i && j <= middleIndex + i) {
        str += "#";
      } else {
        str +=" "
      }
    }
    console.log(str)
  }
}

pyramid(5)

module.exports = pyramid;
