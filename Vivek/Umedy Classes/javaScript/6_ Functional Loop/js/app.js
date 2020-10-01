//1. Question To Determine Number is Even Or Not.
function even(num){
  if(num % 2 ==0){
    return("True");
  }
  else{
    return("False");
  }
}
//2. Question to Print Factiorial of Number .
function factorial(digit){
  var x=1;
  var y=1;
  while(x<=digit){
    y=y*x;
    x++;
  }
  return y;
}
//3. Question to interchange the kebab to snake;
function kebabToString(str){
  var newStr = str.replace(/-/g ,"_");
  return newStr;
}
