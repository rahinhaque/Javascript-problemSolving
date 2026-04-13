//Write a func to find the heigest number in an array

function findBigNum(){
  let nums = [ 40 , 50 , 80 , 100];
  return  Math.max(...nums);
}
console.log(findBigNum());