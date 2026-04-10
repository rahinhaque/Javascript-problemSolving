//Create a function that only return "Hello World" when console logged :
function createHelloWorld(){
 return function(){
  return "Hello World";
 }
} 
const helloWorld = createHelloWorld();
console.log(helloWorld());
console.log(helloWorld("abc", true));
console.log(helloWorld(123));