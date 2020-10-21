// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const matches =  str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

// function vowels(str) {
//   return str.replace(/[^aeiou]/gi, '').length;
//   // g - не зупинятися після першого знаходження, а знайти всі; і - case Insensitive
// }

// function vowels(str) {
//   let count = 0;
//   const checker = ['a', 'e', 'i', 'o', 'u'];
//   // const checker = 'aeiou'; - краще масив ніж стрінг, бо можна додати кількасимвольні комбінації напр. 'abc'. Метод includes є і для строк, і для масивів.

//   for (let char of str.toLowerCase()) {
//     if (checker.includes(char)) { count++; }
//     // if (checker.indexOf(char) !== -1) { count++; }
//   }

//   return count;
// }

module.exports = vowels;
