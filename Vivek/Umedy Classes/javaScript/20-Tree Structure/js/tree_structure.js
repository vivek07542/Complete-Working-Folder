var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
var companyDetailsFromStorage =  JSON.parse(localStorage.getItem("companyDetailsFromStorage"));
// function For Storage in Local Storage
function setDetailOfAdmin() {
  if (localStorage.getItem("companyDetailsFromStorage") === null) {
      let userArrayDetail = [];
      let userDetail = {
          companyname: "rishabEnterprises",
          ownername: "Vivek Bindal",
          website: "vivek@gmail.com",
          phonenumber: 8888269609,
      }
      userArrayDetail.push(userDetail);
      localStorage.setItem("companyDetailsFromStorage", JSON.stringify(userArrayDetail));
  }
}
// Function For Horizontal Tab....
function openPage(pageName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";      
    }  
    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }  
    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";  
    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
  }  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();
// function For Validate Company Name
  function companyNameValidate(){
    setDetailOfAdmin(); 
   let InputCompanyName= document.getElementById("InputCompanyName");
   companyDetailsFromStorage.forEach(e=>{
     if(e.companyname===InputCompanyName.value || InputCompanyName.value.trim()===""){
       document.getElementById("verificationTextNotAvailable").style.display="block";
       document.getElementById("verificationTextAvailable").style.display="none";  
       isValidateCompanyName=false;     
     }
     else{
      document.getElementById("verificationTextAvailable").style.display="block";
      document.getElementById("verificationTextNotAvailable").style.display="none";
     }
   }); 
  }
// Function For Next Button Click
let nextButton=document.getElementById("nextButton");
nextButton.addEventListener("click",function(){
  let inputCompanyData=document.querySelectorAll(".InputCompanyDetail");
  if(validation(inputCompanyData)){
    document.getElementById("tab2ClickOpen").disabled=false;
    document.getElementById("tab2ClickOpen").click();
  };  
});
// Function For Validate
function validation(element) {
  let trueArray = [];
  let isAllValidationPassed = true;
  element.forEach(function(e,index){
      genericTextboxValidator(e,index,trueArray);      
      if(index===0){
        document.getElementById("displayCompanyName").innerText=e.value;
      }
  });
  isAllValidationPassed = trueArray.every(checkBoolean);
  return isAllValidationPassed;
}
function checkBoolean(elem) {
  return elem === true;
}
function genericTextboxValidator(input,index, trueArray) {
  let isValid = true;
  if (input.value.trim() === "") {
      input.classList.add("inputWrong");
      isValid = false;
  }
 else if(index==3){
    if(input.value.length !==10){
      input.classList.add("inputWrong");   
      isValid = false;   
    }
    else{
      input.classList.add("inputCorrect");      
    }
  }
 else if(index==2){
    if(input.value.match(pattern)){
      input.classList.add("inputCorrect");      
    }
    else{
      input.classList.add("inputWrong");
      isValid = false;
    }
  }
  else {
    input.classList.add("inputCorrect");
  }
  trueArray.push(isValid);
  return trueArray;
}
// Save Button Click Event
let saveBtn=document.getElementById("saveBtn");
saveBtn.addEventListener("click",function(){
  // document.getElementById("markContainer").style.display="flex";
  document.getElementById("createBox2Tree").style.display="block";
  document.getElementById("createBox1_Company").style.display="none";
});