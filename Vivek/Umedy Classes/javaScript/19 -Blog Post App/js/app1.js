let userFullName = document.getElementById("userFullName");
var loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

userFullName.innerText = loggedInUser.firstname + " " + loggedInUser.lastname;
let dropdownUserSignOut = document.getElementById("dropdownUserSignOut");
dropdownUserSignOut.addEventListener("click", function () {
    if (confirm("Do you want to Signout?")) {
        document.location.href = "blog_post-1.html";
    }
});

function dropdownProfile() {
    getDiv();
    editValueToProfile();
}
function getDiv() {
    let verticalTab = document.getElementById("verticalTab");
    verticalTab.style.display = "flex";
}
// function editValueToProfile() {
//     let objectToArray = Object.values(loggedInUser);
//     for (j = 0; j < objectToArray.length; j++) {
//         let profileUserValuePlacing = document.querySelectorAll(".UserInfoFromLocalStorage");
//         for (i = 0; i < profileUserValuePlacing.length; i++) {
//             if (i === j) {
//                 profileUserValuePlacing[i].innerText = objectToArray[j];
//             }
//         }
//     }
// }
function editValueToProfile() {
    var objectDetailUser = JSON.parse(localStorage.getItem("objectDetailUser"));
    console.log(objectDetailUser);
    objectDetailUser.forEach(function (user) {
        if (user.username === loggedInUser.username) {
            let profileUserValuePlacing = document.querySelectorAll(".UserInfoFromLocalStorage");
            profileUserValuePlacing[0].innerHTML = user.username;
            profileUserValuePlacing[1].innerHTML = user.password;
            profileUserValuePlacing[2].innerHTML = user.role;
            profileUserValuePlacing[3].innerHTML = user.firstname;
            profileUserValuePlacing[4].innerHTML = user.lastname;
            profileUserValuePlacing[5].innerHTML = user.phoneNumber;
        }
    });
}

// for (j = 0; j < objectDetailUser.length; j++) {
//     let objectToArray=Object.value(objectDetailUser[j])
//     objectToArray.forEach(function(user){
//         let profileUserValuePlacing = document.querySelectorAll(".UserInfoFromLocalStorage");
//         for (i = 0; i < profileUserValuePlacing.length; i++) {
//             if (i === j) {
//                 profileUserValuePlacing[i].innerText = objectToArray.user;                    
//             }
//         }    
//     });
//         // let objectToArray = Object.values(objectDetailUser);
// } 


// objectDetailUser.forEach(function(user){
//     let profileUserValuePlacing = document.querySelectorAll(".UserInfoFromLocalStorage");
//     for (i = 0; i < profileUserValuePlacing.length; i++) {
//         profileUserValuePlacing[i].innerText = user.;

//     }

// }); 

// }

let editProfileBtn = document.getElementById("editProfileBtn");
editProfileBtn.addEventListener("click", function () {
    debugger;
    if (editProfileBtn.innerText === "Save") {
        let editedInputValue = document.querySelectorAll(".textinput");
        let profileUserValuePlacing = document.querySelectorAll(".UserInfoFromLocalStorage");
        let arrayValuePush = [];
        for (i = 0; i < editedInputValue.length; i++) {
            for (j = 0; j < profileUserValuePlacing.length; j++) {
                if (i === j) {
                    if (profileUserValuePlacing[2].innerHTML === "user") {
                        profileUserValuePlacing[0].innerHTML = editedInputValue[0].value;
                        profileUserValuePlacing[1].innerHTML = editedInputValue[1].value;
                        profileUserValuePlacing[2].innerHTML = profileUserValuePlacing[2].innerHTML;
                        profileUserValuePlacing[3].innerHTML = editedInputValue[2].value;
                        profileUserValuePlacing[4].innerHTML = editedInputValue[3].value;
                        profileUserValuePlacing[5].innerHTML = editedInputValue[4].value;
                    }
                    else {
                        profileUserValuePlacing[j].innerHTML = editedInputValue[i].value;
                    }
                    arrayValuePush.push(profileUserValuePlacing[j].innerHTML);
                }
            }
        }
        // Value Assign To Local Storage 
        let editObject = {};
        editObject.userName = arrayValuePush[0];
        editObject.password = arrayValuePush[1];
        editObject.role = arrayValuePush[2]
        editObject.firstname = arrayValuePush[3];
        editObject.lastname = arrayValuePush[4];
        editObject.phonenumber = arrayValuePush[5]
        localStorage.setItem("loggedInUser", JSON.stringify(editObject));
        let userArray = [];
        userArray.push(editObject);
        localStorage.setItem("objectDetailUser", JSON.stringify(userArray));
        editProfileBtn.innerText = "Edit";
    }
    else {
        editProfileBtn.innerText = "Save";
        let profileUserValuePlacing = document.querySelectorAll(".UserInfoFromLocalStorage");
        for (i = 0; i < profileUserValuePlacing.length; i++) {
            let htmlInput = `<input class="form-control textinput" name="textinput" type="text" value="${profileUserValuePlacing[i].innerHTML}" />`;
            if (profileUserValuePlacing[i].innerHTML === "user") {
                profileUserValuePlacing[2].innerHTML = profileUserValuePlacing[2].innerHTML;
            }
            else {
                profileUserValuePlacing[i].innerHTML = htmlInput;
            }
        }
    }
});

function userTableGenerate() {  
    debugger;
        let myTable = document.querySelector("#tableBox");
        let table = document.getElementById("tblData");
        let headers = ["UserName", "Password", "Admin", "First Name", "Last Name", "Password", "Edit", "Delete"];
        let tableHead = document.createElement("thead");
        let headerRow = document.createElement("tr");       
        headers.forEach(headerText => {
            let header = document.createElement("th");
            header.setAttribute("scope", "col")
            let textNode = document.createTextNode(headerText);
            header.appendChild(textNode);
            headerRow.appendChild(header);
            tableHead.appendChild(headerRow);       
        });
        table.appendChild(tableHead);
        let tableBody = document.createElement("tbody");
        var objectDetailUser = JSON.parse(localStorage.getItem("objectDetailUser"));
        objectDetailUser.forEach(per => {
            let row = document.createElement("tr");
            row.setAttribute("scope", "row")
            Object.values(per).forEach(text => {
                let cell = document.createElement("td");
                // cell.setAttribute("scope","col")
                let textNode = document.createTextNode(text);
                cell.appendChild(textNode);
                row.appendChild(cell);
                tableBody.appendChild(row);
            })
            let editCell = document.createElement("td");
            let editButton = document.createElement("button");
            editButton.setAttribute("class", "btn btn-primary");
            editButton.innerHTML = "Edit";
            let deleteCell = document.createElement("td");
            let deleteButton = document.createElement("button");
            deleteButton.setAttribute("class", "btn btn-primary");
            deleteButton.innerHTML = "Delete";
            editCell.appendChild(editButton);
            deleteCell.appendChild(deleteButton);
            row.appendChild(editCell);
            row.appendChild(deleteCell);
            table.appendChild(tableBody);
        })
        myTable.appendChild(table);
    }
     








