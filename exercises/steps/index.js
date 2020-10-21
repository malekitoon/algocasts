// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = '') {
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1); // строка має обнулитись після виводу
  }

  const add = stair.length <= row ? '#' : ' ';
  steps(n, row, stair + add);
}

// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     let stair = '';

//     for (let column = 0; column < n; column++) {
//       stair += column <= row ? '#' : ' ';
//     }

//     console.log(stair);
//   }
// }

// function steps(n) {
//   let i = 1;

//   function getStr(n, str) {
//     let text = '';
//     for (let i = 0; i < n; i++) {
//       text += str;
//     }
//     return text;
//   }

//   while (i <= n) {
//     const text = getStr(i, '#') + getStr(n - i, ' ');
//     console.log(text);
//     i++;
//   }
// }



module.exports = steps;
