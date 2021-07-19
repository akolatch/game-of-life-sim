// define function to find nth number in fibonacci sequence with memoization
function nth_fibonacci(n: number): number {
  let cache = {};
  return fibonacci(n, cache);
}

function fibonacci(n: number, cache: { [key: number]: number }): number {
  if (n < 2) {
    return n;
  }
  if (cache[n] !== undefined) {
    return cache[n];
  }
  let fib = fibonacci(n - 1, cache) + fibonacci(n - 2, cache);
  cache[n] = fib;
  return fib;
}
