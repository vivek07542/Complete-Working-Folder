// 1. Question
var number1 = 15 ;
var number2 = 15 ;
if( number1 ===  number2) {
  console.log("Number1 and Number2 are equal");
}
// console.log("To test whether number is even or odd");
// 2. Question

var num=15;
 if(num % 2 ==0){
   console.log(" 15 is an even integer");
  }else{
    console.log("15 is a odd integer");
  }
// 3. Question
var num=15;
 if (num< 0) {
   console.log("15 is a Negative Number")
 }else{
   console.log("15 is a Positive Number")
 }
//4. Question
var year = 2016;
if (year % 4 ==0 && year % 100 !==0 || year % 400 ==0){
  console.log("2016 is a leap year");
}else{
  console.log("2016 is not a leap year");
}
//5. Question
var age =21;
if (age >=21){
  console.log("Congratulation...!! You Can Cast Your Vote")
}
else{
  console.log("Wait till you complete 21...!!")
}
//6. Question
var m= -5;
  if(m>0){
    console.log("value of n = 1");
  }
  if( m= 0){
    console.log("Value of n=0");
  }
  else{
    console.log("Value of n=-1");
  }
  //7. Question
   var height= 135;
   if(height >165 ){
     console.log("The Person is Tall");
     }
     if (height >136 && height <165){
     console.log("The Person is Average" );
     }
     else{
       console.log("The Person Is Dwarf");
     }
  //8. Question
  var num1 = 57;
  var num2 = 100;
  var num3 = 52;
  if (num1>num2){
  if(num1>num3){
     console.log("Num1 is greater of all");
  }     
  else{
   console.log("Num3 is greater of all");
  }}
    else if(num2 >num3){
      console.log("Num2 is greater of all");
    }
    else{
      console.log("Num3 id greater of all");
    }
    //9. Question
    var x=7;
    var y=9;
    if( x>0 && y>0){
      console.log("The Coordinate points lies in first Coordinate");
    }
    else if( x<0 && y>0){
      console.log("The Coordinate Point lies in second Coordinate");
    }
    else if( x<0 && y<0){
      console.log("The Coordinate Point lies in Third Coordinate");
    }
    else if(x>0 && y<0){
      console.log("The Coordinate Point lies in Forth Coordinate");
    }
//10. Question
/*Marks in Maths >=65
Marks in Phy >=55
Marks in Chem>=50
Total in all three subject >=180
or
Total in Math and Subjects >=140

Test Data :
Input the marks obtained in Physics :65
Input the marks obtained in Chemistry :51
Input the marks obtained in Mathematics :72*/

let marksInMaths=72;
let marksInPhysics= 82;
let marksInChemistry=66;
if(marksInMaths >=65 && marksInPhysics>=55 && marksInChemistry>=50 && (marksInChemistry+marksInMaths+marksInPhysics) >=180){
  console.log("You are Eligible for Admission.");
}
else if(marksInMaths + marksInPhysics>=140 || marksInMaths+marksInChemistry>=140){
  console.log("You are Eligible for Admission.");
}
else{
  console.log("You are Not Eligible");
}
//11. Question
/*Write a C program to calculate the root of a Quadratic Equation. Go to the editor
Test Data : 1 5 7
Expected Output :
Root are imaginary;
No solution.*/
var a = 1;
var b= 5;
var c=7;
var root_part=Math.sqrt(b*b-4*a*c);
var denom=2*a;

var root1=(-b+root_part)/denom;
var root2=(-b-root_part)/denom;
console.log( root1);
console.log(root2);
console.log("No. are imagnary");

//12. Question
/*Write a C program to read roll no, name and marks of three subjects and calculate the total, percentage and division. Go to the editor
Test Data :
Input the Roll Number of the student :784
Input the Name of the Student :James
Input the marks of Physics, Chemistry and Computer Application : 70 80 90
Expected Output :
Roll No : 784
Name of Student : James
Marks in Physics : 70
Marks in Chemistry : 80
Marks in Computer Application : 90
Total Marks = 240
Percentage = 80.00
Division = First*/
var rollNo=784;
var nameOfStudent="James";
var markInPhysics=70;
var markInChemistry=80;
var markInComputer=90;
console.log("Roll No.:"+ rollNo);
console.log("Name Of Student :" + nameOfStudent);
console.log("Mark In Physics :" + markInPhysics);
console.log("Mark In Chemistry :" + markInChemistry);
console.log("Mark In Computer :" + markInComputer);
var Total= (markInComputer+markInChemistry+markInPhysics);
console.log("Total Mark :" +Total);
var Perc =(Total*100/300);
  console.log("Total percentage:" + Perc);
if(Perc >=80){
  console.log("Division : First");
}  
else{
  console.log("Division: Second");
}
//13. Question

/*13. Write a C program to read temperature in centigrade and display a suitable message according to temperature state below : Go to the editor
Temp < 0 then Freezing weather
Temp 0-10 then Very Cold weather
Temp 10-20 then Cold weather
Temp 20-30 then Normal in Temp
Temp 30-40 then Its Hot
Temp >=40 then Its Very Hot
Test Data :
42
Expected Output :
Its very hot.*/
var temp=42;
if(temp <0){ 
  console.log("It's Freezing Point");
}
else if(temp<10) {
  console.log("It's Very Cold Weather");
}
else if(temp<20) { 
  console.log("It's Cold Weather");
}
else if(temp<30) {
  console.log("It's Normal Temp");
}
else if(temp<40) {
  console.log("It's Hot");
}
else if(temp>=40) {
  console.log("It's Very Hot");
}
//14. Question
/*14. Write a C program to check whether a triangle is Equilateral, Isosceles or Scalene. Go to the editor
Test Data :
50 50 60
Expected Output :
This is an isosceles triangle.*/
var sidea=50;
var sideb=50;
var sidec=62;
if(sidea===sideb && sideb===sidec && sidec===sidea){
  console.log("This is Equilateral Traingle");
}
else if(sidea===sideb||sideb===sidec||sidec===sidea){
  console.log("This is Issoceleous Traingle");
}
else{
  console.log("This is Scalene Traingle");
}
//15 Question
/*15. Write a C program to check whether a triangle can be formed by the given value for the angles. Go to the editor
Test Data :
40 55 65
Expected Output :
The triangle is not valid.*/
var deg1=40;
var deg2=55;
var deg3=65;
if(deg1+deg2+deg3>=180){
console.log("Traingle is valid");
}
else{
  console.log("Traingle is not valid");
}
//16 Question
/*16. Write a C program to check whether a character is an alphabet, digit or special character. Go to the editor
Test Data :
@
Expected Output :
This is a special character.*/
var character= "@";
if(character>='A' && character<='Z'){
  console.log("This is Alphabet Character");
}
else if(character>="0" && character<="9"){
  console.log("This is Numerical Character");
}
else{
  console.log("This is Special Character");
}
//17. Question
/* Write a C program to check whether an alphabet is a vowel or consonant. Go to the editor
Test Data :
k
Expected Output :
The alphabet is a consonant.*/
var alpha = 'k';
if(alpha=='a' || alpha=='e' || alpha =='i'|| alpha=='o' || alpha =='u'){
  console.log("Alphabets are Vowels");
}
else if(alpha=='A' || alpha=='E' || alpha =='I' || alpha=='O' || alpha =='U'){
  console.log("Alphabets are Vowels");
}
else{
  console.log("Alphabet are Constant");
}
//18. Question
/*18. Write a C program to calculate profit and loss on a transaction. Go to the editor
Test Data :
500 700
Expected Output :
You can booked your profit amount : 200*/
var buy=500;
var sell=700;
var diff = (sell-buy);
if(sell-buy>0){
  console.log("You can Booked your profit amount :" + diff);
}
else{
  console.log("You cannot book as it's loss");
}
//19. Question
/*Write a program in C to calculate and print the Electricity bill of a given customer. The customer id., name and unit consumed by the user should be taken from the keyboard and display the total amount to pay to the customer. The charge are as follow : Go to the editor

Unit	Charge/unit
upto 199	@1.20
200 and above but less than 400	@1.50
400 and above but less than 600	@1.80
600 and above	@2.00
If bill exceeds Rs. 400 then a surcharge of 15% will be charged and the minimum bill should be of Rs. 100/-

Test Data :
1001
James
800
Expected Output :
Customer IDNO :1001
Customer Name :James
unit Consumed :800
Amount Charges @Rs. 2.00 per unit : 1600.00
Surchage Amount : 240.00
Net Amount Paid By the Customer : 1840.00*/
var customerId=1020;
console.log("customerId:"+customerId);
var customerName='Radhe Bhaiya';
console.log("customerName:"+customerName);
var unit=1600;
console.log("Unit Consumed :"+ unit);
if(unit<=199){
  console.log("Amount Charge @ Rs. 1.20 per unit :" + unit*1.20);
  if(unit*1.20>400){
    console.log("Surcharge Amount:" + unit*1.2*15/100)
    var amount= (unit*1.2*15/100+ unit*1.2);
    console.log("Net Amount to be Paid by Customer:" + amount);
  }
}
else if( unit>=200 && unit<=400){
  console.log("Amount Charge @ Rs. 1.50 per unit :" +unit*1.5);
  if(unit*1.50>400){
    console.log("Surcharge Amount:" + unit*1.5*15/100)
    var amount= (unit*1.5*15/100+ unit*1.5);
    console.log("Net Amount to be Paid by Customer:" + amount);
  }
}
else if (unit>=401 && unit<=600){
  console.log("Amount Charge @ Rs. 1.80 per unit :" +unit*1.80)
  if(unit*1.80>400){
    console.log("Surcharge Amount:" + unit*1.8*15/100)
    var amount= (unit*1.8*15/100+ unit*1.8);
    console.log("Net Amount to be Paid by Customer:" + amount);
  }
}
else{
  console.log("Amount Charge @ Rs. 2.00 per unit:" +unit*2.0);
  if(unit*2.00>400){
    console.log("Surcharge Amount:" + unit*2.0*15/100)
    var amount= (unit*2*15/100+ unit*2);
    console.log("Net Amount to be Paid by Customer:" + amount);
  }
}
//20. Question
/*20. Write a program in C to
 accept a grade and declare the equivalent description :
  Go to the editor

Grade	Description
E	Excellent
V	Very Good
G	Good
A	Average
F	Fail
Test Data :
Input the grade :A
Expected Output :
You have chosen : Average*/
var grade = 'A';
if(grade=='E'){
  console.log("You have choosen: Excellent");
}
else if(grade=='V'){
  console.log("You have choosen: Very Good");
}
else if(grade=='G'){
  console.log("You have choosen: Good");
}
else if(grade=='A'){
  console.log("You have choosen: Average");
}
else{
  console.log("You have choosen: Fail");
}
//21. Question
/*21. Write a program in C to read any day number
 in integer and display day name in the word. Go to the editor
Test Data :
4
Expected Output :
Thursday*/
var testDay=4;
if(testDay==1){
  console.log("Monday");
}
else if(testDay==2){
  console.log("Tuesday");
}
else if(testDay==3){
  console.log("Wednesday");
}
else if(testDay==4){
  console.log("Thrusday");
}
else if(testDay==5){
  console.log("Friday");
}
else if(testDay==6){
  console.log("Saturday");
}
else{
  console.log("Sunday");
}
//22. Question
/*22. Write a program in C to read any digit, display in the word.
 Go to the editor
Test Data :
4
Expected Output :
Four*/
var digit=4;
if(digit==1){
  console.log("ONE");
}
else if(digit==2){
  console.log("Two");
}
else if(digit==3){
  console.log("Three");
}
else if(digit==4){
  console.log("Four");
}
else if(digit==5){
  console.log("Five");
}
else if(digit==6){
  console.log("Six");
}
else if(digit==7){
  console.log("Seven");
}
else if(digit==8){
  console.log("Eight");
}
else{
  console.log("Nine");
}
//23 Question
/*23. Write a program in C to read
 any Month Number in integer and display Month name in the word.
  Go to the editor
Test Data :
4
Expected Output :
April*/
var month=4;
if(month==1){
  console.log("January");
}
else if(month==2){
  console.log("Feburary");
}
else if(month==3){
  console.log("March");
}
else if(month==4){
  console.log("April");
}
else if(month==5){
  console.log("May");
}
else if(month==6){
  console.log("June");
}
else if(month==7){
  console.log("July");
}
else if(month==8){
  console.log("August");
}
else if(month==9){
  console.log("September");
}
else if(month==10){
  console.log("October");
}
else if(month==11){
  console.log("November");
}
else{
  console.log("December");
}
//24. Question
/*24. Write a program in C to read any Month Number 
in integer and display the number of days for this month.
 Go to the editor
Test Data :
7
Expected Output :
Month have 31 days*/
var month=7;
if(month==1){
  console.log("31 Days");
}
else if(month==2){
  console.log("28 Days");
}
else if(month==3){
  console.log("31 Days");
}
else if(month==4){
  console.log("30 Days");
}
else if(month==5){
  console.log("31 Days");
}
else if(month==6){
  console.log("30 Days");
}
else if(month==7){
  console.log("31 Days");
}
else if(month==8){
  console.log("31 Days");
}
else if(month==9){
  console.log("30 Days");
}
else if(month==10){
  console.log("31 Days");
}
else if(month==11){
  console.log("30 Days");
}
else{
  console.log("31 Days");
}
//25 Question
/*25. Write a program in C which is a Menu-Driven Program
 to compute the area of the various geometrical shape. 
 Go to the editor
Test Data :
1
5
Expected Output :
The area is : 78.500000*/
var C=1;
var R =2;
var T =3;
var r=5;
var l=0;
var b=0;
var h=0;
if(C==1){
  console.log("The Area is :"+ 3.14*r*r);
}
else if(R==2){
  console.log("The Area is :"+ l*b);
}
else if(T==2){
  console.log("The Area is :"+ 0.5*l*h);
}
//26. Question
/*26. Write a program in C which is a Menu-Driven Program to perform a simple calculation.
 Go to the editor
Test Data :
10
2
3
Expected Output :
The Multiplication of 10 and 2 is: 20*/
var mode=3;
var interger1=10;
var interger2=2;
if(mode==1){
  var add=(-(interger1+interger2));
  console.log("The Addition Is:"+ add);
}
else if(mode==2){
  var sub=(interger1-interger2);
  console.log("The Subraction Is:"+ sub);
}
else if(mode==3){
  var multi=(interger1*interger2);
  console.log("The Multiplication Is:"+ multi);
}
else if(mode==4){
  var div=(interger1/interger2);
  console.log("The Division Is:"+ div);
}