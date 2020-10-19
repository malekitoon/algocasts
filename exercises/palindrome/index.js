// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


function palindrome(str) {
  // працює з "сурогатними парами"
  let reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}

// function palindrome(str) {
//   // працює з "сурогатними парами"
//   let reversedStr = '';
//   for (let char of str) {
//     reversedStr = char + reversedStr;
//   }
//   return str === reversedStr;
// }

// function palindrome(str) {
//   // працює з "сурогатними парами"
//   return str.split('').every((char, i) => {
//     return char === str[str.length - i - 1];
//   });
// }

module.exports = palindrome;
