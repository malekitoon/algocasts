// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// "сурогатні пари" - символами, які записуються 2 16-бітними словами, а не 1. 
// '𝒳'.length => 2, а не 1
// '𝒳😂𩷶'

function reverse(str) {
  // працює з "сурогатними парами"
  let reversed = '';
  for (let charecter of str) {
    // кожний наступний символ дописувати не з кінця, а з початку
    reversed = charecter + reversed;
  }
  return reversed;
}

// function reverse(str) {
//   // не працює з сурогатними парами
//   // Array.prototype.reverse() - changes the existing array
//   return str.split('').reverse().join('');
// }

// function reverse(str) {
//   // не працює з сурогатними парами
//   return str.split('').reduce((current, next) => next + current, '');
// }

// ГАМНО
// function reverse(str) {
//   // не працює з сурогатними парами
//   let text = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     // застарілий, але якщо символ не знайдено повертає '', а не undefined      
//     // text += str.charAt(i);
//     text += str[i];
//   }
//   return text;
// }

module.exports = reverse;
