// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

function getSum(a, b) {
 let start = Math.max(a , b);
 let sum = 0;
  for (i = a; i <= b; i++) {
   sum = sum + i;
  }
  return sum;
}
console.log(getSum(-1 , 0));
