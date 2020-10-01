// //1. Question
// /*1. Write a program in C to display the first 10 natural numbers. Go to the editor
// Expected Output :
// 1 2 3 4 5 6 7 8 9 10*/
// var num = 1;
// while(num <=10){
//   console.log(num);
//   num++;
// }
// //2. Question
// /*2. Write a C program to find the sum of first 10 natural numbers. Go to the editor
// Expected Output :
// The first 10 natural number is :
// 1 2 3 4 5 6 7 8 9 10
// The Sum is : 55*/
// var num=1;
// var sum= 0;
// while(num <=10){
//   sum+=num;
//   console.log(num)
//   num++;
// }
// console.log("The Sum is: "+ sum);
// //3. Question
// /*3. Write a program in C to display n terms of natural number and their sum.Go to the editor
// Test Data : 7
// Expected Output :
// The first 7 natural number is :
// 1 2 3 4 5 6 7
// The Sum of Natural Number upto 7 terms : 28*/
// var num=1;
// var data=7;
// var sum=0;
// while(num<=data){
//   sum+=num;
//   console.log(num);
//   num++;
// }
// console.log("The Sum is: "+ sum);
// //4. Question
// /*Write a program in C to read 10 numbers from keyboard and
//  find their sum and average. Go to the editor
// Test Data :
// Input the 10 numbers :
// Number-1 :2
// ...
// Number-10 :2
// Expected Output :
// The sum of 10 no is : 55
// The Average is : 5.500000*/
// var num =1;
// var sum=0;
// var data=10;
// while(num<=data){
//   sum+=num;
//   console.log("Number-"+num+":"+num);
//   num++;
// }
// var avg=(sum/data);
// console.log("The Average Is :"+ avg);
// console.log("The Sum of " + data +" no. is : " + sum);
// //5 Question
// /*5. Write a program in C to display the cube of the number upto given an integer. Go to the editor
// Test Data :
// Input number of terms : 5
// Expected Output :
// Number is : 1 and cube of the 1 is :1
// Number is : 2 and cube of the 2 is :8
// Number is : 3 and cube of the 3 is :27
// Number is : 4 and cube of the 4 is :64
// Number is : 5 and cube of the 5 is :125*/
// var num=1;
// var data=10;

// while(num<=data){
//   var cube=(num*num*num);
//   console.log("Number is :" + num +" and cube of the " + num +" is : "+ cube );
// num++;
// }
// //6. Question
// /* Write a program in C to display the multiplication table of a given integer. Go to the editor
// Test Data :
// Input the number (Table to be calculated) : 15
// Expected Output :
// 15 X 1 = 15
// ...
// ...
// 15 X 10 = 150*/
// var num=1;
// var data=10;
// var table=15;
// while(num<=data){
//   var res=(table*num);
//   console.log(table + " X " +num +" = " +res);
//   num++;
// }
// // 7. Question
// /*7. Write a program in C to display the multipliaction table vertically from 1 to n. Go to the editor
// Test Data :
// Input upto the table number starting from 1 : 8
// Expected Output :
// Multiplication table from 1 to 8
// 1x1 = 1, 2x1 = 2, 3x1 = 3, 4x1 = 4, 5x1 = 5, 6x1 = 6, 7x1 = 7, 8x1 = 8
// ...
// 1x10 = 10, 2x10 = 20, 3x10 = 30, 4x10 = 40, 5x10 = 50, 6x10 = 60, 7x10 = 70, 8x10 = 80*/
// var start=1;
// var innerCount=1;
// var message="";
// while(start<=10){
//   while(innerCount<=8){
//     message=message+(start + " X " + innerCount +" = " + start*innerCount )+",";
//     // console.log(start + " X " + innerCount +" = " + start*innerCount );
//     innerCount++;
//   }
//   console.log(message);
//   message="";
//   innerCount=1;
//   start++;
// }
// //8. Question
// var num = 1;
// var sum=0;
// while(num <=20){
//   if(num % 2 !==0){
//     sum+=num;
//   console.log(num);
//   }
//   num++;
// }
// console.log("The Sum is : "+ sum);
// //9. Question
// /*9. Write a program in C to display the pattern like right angle triangle using an asterisk. Go to the editor

// The pattern like :

// *
// **
// ***
// **** */
// var start=1;
// var end=4;
// var col=1;
// var message="";
// while(start<=4){
//   while(col<=start){
//     message+=(" * ");
//     col++;
//   }
//   console.log(message) ;
//   message="";
//   col=1;
//   start++;
// }
// // /*11. Write a program in C to make such a pattern like right angle triangle with a number which will repeat a number in a row. Go to the editor

// //    The pattern like :
   
// //     1
// //     22
// //     333
// //     4444*/
//   var start=1;
//   var end =4;
//   var col = 1;
//   var print=1;
//   while(start<=end){
//     while(col<=start){      
//       console.log(print);
//       console.log(" ");
//       col++;      
//     } 
//     print=col;   
//     col =1;
//     start++;
//   }
//   //12. Question
//   /*12. Write a program in C to make such a pattern like right angle triangle with number increased by 1. Go to the editor

// The pattern like :

//    1
//    2 3
//    4 5 6
//    7 8 9 10*/
//    var start=1;
//    var end=4;
//    var col=1;
//     var result=1;

//    while(start<=end){
//      while(col<=start){
//        console.log(result);
//        result++;
//        col++;
//      }
//      col=1;
//      console.log("Empty");
//      start++;
//    }
//    //13. Question
//    /*13. Write a program in C to make such a pattern like a pyramid with numbers increased by 1. Go to the editor
//    1 
//   2 3 
//  4 5 6 
// 7 8 9 10 */
// var start=1;
// var end=4;
// var col=1;
// var result=1;
//    while(start<=end){
//      while(col<=start){
//        console.log( result);
//        col++;
//        result++;
//      }
//      col=1;
//      console.log("");
//      start++;
//    }
// //14. Question
// /*14. Write a program in C to make such a pattern like a pyramid with an asterisk. Go to the editor

//    * 
//   * * 
//  * * * 
// * * * * */
// var start=1;
// var end=4;
// var col=1;
//    while(start<=end){
//      while(col<=start){
//        console.log( "*");
//        col++;

//      }
//      col=1;
//      console.log("");
//      start++;
//    }
// //15. Question
// /*15. Write a C program to calculate the factorial of a given number. Go to the editor
// Test Data :
// Input the number : 5
// Expected Output :
// The Factorial of 5 is: 120*/
// var num=1;
// var f=1;
// var data=5;
// while(num<=data){
//   f=f*num;
//   console.log(f);
//   num++;
// }
// //16. Question
// /*16. Write a program in C to display the n terms of even natural number and their sum. Go to the editor
// Test Data :
// Input number of terms : 5
// Expected Output :
// The even numbers are :2 4 6 8 10
// The Sum of even Natural Number upto 5 terms : 30
// C*/
// var num=2;
// var data=5*2;
// var sum=0;
// while(num<=data){
//   sum+=num;
//   console.log(num);
//   num+=2;

// console.log("The sum is: "+sum);
// }
// //17. Question
// /*17. Write a program in C to make such a pattern like a pyramid with a number which will repeat the number in the same row. Go to the editor

//    1
//   2 2
//  3 3 3
// 4 4 4 4 */
// var start=1;
// var end=4;
// var row=1;
// while(start<=end){
//   row=1;
//   while(row<=(end-start)){
//     document.write("&nbsp;");
//     row++;
//   }
//   row=1;
//   while(row<=start){
//     document.write(start);
//     row++;
//   }
//   row=1;
//   document.write("<br>");
//   start++;
// }
// //19. Question
// /*19. Write a program in C to display the n terms of harmonic series and their sum. Go to the editor
// 1 + 1/2 + 1/3 + 1/4 + 1/5 ... 1/n terms
// Test Data :
// Input the number of terms : 5
// Expected Output :
// 1/1 + 1/2 + 1/3 + 1/4 + 1/5 +
// Sum of Series upto 5 terms : 2.283334*/
// var num=1;
// var end=5;
// var sum=0;
// while(num<=end){
//   sum+=1/num;
//   console.log(1/num);
//   num++;
//   console.log("Sum Of Series upto 5 term : "+ sum);
// }
// //20. Question
// /*20. Write a program in C to display the pattern like a pyramid using asterisk and each row contain an odd number of asterisks. Go to the editor

//    *
//   ***
//  *****  */
// var start=1;
// var row=1;
// var end=3;
// while(start<=end){
//   row=1;
//   while(row<=(end-start)){
//     document.write("&nbsp;");
//     row+=1;
//   }
//   row=1;
//   while(row<=(2*start-1)){
//     document.write("*");
//     row+=1;
//   }  
//   document.write("<br>");
//   start++;
// }
// //21. Question
// /*21. Write a program in C to display the sum of the series [ 9 + 99 + 999 + 9999 ...]. Go to the editor
// Test Data :
// Input the number or terms :5
// Expected Output :
// 9 99 999 9999 99999
// The sum of the saries = 111105*/
// var start=1;
// var row=1;
// var end=5;
// var sum=0;
// var t = 9;
// while(start<=end){
//   sum+=t;
//   t=t*10+9;  
//   while(row<=start){
//   document.write(9);
//   row++;
// }
//   row=1;
//   document.write("&nbsp;&nbsp;")
//   start++; 
   
// }
// document.write("<br>");
// document.write("The Sum of series: "+sum);
// document.write("<br>")
// //22. Question
// /*22. Write a program in C to print the Floyd's Triangle. Go to the editor

// 1 
// 01
// 101 
// 0101 
// 10101 */
// var start=1;
// var end=5;
// var col=1;
// while(start<= end){
//   if(start % 2 ==0){
//     p=1;q=0
//   }
//   else{
//     p=0;q=1
//   }
//   while(col<= start){
//     if(col %2==0){
//       document.write(p);
//     }
//     else{
//       document.write(q);
//     }
//     col++;
//   }
//   col=1;
//   document.write("<br>")
//   start++;
//   document.write("<br>")
// }
// //25. Question
// /*25. Write a program in C to display the n terms of square natural number and their sum. Go to the editor
// 1 4 9 16 ... n Terms
// Test Data :
// Input the number of terms : 5
// Expected Output :
// The square natural upto 5 terms are :1 4 9 16 25
// The Sum of Square Natural Number upto 5 terms = 55*/
// var start=1;
// var end=5;
// var sum=0;
// while(start<=end){
//   sum+=start*start;
//   document.write("&nbsp;"+ start*start+ "&nbsp;");
//   start++;  
// }
// document.write("<br>")
// document.write("The Sum Of this : "+ sum);
// document.write("<br>")
// //26. Question
// /*26. Write a program in C to find the sum of the series 1 +11 + 111 + 1111 + .. n terms. Go to the editor
// Test Data :
// Input the number of terms : 5
// Expected Output :
// 1 + 11 + 111 + 1111 + 11111
// The Sum is : 12345 */
// var start=1;
// var row=1;
// var end=5;
// var sum=0;
// var t=1;
// while(start<=end){
//   sum+=t;
//   t=t*10+1;
//   while(row<=start){
//   document.write(1);
//   row++;
// }
//   row=1;
//   document.write("&nbsp;&nbsp;")
//   start++;    
// }
// document.write("<br>");
// document.write("The Sum of series: "+sum);
// document.write("<br>")
// //27. Question
// /*27. Write a c program to check whether a given number is a perfect number or not. Go to the editor
// Test Data :
// Input the number : 56
// Expected Output :
// The positive divisor : 1 2 4 7 8 14 28
// The sum of the divisor is : 64
// So, the number is not perfect.*/
// var num=1;
// var end =56;
// var sum=0;
// var perf=end*2;
// while(num<=end){  
//   if(end % num ==0){
//     document.write( "&nbsp;"+ num + "&nbsp;");
//     sum+=num;  
//   }
//   num++;  
//   }
// document.write("<br>");
// document.write("The Sum of series: "+sum);
// document.write("<br>")
// if(sum==perf){
//   document.write("The Number is perfect:")
// }
// else{
//   document.write("The Number is not perfect:")
// }
// document.write("<br>")
// //28.Question
// /*28. Write a c program to find the perfect numbers within a given number of range. Go to the editor
// Test Data :
// Input the starting range or number : 1
// Input the ending range of number : 50
// Expected Output :
// The Perfect numbers within the given range : 6 28 */

// //29. Question
// /*29. Write a C program to check whether a given number is an armstrong number or not. Go to the editor
// Test Data :
// Input a number: 153
// Expected Output :
// 153 is an Armstrong number. */
// var data=153;
// // var x=data% 10;
// // var y=(data/10) % 10;
// // var z=(data/100) % 10;
// var x=1;
// var y=5;
// var z=3;
// var sum=0;
// sum=sum+(x*x*x + y*y*y + z*z*z);
// if(sum==data){
//   document.write("Number is Armstrong: "+ data);
// }
// else{
//   document.write("Number is not Armstrong: "+ data);
// }
// document.write("<br>");
// document.write(sum);
// // var n=153;
// // var sum=0
// // var d=1;
// //   while(n!=0){
// //     d=n %10;
// //     sum=+sum+(d*d*d);
// //     n=n/10;
// //   }
// //   document.write(sum);
// //30. Question
// /*30. Write a C program to find the Armstrong number for a given range of number. Go to the editor
// Test Data :
// Input starting number of range: 1
// Input ending number of range : 1000
// Expected Output :
// Armstrong numbers in given range are: 1 153 370 371 407 */
var start=1;
var end=1000;
var result="";
var parts=[];
var sum=0;
var counter=0;
var arm=0;

while(start<=end){
  parts=String(start).split('');  
    while(counter<parts.length){
      arm=Number(parts[counter]);
      sum+=(arm*arm*arm);
      counter++;      
    } 
    if(start===sum){
      result+=start+",";
    }
    counter=0;
    sum=0;
    parts=[];
    start++;
}
console.log(result);

// // 32. Question
// /*32. Write a C program to determine whether a given number is prime or not. Go to the editor
//  Test Data :
// Input a number: 13
// Expected Output :
// 13 is a prime number. */

// document.write("<br>");
// var data=13;
// var start=2;
// while(start<=data/2){
//   start++;
// }
//   var ans=data % 2;
//   if(ans==0){
//     document.write("The Number is Not Prime : "+ data);
//   }
//   else{
//     document.write("The Number is a Prime : "+ data);
//   }
//34. Question
/*34. Write a program in C to find the prime numbers within a range of numbers. Go to the editor
Test Data :
Input starting number of range: 1
Input ending number of range : 50
Expected Output :
The prime number between 1 and 50 are :
2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 */
// var data=13;
// var start=2;
// // while(start<=data/2){
// //   start++;
// // }
//   var ans=data/2 % 2;
//   if(ans==0){
//     document.write("The Number is Not Prime : "+ data);
//   }
//   else{
//     document.write("The Number is a Prime : "+ data);
//   }
//35. Question
/*35. Write a program in C to display the first n terms of Fibonacci series. Go to the editor
Fibonacci series 0 1 2 3 5 8 13 .....
Test Data :
Input number of terms to display : 10
Expected Output :
Here is the Fibonacci series upto to 10 terms :
0 1 1 2 3 5 8 13 21 34 */
// var num=0;
// var data=10;
// var sum=0;
// while(num<=data){
//   sum=sum+num;
//   document.write(sum);
//   num++;
// }
//37.Question
/*37. Write a program in C to display the number in reverse order. Go to the editor
Test Data :
Input a number: 12345
Expected Output :
The number in reverse order is : 54321 */

