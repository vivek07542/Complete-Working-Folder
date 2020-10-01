
var btnSubmit = document.getElementById("btnSubmit");
var userFirstName = document.getElementById("userFirstName");
var userLastName = document.getElementById("userLastName");
var rdbMaleGender = document.getElementById("rdbMaleGender");
var rdbFemaleGender = document.getElementById("rdbFemaleGender");
var txtUserAddress = document.getElementById("txtUserAddress");
var divGender = document.getElementById("divGender");
var txtUserMobileNo = document.getElementById("txtUserMobileNo");
var txtUserEmail = document.getElementById("txtUserEmail");
var userGender = document.getElementsByName("inlineRadioOptions");
var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
var chkFormData = document.getElementById("chkFormData");
var tblData = document.getElementById("tblData");
var markContainer = document.getElementById("markContainer");

// Select Function
var countryStateInfo = {
  "USA": {
    "California": {
      "Los Angeles": ["90001", "90002", "90003", "90004"],
      "San Diego": ["92093", "92101"]
    },
    "Texas": {
      "Dallas": ["75201", "75202"],
      "Austin": ["73301", "73344"]
    }
  },
  "India": {
    "Assam": {
      "Dispur": ["781005"],
      "Guwahati": ["781030", "781030"]
    },
    "Gujarat": {
      "Vadodara": ["390011", "390020"],
      "Surat": ["395006", "395002"]
    },
    "Madhya Pradesh": {
      "Indore": ["390011", "390020"],
      "Gwalior": ["395006", "395002"],
      "Bhopal": ["390011", "390020"],
      "Guna": ["395006", "395002"],
    },
    "Maharashtra": {
      "Mumbai": ["392001"],
      "Thane": ["401107"],
      "Pune": ["358110"]
    }
  }
}
window.onload = function () {

  //Get html elements
  var countySel = document.getElementById("countySel");
  var stateSel = document.getElementById("stateSel");
  var citySel = document.getElementById("citySel");

  //Load countries
  for (var country in countryStateInfo) {
    countySel.options[countySel.options.length] = new Option(country, country);
  }

  //County Changed
  countySel.onchange = function () {

    stateSel.length = 1; // remove all options bar first
    citySel.length = 1; // remove all options bar first		 

    if (this.selectedIndex < 1)
      return; // done

    for (var state in countryStateInfo[this.value]) {
      stateSel.options[stateSel.options.length] = new Option(state, state);
    }
  }

  //State Changed
  stateSel.onchange = function () {

    citySel.length = 1; // remove all options bar firs

    if (this.selectedIndex < 1)
      return; // done

    for (var city in countryStateInfo[countySel.value][this.value]) {
      citySel.options[citySel.options.length] = new Option(city, city);
    }
  }
}
// Button Submit Function
btnSubmit.addEventListener("click", function () {
  let isCreatedTr = true;
  let selTr = tblData.getElementsByTagName("tr");
  let selectedTr;
  for (i = 0; i < selTr.length; i++) {
    if (selTr[i].style.backgroundColor === "pink") {
      selectedTr = selTr[i];
      isCreatedTr = false;
      break;
    }
  }
  if(validateItem()){
    if (isCreatedTr){
      dynamicElementFormation();     
    }
    else{
      oldPositionPlacing(selectedTr);      
    }
    resetValue();
  };  
});
// validation Function
function validateItem() {
  // Validation of Forms
  // Validation Of Name..
  let isAllValidationPassed = true;
  if (userFirstName.value.trim() === "") {
    userFirstName.classList.add("displayBoxWrong");
    let errorDiv = userFirstName.nextElementSibling;
    errorDiv.classList.remove("invalidDisplay");
    errorDiv.classList.add("displayIfWrong");
    isAllValidationPassed = false;
  } else {
    userFirstName.classList.remove("displayBoxWrong");
    userFirstName.classList.add("displayBoxCorrect");
    let error = userFirstName.nextElementSibling;
    error.classList.remove("displayIfWrong");
    error.classList.add("invaliDisplay");
  }
  // Validation Of Last Name
  if (userLastName.value.trim() === "") {
    userLastName.classList.add("displayBoxWrong");
    let errorDiv = userLastName.nextElementSibling;
    errorDiv.classList.remove("invalidDisplay");
    errorDiv.classList.add("displayIfWrong");
    isAllValidationPassed = false;
  }
  else {
    userLastName.classList.remove("displayBoxWrong");
    userLastName.classList.add("displayBoxCorrect");
    let error = userLastName.nextElementSibling;
    error.classList.remove("displayIfWrong");
    error.classList.add("invalidDisplay");
  }
  // Validation Of State
  if (txtUserAddress.value.trim() === "") {
    txtUserAddress.classList.remove("displayBoxCorrect");
    txtUserAddress.classList.add("displayBoxWrong");
    let errorDiv = txtUserAddress.nextElementSibling;
    errorDiv.classList.remove("invalidDisplay");
    errorDiv.classList.add("displayIfWrong");
    isAllValidationPassed = false;
  }
  else {
    txtUserAddress.classList.remove("displayBoxWrong");
    txtUserAddress.classList.add("displayBoxCorrect");
    let error = txtUserAddress.nextElementSibling;
    error.classList.remove("displayIfWrong");
    error.classList.add("invalidDisplay");
  }
  //Validation For Radio Button
  if (rdbMaleGender.checked === false && rdbFemaleGender.checked === false) {
    // divGender.classList.add("displayBoxWrong");
    let errorDiv = divGender.childNodes[5];
    errorDiv.classList.remove("invalidDisplay");
    errorDiv.classList.add("displayIfWrong");
    isAllValidationPassed = false;
  } else {
    // divGender.classList.remove("displayBoxWrong");
    // divGender.classList.add("displayBoxCorrect");
    let error = divGender.childNodes[5];
    error.classList.remove("displayIfWrong");
    error.classList.add("invalidDisplay");
  }
  //Validation For Mobile Number
  if (txtUserMobileNo.value.length !== 10) {
    txtUserMobileNo.classList.remove("displayBoxCorrect");
    txtUserMobileNo.classList.add("displayBoxWrong");
    let errorDiv = txtUserMobileNo.nextElementSibling;
    errorDiv.classList.remove("invalidDisplay");
    errorDiv.classList.add("displayIfWrong");
    isAllValidationPassed = false;
  }
  else {
    txtUserMobileNo.classList.remove("displayBoxWrong");
    txtUserMobileNo.classList.add("displayBoxCorrect");
    let error = txtUserMobileNo.nextElementSibling;
    error.classList.remove("displayIfWrong");
    error.classList.add("invalidDisplay");
  }

  //Validation For Email Id
  if (txtUserEmail.value.match(pattern)) {
    txtUserEmail.classList.remove("displayBoxWrong");
    txtUserEmail.classList.add("displayBoxCorrect");
    let error = txtUserEmail.nextElementSibling;
    error.classList.remove("displayIfWrong");
    error.classList.add("invalidDisplay");
  }
  else {
    txtUserEmail.classList.remove("displayBoxCorrect");
    txtUserEmail.classList.add("displayBoxWrong");
    let errorDiv = txtUserEmail.nextElementSibling;
    errorDiv.classList.remove("invalidDisplay");
    errorDiv.classList.add("displayIfWrong");
    isAllValidationPassed = false;
  }
  //Validation For Select Item
  if (countySel.value === "") {
    countySel.classList.remove("displayBoxCorrect");
    countySel.classList.add("displayBoxWrong");
    let errorDiv = countySel.nextElementSibling;
    errorDiv.classList.remove("invalidDisplay");
    errorDiv.classList.add("displayIfWrong");
    isAllValidationPassed = false;
  }
  else {
    countySel.classList.remove("displayBoxWrong");
    countySel.classList.add("displayBoxCorrect");
    let error = countySel.nextElementSibling;
    error.classList.remove("displayIfWrong");
    error.classList.add("invalidDisplay");
  }
  // Validation For State
  if (stateSel.value === "") {
    stateSel.classList.remove("displayBoxCorrect");
    stateSel.classList.add("displayBoxWrong");
    let errorDiv = stateSel.nextElementSibling;
    errorDiv.classList.remove("invalidDisplay");
    errorDiv.classList.add("displayIfWrong");
    isAllValidationPassed = false;
  }
  else {
    stateSel.classList.remove("displayBoxWrong");
    stateSel.classList.add("displayBoxCorrect");
    let error = stateSel.nextElementSibling;
    error.classList.remove("displayIfWrong");
    error.classList.add("invalidDisplay");
  }
  // Validation For City
  if (citySel.value === "") {
    citySel.classList.remove("displayBoxCorrect");
    citySel.classList.add("displayBoxWrong");
    let errorDiv = citySel.nextElementSibling;
    errorDiv.classList.remove("invalidDisplay");
    errorDiv.classList.add("displayIfWrong");
    isAllValidationPassed = false;
  }
  else {
    citySel.classList.remove("displayBoxWrong");
    citySel.classList.add("displayBoxCorrect");
    let error = citySel.nextElementSibling;
    error.classList.remove("displayIfWrong");
    error.classList.add("invalidDisplay");
  }
  // Validation For Check Box

  if (chkFormData.checked === false) {
    chkFormData.classList.remove("displayBoxCorrect");
    chkFormData.classList.add("displayBoxWrong");    
    let errorDiv = chkFormData.nextElementSibling;
    errorDiv.classList.remove("invalidDisplay");
    errorDiv.classList.add("displayIfWrong");
    isAllValidationPassed = false;
  }
  else {
    chkFormData.classList.remove("displayBoxWrong");
    chkFormData.classList.add("displayBoxCorrect");
    let error = chkFormData.nextElementSibling.nextElementSibling;
    error.classList.remove("displayIfWrong");
    error.classList.add("invalidDisplay");
  }
  return isAllValidationPassed;
}
// Dyanamically Created Table
function dynamicElementFormation() {
  // console.log("Save Button Activated");
  let tblTr = document.createElement("tr");
  tblTr.className = "tblTr";
  let tblTdUserName = document.createElement("td");
  tblTdUserName.innerHTML = userFirstName.value + " " + userLastName.value;
  // let tblTdLastName = document.createElement("td");
  let tblTdRdbGender = document.createElement("td");
  // Gender Function
  for (i = 0; i < userGender.length; i++) {
    if (userGender[i].checked) {
      tblTdRdbGender.innerHTML = userGender[i].value;
    }
  }
  let tblTdAddress = document.createElement("td");
  tblTdAddress.innerHTML = txtUserAddress.value;
  let tblTdCountry = document.createElement("td");
  tblTdCountry.innerHTML = countySel.value;
  let tblTdState = document.createElement("td");
  tblTdState.innerHTML = stateSel.value;
  let tblTdCity = document.createElement("td");
  tblTdCity.innerHTML = citySel.value;
  let tblTdMobile = document.createElement("td");
  tblTdMobile.innerHTML = txtUserMobileNo.value;
  let tblTdEmail = document.createElement("td");
  tblTdEmail.innerHTML = txtUserEmail.value;
  let tblTdEdit = document.createElement("td");
  tblTdEdit.innerHTML = " Edit ";
  tblTdEdit.addEventListener("click", function () {
    let parentTr = tblTdEdit.parentNode;
    parentTr.style.backgroundColor = "pink";
    // Name Edit
    userFirstName.value = parentTr.children[0].innerText.split(" ")[0];
    userLastName.value = parentTr.children[0].innerText.split(" ")[1];
    // Gender Edit
    if (rdbFemaleGender.value === parentTr.children[1].innerText) {
      rdbFemaleGender.checked = true;
    } else {
      rdbMaleGender.checked = true;
    };
    // Address Edit        
    txtUserAddress.value = parentTr.children[2].innerText;
    // Country Edit
    countySel.value = parentTr.children[3].innerText;
    // State Edit 
    stateSel.value = parentTr.children[4].innerText;
    // City Sel 
    citySel.value = parentTr.children[5].innerText;
    // Mobile Edit
    txtUserMobileNo.value = parentTr.children[6].innerText;
    // Email Edit
    txtUserEmail.value = parentTr.children[7].innerText;

    // parentTr.parentNode.removeChild(parentTr);
  });
  let tblTdDelete = document.createElement("td");
  tblTdDelete.innerHTML = " Delete ";
  tblTdDelete.addEventListener("click", function () {
    if (confirm("Do you want to delete the details?")) {
      let parentTr = tblTdDelete.parentNode;
      parentTr.parentNode.removeChild(parentTr);
    }
  });
  let tblTdMarkup = document.createElement("td");
  tblTdMarkup.innerHTML = " Mark ";
  tblTdMarkup.addEventListener("click",function(){
    popUp();
  });
  tblTr.appendChild(tblTdUserName);
  tblTr.appendChild(tblTdRdbGender);
  tblTr.appendChild(tblTdAddress);
  tblTr.appendChild(tblTdCountry);
  tblTr.appendChild(tblTdState);
  tblTr.appendChild(tblTdCity);
  tblTr.appendChild(tblTdMobile);
  tblTr.appendChild(tblTdEmail);
  tblTr.appendChild(tblTdEdit);
  tblTr.appendChild(tblTdDelete);
  tblTr.appendChild(tblTdMarkup);
  tblData.appendChild(tblTr);
}
// Extracting & Placing Value to Old Place
function oldPositionPlacing(selectedTr){

  let selectedTds = selectedTr.getElementsByTagName("td");
  selectedTds[0].innerHTML = userFirstName.value + " " + userLastName.value;
  for (i = 0; i < userGender.length; i++) {
    if (userGender[i].checked) {
      selectedTds[1].textContent = userGender[i].value;
    }
  }
  selectedTds[2].innerHTML = txtUserAddress.value;
  selectedTds[3].innerHTML = countySel.value;
  selectedTds[4].innerHTML = stateSel.value;
  selectedTds[5].innerHTML = citySel.value;
  selectedTds[6].innerHTML = txtUserMobileNo.value;
  selectedTds[7].innerHTML = txtUserEmail.value;
  selectedTr.removeAttribute("style");
}
// Reseting the Value After Submit
function resetValue(){
  userFirstName.value = "";
  userLastName.value = "";
  rdbMaleGender.checked = false;
  rdbFemaleGender.checked = false;
  txtUserAddress.value = "";
  txtUserMobileNo.value = "";
  txtUserEmail.value = "";
  countySel.value = "";
  stateSel.value = "";
  citySel.value = "";
  chkFormData.checked = false;
}
// Pop Up Function 
function popUp(){
  markContainer.style.display="flex";
}
// close Function 
let closeDynamic = document.getElementById("closeDynamic");
closeDynamic.addEventListener("click",function(){
  markContainer.style.display="none";
});

