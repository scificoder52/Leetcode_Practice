// function isPowerTwo(n) {
//   if (Number.isInteger(Math.log2(n))) {
//     return true;
//   }
// return false;
// }

function isPowerTwo(n){
  if(n<1){
    return false;
  }
  return (n & (n-1)) ===0;
}

console.log(isPowerTwo(8))
console.log(isPowerTwo(16))
console.log(isPowerTwo(5))