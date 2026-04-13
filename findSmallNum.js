//Write a function that finds and print the smallest number among three given number..

// For each loop to find evey number in array:
// function findSmallNum() {
//   let nums = [1, 2, 3];
//   nums.forEach((num) => console.log(num));
// }
// findSmallNum();


function findSmallNum(){
 let nums = [1 , 2 , 3 , 4 , 9];
 return nums.reduce((min , num)=> num < min ? num : min , nums[0]);
}
console.log(findSmallNum());