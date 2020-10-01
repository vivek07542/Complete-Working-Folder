var userFirstName = document.getElementById("userFirstName");
var userLastName= document.getElementById("userLastName");
var rdbMaleGender = document.getElementById("rdbMaleGender");
var rdbFemaleGender = document.getElementById("rdbFemaleGender");
var userGender=document.getElementsByName("radio-stacked");
var txtUserMobileNo=document.getElementById("txtUserMobileNo");
var txtUserEmail = document.getElementById("txtUserEmail");
var btnSubmit = document.getElementById("btnSubmit");
var tblData = document.getElementById("tblData");
var txtUserAddress =document.getElementById("txtUserAddress");

// Validation Code
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {          
          event.preventDefault();
          event.stopPropagation();
          phonenumber(txtUserMobileNo);          
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();





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
			"Guwahati" : ["781030", "781030"]
		},
		"Gujarat": {
			"Vadodara" : ["390011", "390020"],
			"Surat" : ["395006", "395002"]
    },
    "Madhya Pradesh": {
    "Indore" : ["390011", "390020"],
    "Gwalior" : ["395006", "395002"],
    "Bhopal" : ["390011", "390020"],
    "Guna" : ["395006", "395002"],
    },
    "Maharashtra" : {
      "Mumbai" : ["392001"],
      "Thane" : ["401107"],
      "Pune" : ["358110"]
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

btnSubmit.addEventListener("click",function(){
  console.log("Save Button Activated");
  let tblTr=document.createElement("tr");
  tblTr.className="tblTr";
  let tblTdUserName = document.createElement("td");
  tblTdUserName.innerHTML= userFirstName.value + " " +userLastName.value;
  // let tblTdLastName = document.createElement("td");
  let tblTdRdbGender = document.createElement("td");
  // Gender Function
    for(i = 0; i < userGender.length; i++) { 
      if(userGender[i].checked){ 
      tblTdRdbGender.innerHTML= userGender[i].value;
      }
    }    
  let tblTdAddress = document.createElement("td");
  tblTdAddress.innerHTML = txtUserAddress.value;
  let tblTdCountry = document.createElement("td");
  tblTdCountry.innerHTML= countySel.value;
  let tblTdState = document.createElement("td");
  tblTdState.innerHTML = stateSel.value;
  let tblTdCity = document.createElement("td");
  tblTdCity.innerHTML=citySel.value;
  let tblTdMobile = document.createElement("td");
  tblTdMobile.innerHTML= txtUserMobileNo.value;
  let tblTdEmail = document.createElement("td");
  tblTdEmail.innerHTML=txtUserEmail.value;
  let tblTdEdit = document.createElement("td");
  let tblTdDelete = document.createElement("td");
  let tblTdMarkup = document.createElement("td");

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
});

function validate(input){
  if(/^\s/.test(input.value))
    input.value = '';
}

function phonenumber(inputtxt)
{
  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if(inputtxt.value.match(phoneno))
     {
	   return true;
	 }
   else
     {
	   alert("Not a valid Phone Number");
	   return false;
     }
}