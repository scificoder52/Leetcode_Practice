function PrimeNum(n) {
  let r = 1;
  for (let i = 2; i < n; i++) {
    let rem = n % i;
    r = rem * r;
    if (rem === 0) {
      return "number is not prime";
    }
  }

  return "number is prime";
}
console.log(PrimeNum(79));
