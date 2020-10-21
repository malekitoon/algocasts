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
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, text = '', columnCount = n * 2 - 1) {
  if (row === n) {
    return;
  }

  if (text.length === columnCount) {
    console.log(text);
    return pyramid(n, row + 1);
  }

  const midIndex = Math.floor(columnCount / 2);
  if (text.length >= (midIndex - row) && text.length <= (midIndex + row)) {
    text += '#';
  } else {
    text += ' ';
  }

  return pyramid(n, row, text);
}

// function pyramid(n) {
//   const columnCount = n * 2 - 1;
//   const midIndex = Math.floor(columnCount / 2);

//   for (let row = 0; row < n; row++) {
//     let level = '';
    
//     for (let column = 0; column < columnCount; column++) {
//       if (column >= (midIndex - row) && column <= (midIndex + row)) {
//         level += '#';
//       } else {
//         level += ' ';
//       }
//     }

//     console.log(level);
//   }
// }

module.exports = pyramid;
