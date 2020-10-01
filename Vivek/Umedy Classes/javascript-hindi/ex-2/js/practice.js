/*
// Excercise 2- Console Type
console.log("This is Ex 2");

console.time('Your Code Took');
console.log("Hello Console");
console.log(4+34);
console.log(34);
console.log(true);
console.log([34,2,5,6]);
console.log({
  harry:"This",
  Marks:34
});
console.table({
  harry:"This",
  Marks:34
});
console.warn("This Is Warning");
console.timeEnd("Your Code Took");
*/
/*
// Excercise 3 -Type Of Variable
var name="Vivek";
var study;
study="Coding is the World"
var marks=74;
marks=84;
console.log(name,study,marks);

let city="london";
console.log(city);

const ownerName = "British";
console.log(ownerName);
*/
/*
// Exercise 4- Data Type
let name1="Vivek";
console.log("My string is "+ name1);
console.log("Data type is " + (typeof name));

let marks1=34.5;
console.log("Data type is " + (typeof marks1)+ marks1);

let isDrive= true;
console.log("Data type is " + (typeof isDrive)+ isDrive);

let nullVaar=null;
console.log("Data type is " + (typeof nullVaar)+ nullVaar);

console.log(undefined);
*/
/*
// Exercise 5 -Conversion & Co-ercion
let myVar;
myVar=String(48);
console.log(myVar,(typeof myVar));
let booleanVar = String(true);
console.log(booleanVar,(typeof booleanVar));
let date=String(new Date());
console.log(date,(typeof date));
let arr =String([1,5,8,6,4]);
console.log(arr,typeof arr);
let stri=Number("3457");
console.log(stri,typeof stri);
*/
/*
// Exercise 6 -String Properties

const detail="Vivek";
const greeting="Good morning";

console.log(greeting + " " + detail);

let html;
html = "<h1> This Is a Heading </h1>" + "<p> This is a Paragraph </p>";
html=html.concat('this','str2');
console.log(html);
console.log(html.length);
console.log(html.toLowerCase());
console.log(html.toUpperCase());
console.log(html[1]);
console.log(html.indexOf("<"));
console.log(html.lastIndexOf("<"));
console.log(html.charAt(3));
console.log(html.endsWith("kjbkjdb"));
console.log(html.includes("h1"));
console.log(html.substring(1,6));
console.log(html.slice(0,7));
console.log(html.split(">"));
console.log(html.replaceAll('This','it'));
*/
/*
// Exercise 7-Array & Length
let marks=[34,23,24,93,74,25];

const fruits=['orange','Apple','Pineapple'];

const mixed=["str",45,3,[5,6]];

const array=new Array(23,12,21,"orange");
console.log(mixed);
console.log(fruits[1]);

console.log(array.length);
console.log(Array.isArray('dfdf'));
array[1]="Vivek";
let arrElement=array[1];
console.log('element : ', arrElement);
console.log(array);
let value=marks.indexOf(74);
console.log(value);
*/
/*
// Exercise 8 - Conditional & Switches (IF & Else)
const age =65;
const doesDrive=false;

// const vari = 34;

if (age !=65){
  console.log("Age is Not 19");
}
else if (age ==65){
  console.log("Age is 65");
}
else{
  console.log("Age is Not 19");
}
*/
/*
// Exercise 9 - For , While & Do While

let aver=34;

for(let i=0; i<=aver;i++){
  console.log(i)
}
let jay=0;
while(jay<110){
console.log(jay);
jay++
}
let arr=[2,5,8,9,6,3,1];

for(let i=0;i<arr.length;i++){
  const element=arr[i];
  console.log(element);
}
arr.forEach(function(element,index,array){
  console.log(element,index,array);
});
let obj={
  name:"Vivek",
  age:29,
  type:"Complete Man",

}
for(let key in obj){
  console.log(`The ${key} of object is ${obj[key]}`);
}
*/
/*
// Exercise 10 - Java Script Function

console.log('this is tut 10');

if(1){
    let i =234;
    console.log(i)
}

// console.log(i);

function ui(name)
{
    let i = 9;
    console.log(i);
    return `This is a ${name} ui`;
}

// console.log(ui("harry"), i)
const mygreet = function(name, thank='Thank You'){
    let msg = `Happy Birthday ${name} How I wish I could fly to you right now and be with you on this special day of yours. But remember, my good wishes are always there with you. ${thank}!`;
    return msg;

}


let name = 'SkillF';
let name2 ='Rohan';

let val = mygreet(name, 'Thanks a lot');
console.log(val);


const myobj = {
    name: "SkillF",
    game: function(){
        return "GTA";
    }
}
console.log(myobj.game())

arr = ['fruit', 'vegetable', 'furniture'];

arr.forEach(function(element, index, array) {
    console.log(element, index)
});
*/

// Exercise 11 - Window Object

// console.log('This is tut 11');
// let a = window.document;
// alert('hello harry');
// a = prompt('This will destroy your computer. Type your name');

// a = confirm('Are you sure you want to delete this page?');
// a = window.innerHeight;
// a = innerWidth;
// a = scrollY;
// a = location.toString();
// a = window.history;
// console.log(a);

// Exercise-12 DOM
// console.log('Welcome to tut 12.js');
// let a = document;
// // a = document.all;
// a = document.body;
// a = document.forms[0];
// Array.from(a).forEach(function(element){
//     console.log(element);
// });
// // a = document.links[0];
// // use document.images and document.scripts and print the list of images and scripts on an html page
// // a=document.images;
// // a=document.scripts;
// console.log(a);


// Exercise 14 - Get Element

/*
element selectors:
1. Single element selector
2. Multi element selector

*/
/*
// 1. Single element selector
let element = document.getElementById('myfirst');
// element = element.className;
// element = element.childNodes;
// element = element.parentNode;

element.style.color = 'red';
console.log(element);

// element.innerText = 'Harry is a good boy';
// element.innerHTML = '<b>Harry is a good boy</b>';
// console.log(element.innerText);


// let sel = document.querySelector('#myfirst');
// sel = document.querySelector('.child');
// sel = document.querySelector('div');
// sel.style.color = 'green';
// console.log(sel)
//
// // 2. Multi element selector
// let elems = document.getElementsByClassName('child');
// // elems = document.getElementsByClassName('container');
// // elems = document.getElementsByTagName('div');
// // console.log(elems)

// // for (let index = 0; index < elems.length; index++) {
// //     const element = elems[index];
// //     console.log(element);
//   //  element.style.color = 'blue';
// // }
// Array.from(elems).forEach(element => {
//     console.log(element);
//   //  element.style.color = 'blue';
// });
// console.log(elems[0].getElementsByClassName('child'))
*/
/*
// Exercise 12 - DOM 

let a = document;
a=document.all;
a=document.body;
a=document.forms[0];
Array.from(a).forEach(function(element){
  console.log(element);
});
a=document.links[0];
a=document.images[0];
a=document.script;
console.log(a);
*/
/*
// Exercise -13 - Crawler Exercise
// Exercise 1
// You have to create a variable which is a string containing the text which is a link you are interested in. 

// You have to fetch all the links from a given page which contains this text

// codewithharry.com 
// javascript

let textString = "tutorials";
let links = document.links;
Array.from(links).forEach(function (element) {
  let href = element.href;
  if (href.includes(textString)){
    console.log(href);
  }
});
*/
/*
// Exercise 14 
// Single Element Selector

let element =document.getElementById('myfirst');
// element=element.className;
// element=element.childNode;
// element=element.parentNode;
// element.style.color="red";
// element.innerHTML="<b>Vivek is Good Boy</b>";
// console.log(element);

let sel=document.querySelector("#myfirst");
sel=document.querySelector(".child");
sel=document.querySelector("div");
sel.style.color="blue";
console.log(sel);

// Multi Selector
// let elems = document.getElementsByClassName('child');
// elems = document.getElementsByClassName('container');
// elems = document.getElementsByTagName('div');
// console.log(elems);
let elems=document.getElementById("child");
elems=document.getElementById("container");
elems=document.getElementsByTagName("div");
console.log(elems);

// for (let index = 0; index < elems.length; index++) {
//   const element = elems[index];
//   console.log(element);
//  element.style.color = 'blue'; 
// }
Array.from(elems).forEach(element => {
    console.log(element);
   element.style.color = 'blue'; 
});
// console.log(elems[0].getElementsByClassName('child'))
*/
/*
// Exercise 15 - Child, Parent , transverse
let cont=document.querySelector(".no");
cont=document.querySelector(".container");
console.log(cont);
let nodeName=cont.children[0].nodeName;
let nodeType=cont.childNodes[1].nodeType;
console.log(nodeType);
console.log(nodeName);

let container=document.querySelector('.container');
console.log(container.children[1].children[0].children);
console.log(container.children);
console.log(container.childElementCount);

console.log(container.firstElementChild.nextElementSibling.nextElementSibling);
*/
/*
// Exercise 16 - Creating Removing & Replacing Elements
let element=document.createElement("li");
let text=document.createTextNode("I am world");
element.appendChild(text);
element.className="childul";
element.id="createdLi";
element.setAttribute("style","margin:20px;");
// element.innerHTML="<b>My name is Vivek</b>";

(document.querySelector('.this')).appendChild(element);

let elem2=document.createElement('h3');
elem2.id='elem2';
elem2.className='elem2';
let txtNode=document.createTextNode("This is newley created");
elem2.appendChild(txtNode);


element.replaceWith(elem2);
let myul=document.querySelector(".this");
console.log(myul);
myul.replaceChild(element,document.getElementById("ful"));
myul.removeChild(document.getElementById("lul"));
let pr=elem2.hasAttribute("class");
console.log(elem2,pr);

let createHead=document.createElement("h3");
let headTxt=document.createTextNode("Do to Code With Harry");
createHead.appendChild(headTxt);
console.log(createHead);
let createAncor=document.createElement("a");
createAncor.setAttribute("href","https://www.codewithharry.com");
createAncor.innerHTML="<b>Click for Site</b>";

console.log(createAncor);

document.body.appendChild(createHead);
document.body.appendChild(createAncor);
*/
/*
// Exercise 17-Dom Events
let head=document.getElementById("heading");
head.addEventListener("click",function(e){
  let variable;
  console.log("You have Just clicked Heading");
  // console.log(e);
  variable=e.target;

  // variable=e.target.className;
  variable=Array.from(e.target.classList);
  variable=e.offsetX;
  variable=e.offsetY;
  variable=e.clientX;
  variable=e.clientY;
  // location.href="//codewithharry.com";
  console.log(variable);
  
});
*/
/*
// Exercise 18 - Type Of Click Event
let btn=document.getElementById("btn");
btn.addEventListener("click",func1)

function func1(e){
  console.log("Thanks",e);
  e.preventDefault();
}

btn.addEventListener("dblclick",func2);

function func2(e){
  console.log("Thanks Its a Double Click",e);
}
btn.addEventListener("mousedown",func3);

function func3(e){
  console.log("Thanks Its a Mouse Down",e);
}
// document.querySelector(".no").addEventListener('mouseenter',function(){
// console.log("you exitec no");
// });
document.querySelector(".container").addEventListener('mousemove',function(e){
  console.log(e.offsetX,e.offsetY);
  document.body.style.backgroundColor=`rgb(${e.offsetX},${e.offsetY},255)`;                  
  console.log("You triggered Mouse");
  });
  */
/*
// Exercise 20- Local Storage
let impArray=['adrak','Pyaaz','Dhaniya','Pudhina', 'Bengan','Tori'];

localStorage.setItem("Name","Vivek");
localStorage.setItem("name2","Roshan");
localStorage.setItem("Sabzi",JSON.stringify(impArray));
// localStorage.clear();
localStorage.removeItem("name2");
Name=JSON.parse(localStorage.getItem("Sabzi"));


console.log(Name);
*/
/*
// Exercise 21 - Editable Div Using JS
// You have to create a div and inject it into the page which contains a heading.
// whenever someone clicks on the div, it should be converted into an editable item. whenever user clicks away (blur). save the note into the local storage.

let divElem=document.createElement("div");
let val=localStorage.getItem("text");
if(val==null){
  text=document.createTextNode("This is my Element Click to Edit It..!!");
}
else{
  text=document.createTextNode(val); 
}
// let text=document.createTextNode("This is my text Node");

divElem.appendChild(text);
 divElem.setAttribute("id","elem");
 divElem.setAttribute("class","elem");
 divElem.setAttribute("style","border:2px solid black; width:150px;margin:34px;padding:23px");

let container=document.querySelector(".container");
let first=document.getElementById("myfirst");

container.insertBefore(divElem,first);

divElem.addEventListener("click",function(){
  let notextArea = document.getElementsByClassName("textarea").length;
  if(notextArea==0){   
  let html = divElem.innerHTML;
   divElem.innerHTML = ` <textarea class="textarea" id="textarea" rows="3">${html}</textarea>`;
  }
  let textarea=document.getElementById("textarea");
  textarea.addEventListener("blur",function() {
    elem.innerHTML=textarea.value;  
    localStorage  .setItem("text",textarea.value); 
  });  
});
*/
/*
// Exercise 23 - Math Object
let x=3;
let y=6;
let z;
z= Math;
z=Math.PI;
z=Math.E;
z=Math.round(5.9);
z=Math.ceil(5.3);
z=Math.floor(5.3);
z=Math.abs(5);
z=Math.pow(2,3);
z=Math.sqrt(64);
z=Math.min(2,3,4,5,6,7,8,10);
z=Math.max(2,3,4,5,6,7,8,10);
z=Math.random();
z=100*Math.random();
z=Math.ceil(50+(100-50)*Math.random());
console.log(z);
*/
/*
// Exercise 24- Date & Time
let today=new Date();
let otherDate= new Date('8-4-2009 12:45:36');
console.log(otherDate);

let a;
a=otherDate.getDate();
a=otherDate.getSeconds();

console.log(a);
otherDate.setMonth(0);
a=otherDate.getMonth();
console.log(otherDate);
let utcDate = new Date(Date.UTC(2018, 11, 1, 0, 0, 0));
console.log(utcDate);
*/

// // Exercise 27 Object  Literal
// let car={
//   name: "Maruti swift",
//   topSpeed:160,
//   run:function(){
//     console.log("car is running");
//   }
// };
// console.log(car);
