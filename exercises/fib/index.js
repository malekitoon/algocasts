// --- Directions
// Return the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memoize(fn) {
  const cache = {};

  return function(...args) {
    if (cache[args]) { return cache[args]; }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  }
}

function fib(n) {
  if (n < 2) { return n; }
  return fib(n - 1) + fib(n - 2);
}

fib = memoize(fib);

// function fib(n) {
//   const res = [0, 1];

//   // while (n >= res.length - 1) {
//   //   res.push(res[res.length - 1] + res[res.length - 2]);
//   // }

//   for (let i = 2; i <= n; i++) {
//     res.push(res[i - 1] + res[i - 2]);
//   }

//   return res[n];
// }

module.exports = fib;
