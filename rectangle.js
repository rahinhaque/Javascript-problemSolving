//Print the area of rectangle

function rectangle(width , length){

 if(length <= 0){
  throw new Error("length must be a positive number");
 }
 if(width <=0 ){
  throw new Error("width must be given as a positive number");
 }


 const area = width * length;
 return area;
}

const rectangleArea = rectangle(0 , 10);
console.log(rectangleArea);