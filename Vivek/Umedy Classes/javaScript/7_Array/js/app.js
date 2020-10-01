//1. Question To Reverse the Print.
var print=[1,2,3,4];
print.reverse()
print.forEach(function(opposite){
  console.log(opposite);
});
// **************New Method*****//
function printReverse(arr){
  for(var i = arr.length-1;i>=0;i--){
    console.log(arr[i]);
  }
}
printReverse([1,5,7,8]);  
//2. Question To Reverse the Print.
var print=["a","b","c"];
print.reverse()
print.forEach(function(opposite){
  console.log(opposite);
});
//3. Queation
var isUniform=[1,1,1,1];
if(isUniform[0]===isUniform[1] && isUniform[1]===isUniform[2] && isUniform[2]===isUniform[3]){
  console.log(isUniform + "True");
}
else{
  console.log(isUniform + "False");
}
var isUniform=[2,1,1,1];
if(isUniform[0]===isUniform[1] && isUniform[1]===isUniform[2] && isUniform[2]===isUniform[3]){
  console.log(isUniform + "True");
}
else{
  console.log(isUniform + "False");
}
var isUniform=["a","b","c"];
if(isUniform[0]===isUniform[1] && isUniform[1]===isUniform[2]){
  console.log(isUniform + "True");
}
else{
  console.log(isUniform + "False");
}
var isUniform=["b","b","b"];
if(isUniform[0]===isUniform[1] && isUniform[1]===isUniform[2]){
  console.log(isUniform + "True");
}
else{
  console.log(isUniform + "False");
}
//****************isUniform*********//
function forUniform(arr){
  var first=arr[0];
  for(var i=1; i < arr.length; i++ ){
    if(arr[i] !== first){
      return false;
    }
  }
  return true;
}
//3. Question
var array=[1,2,3];
var sum=0;
for(i=0;i<array.length;array[i++]){
  sum+=array[i];
}
console.log(sum);


var array=[10,3,10,4];
var sum=0;
for(i=0;i<array.length;array[i++]){
  sum+=array[i];
}
console.log(sum);
  

function isArray(arr){
var sum=0;
arr.forEach(function(special){
  sum+=special;
});
return sum;
}

//4.Question
function maxArray(arr){
  var max= arr[0];
  for(var i=1;i<arr.length;i++){
    if(arr[i]>max){
      max=arr[i]
    }
  }
  return max;
  }


  ///

  
 // var button =document.querySelector("button");
 var button =document.querySelector("button");
  // var ispurple = false;
  var body=document.querySelector("body");

  button.addEventListener("click",function(){
    body.classList.toggle("purple");
  });