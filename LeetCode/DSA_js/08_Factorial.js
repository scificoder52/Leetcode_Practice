function factorial(n) {
  let result = 1;
  if (n === 0 || n === 1) {
    return 1;
  }
  if (n < 0) {
    return "please enter valid positive number";
  }
  for (let i = 2; i <= n; i++) {
    result = result * i;
  }
  return result;
}

console.log(factorial(-2));
