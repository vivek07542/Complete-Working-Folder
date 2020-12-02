var companyDetailsFromStorage = JSON.parse(localStorage.getItem("companyDetailsFromStorage"));
var companyDetails = JSON.parse(localStorage.getItem("companyDetails"));
// Append Value to Table
let companyDetail = document.querySelectorAll(".companyDetail");
companyDetail[0].innerText = companyDetails.companyname;
companyDetail[1].innerText = companyDetails.ownername;
companyDetail[2].innerText = companyDetails.website;
companyDetail[3].innerText = companyDetails.phonenumber;
// Show Tree on Show button
let showTreeBtn = document.getElementById("showTreeBtn");
showTreeBtn.addEventListener("click", function () {
  let markContainer = document.getElementById("markContainer");
  markContainer.style.display = "flex";
  let backend = document.getElementById("backend");
  backend.innerHTML = companyDetails.companytree;
  let companyName = document.getElementById("companyName");
  companyName.innerText = companyDetails.companyname;
  // caret();
});
// Edit Click Button on Popup
let editBtn = document.getElementById("editBtn");
editBtn.addEventListener("click", function () {
  var companyDetails = JSON.parse(localStorage.getItem("companyDetails"));
  companyDetails.editable = true;
  localStorage.setItem("companyDetails", JSON.stringify(companyDetails));
  setTimeout(function () { document.location.href = "tree_structure.html"; }, 3000);
});
// caret Toggle Function
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
// Close Button For Popup
closeDynamic.addEventListener("click", function () {
  markContainer.style.display = "none";
});