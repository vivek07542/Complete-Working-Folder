// Replace Special Character "*"" and "&"..from the text area.

  var inputText=document.getElementById('myTextarea');
  var displayText=document.getElementById('log');
  var btnReplace = document.getElementById('replace');  
  btnReplace.addEventListener("click",function(){  
  var str= inputText.value;
  displayText.textContent=str.replace(/[&*]/g, '$');;  
});

// Type 75 Text First then later rest on clicking Button.
var str="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste exercit...... quae repudiandae laborum repellat voluptates nostrum placeat quaerat tenetur esse dolor modi nihil, deleniti, quis quisquam voluptatem ea itaque ipsam et pariatur magnam fugit. Modi non aliquam excepturi cumque et, ullam voluptatem praesentium numquam amet pariatur assumenda asperiores harum enim illum, animi nihil autem? Vero accusamus numquam consectetur illo, aliquid vel quasi molestias. Cupiditate dolorem error, sunt dolorum voluptate id eum quisquam deleniti quo sit, officia, iure placeat dicta pariatur enim eligendi incidunt esse molestiae molestias neque? Accusamus atque corporis delectus necessitatibus! Sint ipsam qui porro ipsum, obcaecati soluta fugiat asperiores, quas impedit officiis assumenda nostrum aspernatur, debitis harum. Officiis natus aperiam animi deleniti? Voluptatibus quo animi tempore quibusdam laborum vitae repellendus voluptas maiores iure voluptatem, dolorem non repellat ab necessitatibus dolor quos ipsam dolore expedita dolores dolorum sit quisquam. Dicta harum praesentium non ducimus sed pariatur, quae fugit aspernatur ad voluptatum vel maiores nostrum laudantium officia sunt obcaecati magnam. Modi a tempore voluptatem sapiente sint nobis eaque quisquam totam sequi, veniam molestias cum? Quo officia debitis ipsum, nobis adipisci facere labore ratione modi a libero fugit asperiores vitae delectus, assumenda at neque. Veniam alias non temporibus optio facilis voluptatum porro rem. Reprehenderit quod atque repudiandae omnis eum natus perspiciatis minima at excepturi molestiae aut cupiditate ducimus iure eius repellendus, cum ipsam possimus, earum nemo, expedita obcaecati dolorum consequuntur? Cupiditate, neque ex id sunt animi laboriosam in. Minus accusamus tempora asperiores est vitae consequatur cumque corrupti. Quam aliquam adipisci non placeat tempora est. Rerum fugit, sit vero harum molestias debitis qui enim dolores sunt iure ipsa, soluta veniam ipsam? Optio sed tempora, tenetur, consectetur maxime quae nisi quaerat quibusdam in, itaque magnam delectus architecto fugit sit rerum ratione suscipit ipsa ab error! Nobis magni ratione, velit accusantium aliquid laboriosam. Adipisci!"
var display=document.getElementById("display");
var btnResult=document.getElementById("result");
display.textContent=str.substring(0,75);
btnResult.addEventListener("click",function(){
  display.textContent=str;
  btnResult.textContent="Read Less";  
  btnResult.addEventListener("click",function(){
    display.textContent=str.substring(0,75);
  });
});

// 300 Word Limit...With Counter
function limitText(limitField, limitCount, limitNum) {
  if (limitField.value.length > limitNum) {
    limitField.value = limitField.value.substring(0, limitNum);
  } else {
    limitCount.value = limitNum - limitField.value.length;
  }
}
// 2) Reverese the String
var reverseText=prompt("Plz type a text");
var outputText= document.getElementById("output");
outputText.textContent=reverseString(reverseText);
function reverseString(str) {
  // Step 1. Use the split() method to return a new array
  var splitString = str.split("");
  // Step 2. Use the reverse() method to reverse the new created array
  var reverseArray = splitString.reverse(); 
  // Step 3. Use the join() method to join all elements of the array into a string
  var joinArray = reverseArray.join("");   
  //Step 4. Return the reversed string
  return joinArray;
}


// 3) concatenate the separate string in one single line.
var Str1= "today's";
var Str2= "menu is:";
var Str3= "idli/dosa";
var list=document.getElementById("try");
list.textContent=Str1 +" "+ Str2 +" "+Str3 ;