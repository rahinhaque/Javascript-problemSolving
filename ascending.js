//write a func to get the ascending number from a number.

const asacending = (num) => {
 return parseInt(
  num.toString()
  .split('')
  .sort((a , b) => a-b)
  .join('')
 )
}

let num = 5083;
console.log(asacending(num));