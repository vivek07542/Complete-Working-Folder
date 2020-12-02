var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
var companyDetailsFromStorage = JSON.parse(localStorage.getItem("companyDetailsFromStorage"));
// function For Storage in Local Storage
function setDetailOfAdmin() {
  debugger;
  if (localStorage.getItem("companyDetailsFromStorage") === null) {
    let userArrayDetail = [];
    let userDetail = {
      companyname: "Pradeep and Company",
      ownername: "Vivek Bindal",
      website: "vivek@gmail.com",
      phonenumber: 8888269609,
      companytree: "",
    };
    userArrayDetail.push(userDetail);
    localStorage.setItem("companyDetailsFromStorage", JSON.stringify(userArrayDetail));
  }
}
// Function For Horizontal Tab....
function openPage(pageName, elmnt, color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
  setDetailOfAdmin();
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
// function For Validate Company Name
function companyNameValidate() {
  verifyCompanyFromStorage();
}
// function For Company Name Verification
function verifyCompanyFromStorage() {
  let InputCompanyName = document.getElementById("InputCompanyName");
  let isValidateCompanyName = true;
  var companyDetailsFromStorage = JSON.parse(localStorage.getItem("companyDetailsFromStorage"));
  companyDetailsFromStorage.forEach(e => {
    if (e.companyname === InputCompanyName.value || InputCompanyName.value.trim() === "") {
      document.getElementById("verificationTextNotAvailable").style.display = "block";
      document.getElementById("verificationTextAvailable").style.display = "none";
      isValidateCompanyName = false;
    }
    else {
      document.getElementById("verificationTextAvailable").style.display = "block";
      document.getElementById("verificationTextNotAvailable").style.display = "none";
    }
  });
  return isValidateCompanyName;
}
// Function For Next Button Click
let nextButton = document.getElementById("nextButton");
nextButton.addEventListener("click", function () {
  let inputCompanyData = document.querySelectorAll(".inputCompanyDetail");
  if (validation(inputCompanyData)) {
    document.getElementById("tab2ClickOpen").disabled = false;
    document.getElementById("tab2ClickOpen").click();
  };
});
// Function For Validate
function validation(element) {
  let trueArray = [];
  let isAllValidationPassed = true;
  element.forEach(function (e, index) {
    genericTextboxValidator(e, index, trueArray);
  });
  isAllValidationPassed = trueArray.every(checkBoolean);
  return isAllValidationPassed;
}
// Check All Validatation Array
function checkBoolean(elem) {
  return elem === true;
}
// General Function for Validation
function genericTextboxValidator(input, index, trueArray) {
  let isValid = true;
  if (input.value.trim() === "") {
    input.classList.add("inputWrong");
    isValid = false;
  }
  else if (index == 0) {
    isValid = verifyCompanyFromStorage();
    document.getElementById("displayCompanyName").innerText = input.value;
  }
  else if (index == 3) {
    if (input.value.length !== 10) {
      input.classList.add("inputWrong");
      isValid = false;
    }
    else {
      input.classList.add("inputCorrect");
    }
  }
  else if (index == 2) {
    if (input.value.match(pattern)) {
      input.classList.add("inputCorrect");
    }
    else {
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
// Tree Structure JS
let backend = document.getElementById("backend");
let createParent = document.getElementById("addParent");
// create Parent Button Click
createParent.addEventListener("click", function () {
  backend.innerHTML += `<li><span class="edit createLi" id="edit">Parent</span></li>`;
  editText();
});
// Create Sibling Button Click
let createSibling = document.getElementById("addSibling");
createSibling.addEventListener("click", function () {
  let tree = document.getElementById("tree");
  let ul = tree.querySelectorAll("ul");
  let lastUl = ul[ul.length - 1];
  lastUl.innerHTML += `<li><span class="edit createLi" id="edit">Sibling</span></li>`;
  editText();
});
// Create Child Button Click
let createChild = document.getElementById("addChild");
createChild.addEventListener("click", function () {
  let li = backend.querySelectorAll("li");
  let lastLi = li[li.length - 1];
  let parentLi = lastLi;
  parentLi.innerHTML = "";
  parentLi.innerHTML += `<span class ="caret-down edit createLi" id="edit" onClick="caret()" >Parent</span><ul class='nested'><li> <span class="edit" id="edit">Child</span></li></ul>`;
  editText();
});
// Delete Button Click
let deleteBtn = document.getElementById("deleteBtn");
deleteBtn.addEventListener("click", function () {
  let li = backend.querySelectorAll("li");
  lastLi = li[li.length - 1];
  let parentElement = lastLi.parentElement;
  if (parentElement.childElementCount === 1) {
    if (backend.childElementCount === 1) {
      lastLi.remove();
    }
    else {
      parentElement.remove();
    }
  }
  else {
    lastLi.remove();
  }
});
// Caret Toggele Function
function caret() {
  let carets = document.getElementsByClassName("caret-down");
  for (i = 0; i < carets.length; i++) {
    carets[i].addEventListener("click", function () {
      this.classList.toggle('caret');
      parent = this.parentElement;
      parent.querySelector('.nested').classList.toggle('active')
    });
  }
}
// Edit Text
function editText() {
  let editText = document.getElementsByClassName("edit");
  for (i = 0; i < editText.length; i++) {
    editText[i].addEventListener("dblclick", function () {
      let inputLength = document.getElementsByClassName("inputForm").length;
      if (inputLength == 0) {
        let html = this.innerText;
        this.innerText = "";
        this.innerHTML = `<input class="inputForm form-control" id="inputForm" value = "${html}"> </input>`;
      };
      blurEvent();
    });
  }
}
// Blur Event For Input Value
function blurEvent() {
  let inputForm = document.getElementById("inputForm");
  inputForm.addEventListener("blur", function () {
    let parentElem = this.parentElement;
    if (inputForm.value !== null) {
      parentElem.innerHTML = inputForm.value;
    }
  });
}
// Fetching Company Details
function companyDetails() {
  let backend = document.getElementById("backend");
  let inputCompanyData = document.querySelectorAll(".inputCompanyDetail");
  let userObject = {};
  userObject.companyname = inputCompanyData[0].value;
  userObject.ownername = inputCompanyData[1].value;
  userObject.website = inputCompanyData[2].value;
  userObject.phonenumber = inputCompanyData[3].value;
  userObject.companytree = backend.innerHTML;
  localStorage.setItem("companyDetails", JSON.stringify(userObject));
  let userArray = JSON.parse(localStorage.getItem("companyDetailsFromStorage"));
  userArray.forEach(function (e, index) {
    if (e.companyname === inputCompanyData[0].value) {
      userArray.splice(index, 1);
      localStorage.setItem('companyDetailsFromStorage', JSON.stringify(userArray));
    }
  });
  userArray.push(userObject);
  localStorage.setItem("companyDetailsFromStorage", JSON.stringify(userArray));
}
// Save Button Click Event
let saveBtn = document.getElementById("saveBtn");
saveBtn.addEventListener("click", function () {
  companyDetails();
  setTimeout(function () { document.location.href = "company_tree.html"; }, 3000);
});
// If Window load from Company Structure.
window.addEventListener('load', function () {
  let companyDetails = JSON.parse(localStorage.getItem("companyDetails"));
  if (companyDetails.editable === true && companyDetails !== null) {
    document.getElementById("tab2ClickOpen").disabled = false;
    document.getElementById("tab2ClickOpen").click();
    let backend = document.getElementById("backend");
    let inputCompanyDetails = document.querySelectorAll(".inputCompanyDetail");
    inputCompanyDetails[0].value = companyDetails.companyname;
    inputCompanyDetails[1].value = companyDetails.ownername;
    inputCompanyDetails[2].value = companyDetails.website;
    inputCompanyDetails[3].value = companyDetails.phonenumber;
    backend.innerHTML = companyDetails.companytree;
    delete companyDetails.editable
    localStorage.setItem("companyDetails", JSON.stringify(companyDetails));
    editText();
  }
});