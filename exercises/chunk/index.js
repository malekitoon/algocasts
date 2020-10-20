// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  // arr.slice("startIndex від 0", "endIndex не включаючи")
  const chunked = [];

  let i = 0;
  while (i < array.length) {
    chunked.push(array.slice(i, i + size));
    i += size;
  }

  // for (let i = 0; i < array.length; i += size) {
  //   chunked.push(array.slice(i, i + size));
  // }

  return chunked;
}

// function chunk(array, size) {
//   const chunked = [];
  
//   for (let element of array) {
//     const lastAddedChunk = chunked[chunked.length - 1];
//     if (!lastAddedChunk || lastAddedChunk.length === size) {
//       chunked.push([element]);
//     } else {
//       lastAddedChunk.push(element);
//     }
//   }

//   return chunked;
// }

// гамнокодік
// function chunk(array, size) {
//   const resArr = [];
  
//   for (let i = 0; i < array.length; i += size) {
//     const subArr = [];

//     for (let j = 0; j < size; j++) {
//       if(i + j < array.length) {
//         subArr.push(array[i + j]);
//       }
//     }

//     resArr.push(subArr);
//   }

//   return resArr;
// }

module.exports = chunk;
