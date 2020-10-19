// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {};
  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1; // NaN || 1 ==> 1

    // if (!charMap[char]) {
    //   charMap[char] = 1;
    // } else {
    //   charMap[char]++;
    // }
  }
  
  let max = 0;
  let maxKey = '';
  for (let key in charMap) {
    if (charMap[key] > max) {
      max = charMap[key];
      maxKey = key;
    }
  }
  return maxKey;

  // Object.keys тут тільки щоб могти пробігти по об'єкту, що тепер можна зробити вбудованим for...in
  // const arrKeys = Object.keys(charMap);
  // const maxKey = arrKeys[0];
  // arrKeys.forEach(key => {
  //   if (charMap[key] > charMap[maxKey]) {
  //     maxKey = key;
  //   }
  // });
  // return maxKey;
}

module.exports = maxChar;
