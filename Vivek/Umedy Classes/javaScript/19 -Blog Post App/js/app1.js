let userFullName = document.getElementById("userFullName");
var loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
var objectDetailUser = JSON.parse(localStorage.getItem("objectDetailUser"));
var myProfileDiv = document.getElementById("myProfileDiv");
var createPostPopup = document.getElementById("createPostPopup");

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
            profileUserValuePlacing[5].innerHTML = user.phonenumber;
        }
    });
}
let editProfileBtn = document.getElementById("editProfileBtn");
editProfileBtn.addEventListener("click", function () {
    if (editProfileBtn.innerText === "Save") {
        let editedInputValue = document.querySelectorAll(".textinput");
        let profileUserValuePlacing = document.querySelectorAll(".UserInfoFromLocalStorage");
        let arrayValuePush = [];
        for (i = 0; i < editedInputValue.length; i++) {
            for (j = 0; j < profileUserValuePlacing.length; j++) {
                if (profileUserValuePlacing[2].innerHTML === "user") {
                    profileUserValuePlacing[0].innerHTML = editedInputValue[0].value;
                    profileUserValuePlacing[1].innerHTML = editedInputValue[1].value;
                    profileUserValuePlacing[2].innerHTML = profileUserValuePlacing[2].innerHTML;
                    profileUserValuePlacing[3].innerHTML = editedInputValue[2].value;
                    profileUserValuePlacing[4].innerHTML = editedInputValue[3].value;
                    profileUserValuePlacing[5].innerHTML = editedInputValue[4].value;
                }
                else {
                    if (i === j) {
                        profileUserValuePlacing[j].innerHTML = editedInputValue[i].value;
                    }
                }
                arrayValuePush.push(profileUserValuePlacing[j].innerHTML);
            }
        }
        // Value Assign To Local Storage 
        let editObject = {};
        editObject.username = arrayValuePush[0];
        editObject.password = arrayValuePush[1];
        editObject.role = arrayValuePush[2]
        editObject.firstname = arrayValuePush[3];
        editObject.lastname = arrayValuePush[4];
        editObject.phonenumber = arrayValuePush[5]
        localStorage.setItem("loggedInUser", JSON.stringify(editObject));
        let userArray = JSON.parse(localStorage.getItem("objectDetailUser"));
        userArray.forEach(function (e, index) {
            if (e.username === arrayValuePush[0]) {
                userArray.splice(index, 1);
                localStorage.setItem('objectDetailUser', JSON.stringify(userArray));
            }
        });
        userArray.push(editObject);
        localStorage.setItem("objectDetailUser", JSON.stringify(userArray));
        editProfileBtn.innerText = "Edit";
    }
    else {
        editProfileBtn.innerText = "Save";
        let profileUserValuePlacing = document.querySelectorAll(".UserInfoFromLocalStorage");
        for (i = 0; i < profileUserValuePlacing.length; i++) {
            let htmlInput = `<input class="form-control textinput" name="textinput" value="${profileUserValuePlacing[i].innerHTML}" />`;
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
    objectDetailUser.forEach(per => {
        let row = document.createElement("tr");
        row.setAttribute("class", "tableEachRow")
        row.setAttribute("scope", "row")
        Object.values(per).forEach(text => {
            let cell = document.createElement("td");
            cell.setAttribute("class", "tableEachCell")
            let textNode = document.createTextNode(text);
            cell.appendChild(textNode);
            row.appendChild(cell);
            tableBody.appendChild(row);
        })
        let editCell = document.createElement("td");
        let editButton = document.createElement("button");
        editButton.setAttribute("class", "btn btn-primary");
        editButton.setAttribute("id", "userEditBtn")
        editButton.innerHTML = "Edit";
        editButton.addEventListener("click", function () {
            editClick(editButton);
        });
        let deleteCell = document.createElement("td");
        let deleteButton = document.createElement("button");
        deleteButton.setAttribute("id", "userDeleteBtn")
        deleteButton.setAttribute("class", "btn btn-primary");
        deleteButton.innerHTML = "Delete";
        deleteButton.addEventListener("click", function () {
            deleteUser(deleteButton);
        });
        editCell.appendChild(editButton);
        deleteCell.appendChild(deleteButton);
        row.appendChild(editCell);
        row.appendChild(deleteCell);
        table.appendChild(tableBody);
    })
    myTable.appendChild(table);
}

function deleteUser(deleteButton) {
    if (confirm("Do you want to Delete this User?")) {
        let parentTr = deleteButton.parentNode.parentNode;
        parentTr.parentNode.removeChild(parentTr);
        let userNameToDelete = parentTr.children[0];
        objectDetailUser.forEach(function (e, index) {
            if (e.username === userNameToDelete.innerText) {
                objectDetailUser.splice(index, 1);
                localStorage.setItem('objectDetailUser', JSON.stringify(objectDetailUser));
            }
        });
    }
}

let createNewUserBtn = document.getElementById("createNewUserBtn");
createNewUserBtn.addEventListener("click", function () {
    markContainer.style.display = "flex";
    myProfileDiv.style.display = "block";
    createPostPopup.style.display = "none";
    selectUserPopup.style.display = "none";
});

closeDynamic.addEventListener("click", function () {
    markContainer.style.display = "none";

});

function editClick(editButton) {
    markContainer.style.display = "flex";
    myProfileDiv.style.display = "block";
    let newUserInputValue = document.querySelectorAll(".createUserInputData");
    let parentTr = editButton.parentNode.parentNode;
    let parentChildren = parentTr.querySelectorAll(".tableEachCell");
    for (i = 0; i < parentChildren.length; i++) {
        for (j = 0; j < newUserInputValue.length; j++) {
            if (i === j) {
                newUserInputValue[j].value = parentChildren[i].innerText;
            }
        }
    }
}

let createdUserDetailSubmitBtn = document.getElementById("createdUserDetailSubmitBtn");
createdUserDetailSubmitBtn.addEventListener("click", function () {
    debugger;
    let newUserInputValue = document.querySelectorAll(".createUserInputData");
    let objectCreate = {};
    objectCreate.username = newUserInputValue[0].value;
    objectCreate.password = newUserInputValue[1].value;
    objectCreate.role = newUserInputValue[2].value;
    objectCreate.firstname = newUserInputValue[3].value;
    objectCreate.lastname = newUserInputValue[4].value;
    objectCreate.phonenumber = newUserInputValue[5].value;
    let userArray = JSON.parse(localStorage.getItem("objectDetailUser"));
    userArray.forEach(function (e, index) {
        if (e.username === objectCreate.username) {
            userArray.splice(index, 1);
            localStorage.setItem('objectDetailUser', JSON.stringify(userArray));
        }
    });
    userArray.push(objectCreate);
    localStorage.setItem("objectDetailUser", JSON.stringify(userArray));
    resetValue(newUserInputValue);
});
function resetValue(newUserInputValue) {
    for (i = 0; i < newUserInputValue.length; i++) {
        newUserInputValue[i].value = "";
    }
    markContainer.style.display = "none";
    myProfileDiv.style.display = "none";
}
// Horizontal Tab Open JS
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    let verticalTab = document.getElementById("verticalTab");
    verticalTab.style.display = "none";
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
// To Create New Post

function PopupClickEvent() {
    markContainer.style.display = "flex";
    createPostPopup.style.display = "block";
    myProfileDiv.style.display = "none";
    selectUserPopup.style.display = "none";
}
let userTextPost = document.getElementById("userTextPost");
// let userCreatePostBtn=document.getElementById("userCreatePostBtn");
// userCreatePostBtn.addEventListener("click",function(){

// });
function createPost() {
    let userTextPost = document.getElementById("userTextPost");
    let postObject = {};
    postObject.post = userTextPost.value;
    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    postObject.date = date + ' ' + time;
    postObject.username = loggedInUser.username;
    if(loggedInUser.role==="admin"){
        postObject.approved=true;
        let createArray=[];
        objectDetailUser.forEach(e =>{
            createArray.push(e.username);            
        }); 
        postObject.sharePost=createArray;
    }
    else{
        postObject.approved = false;
        postObject.sharePost = "";
    };
    if (localStorage.getItem("userPosts") === null) {
        let postArray = [];
        postArray.push(postObject);
        localStorage.setItem("userPosts", JSON.stringify(postArray));
    }
    else {
        let postArray = JSON.parse(localStorage.getItem("userPosts"));
        postArray.push(postObject);
        localStorage.setItem("userPosts", JSON.stringify(postArray));
    };
    resetPost();
}
function resetPost() {
    userTextPost.value = "";
    markContainer.style.display = "none";
}
let allPost = document.getElementById("allPost");
allPost.addEventListener("click", function () {
    let postDisplayDivDynamically = document.getElementById("postDisplayDivDynamically");
    let AdminApproval = true;
    allPostClick(postDisplayDivDynamically, AdminApproval);
});

let pendingPost = document.getElementById("pendingPost");
pendingPost.addEventListener("click", function () {
    let postDisplayDivDynamicallyForApproval = document.getElementById("postDisplayDivDynamicallyForApproval");
    let userApproval = false;
    allPostClick(postDisplayDivDynamicallyForApproval, userApproval);
});

let promotionalPost = document.getElementById("promotionalPost");
promotionalPost.addEventListener("click",function(){
    debugger;
    let postDisplayDivForAdmin = document.getElementById("postDisplayDivForAdmin");
    let AdminApproval = true;
    if(loggedInUser.role==="admin"){
        allPostClick(postDisplayDivForAdmin, AdminApproval);
    };
});

function allPostClick(div, approval) {
    let postArray = JSON.parse(localStorage.getItem("userPosts"));
    postArray.forEach(e => {
        debugger;
        if (e.username === loggedInUser.username || loggedInUser.role === "admin") {
            debugger;
            if (approval === false) {
                if (e.approved === false) {
                    postCreated(div, e, approval);
                }
            }
            if (approval === true) {
                if (e.approved === true) {
                    postCreated(div, e);
                }
            }
        }

        else if (e.sharePost !== "") {
            debugger;
            for (i = 0; i < e.sharePost.length; i++) {
                if (e.sharePost[i] === loggedInUser.username) {
                    for (j = 0; j < objectDetailUser.length; j++) {
                        debugger;
                        if (objectDetailUser[j].username === e.sharePost[i]) {
                            debugger;
                            if (approval === true) {
                                if (e.approved === true) {
                                    postCreated(div, e);
                                }
                            }
                        }
                    }
                    break;
                }
            }
        }
    });
}

function postCreated(div, e, approval) {
    let postDiv = document.createElement("div");
    postDiv.setAttribute("class", "postDiv");
    let localStoragePost = document.createElement("div");
    localStoragePost.setAttribute("class", "localStoragePost");
    let postFromLocalByUsers = document.createElement("p");
    postFromLocalByUsers.setAttribute("class", "postText")
    let seeMoreBtn = document.createElement("a");
    seeMoreBtn.setAttribute("class", "seeMoreBtn");
    seeMoreBtn.innerHTML = "Read More";
    let str = e.post;
    postFromLocalByUsers.textContent = str.substring(0, 20) + ".....";
    readMore(seeMoreBtn, postFromLocalByUsers, str);
    let userPostDetail = document.createElement("div");
    userPostDetail.setAttribute("class", "userPostDetail");
    if (approval === false && loggedInUser.role ==="admin") {
        let adminApprovalCheckBox = document.createElement("input");
        adminApprovalCheckBox.setAttribute("type", "checkbox")
        adminApprovalCheckBox.setAttribute("id", "adminApprovalCheckBox")
        userPostDetail.appendChild(adminApprovalCheckBox);
        adminApprovalCheckBox.addEventListener("click", function () {
            chkBoxSelect(adminApprovalCheckBox);
        });
    };
    let postByUserName = document.createElement("span");
    postByUserName.innerText = e.username;
    let postDate = document.createElement("span");
    postDate.innerText = e.date;
    localStoragePost.appendChild(postFromLocalByUsers);
    localStoragePost.appendChild(seeMoreBtn);
    postDiv.appendChild(localStoragePost);
    userPostDetail.appendChild(postByUserName);
    userPostDetail.appendChild(postDate);
    postDiv.appendChild(userPostDetail);
    div.appendChild(postDiv);
}

function readMore(seeMoreBtn, postFromLocalByUsers, str) {
    seeMoreBtn.addEventListener("click", function () {
        if (seeMoreBtn.innerHTML == "Read More") {
            postFromLocalByUsers.textContent = str;
            seeMoreBtn.textContent = "Read Less";
        }
        else {
            postFromLocalByUsers.textContent = str.substring(0, 20) + ".....";
            seeMoreBtn.innerHTML = "Read More"
        }
    });
}
function limitText(limitField, limitCount, limitNum) {
    if (limitField.value.length > limitNum) {
        limitField.value = limitField.value.substring(0, limitNum);
    } else {
        limitCount.value = limitNum - limitField.value.length;
    }
}
function chkBoxSelect(adminApprovalCheckBox) {
    if (adminApprovalCheckBox.checked === true) {
        let adminSelectUserName = adminApprovalCheckBox.nextSibling;
        if (confirm("Do you want to allow this post to be visible to other users?")) {
            let selectUserPopup = document.getElementById("selectUserPopup");
            markContainer.style.display = "flex";
            selectUserPopup.style.display = "block";
            myProfileDiv.style.display = "none";
            let postArray = JSON.parse(localStorage.getItem("objectDetailUser"));
            postArray.forEach(function (e) {
                if (e.role !== "admin") {
                    if (e.username !== adminSelectUserName.innerText) {
                        let createUserForPost = document.getElementById("createUserForPost");
                        let divForUser = document.createElement("div");
                        divForUser.setAttribute("class", "divSelUser")
                        let selInputBox = document.createElement("input");
                        selInputBox.setAttribute("type", "checkbox");
                        selInputBox.setAttribute("class", "selCheckBox")
                        let allUserName = document.createElement("span");
                        allUserName.innerText = e.username;
                        divForUser.appendChild(selInputBox);
                        divForUser.appendChild(allUserName);
                        createUserForPost.appendChild(divForUser);
                    }
                }
            });
        }
        else {
            let adminSelectedUserName = adminApprovalCheckBox.nextSibling.nextSibling;
            let postArray = JSON.parse(localStorage.getItem("userPosts"));
            postArray.forEach(function (e) {
                if (e.date === adminSelectedUserName.innerText) {
                    e.approved = true;
                    localStorage.setItem("userPosts", JSON.stringify(postArray));
                }
            });
        }
    }
    return adminApprovalCheckBox;
}

let userSelectedBtn = document.getElementById("userSelectedBtn");
userSelectedBtn.addEventListener("click", function () {
    let selCheckBox = document.querySelectorAll(".selCheckBox");
    let postForSelectedUserArray = [];
    for (i = 0; i < selCheckBox.length; i++) {
        if (selCheckBox[i].checked === true) {
            postForSelectedUserArray.push(selCheckBox[i].nextSibling.innerText);
            //   console.log(postForSelectedUserArray);
        }
    }
    appendArrayToLocalStorage(postForSelectedUserArray);
});

function appendArrayToLocalStorage(postForSelectedUserArray) {
    let postArray = JSON.parse(localStorage.getItem("userPosts"));
    let userNameOfSelectedPost = chkBoxSelect(adminApprovalCheckBox)
    for (i = 0; userNameOfSelectedPost.length; i++) {
        if (userNameOfSelectedPost[i].checked === true) {
            var selPostDate = userNameOfSelectedPost[i].nextSibling.nextSibling.innerText;
            break;
        }
    }
    postArray.forEach(function (e) {
        if (e.date === selPostDate) {
            e.approved = true;
            e.sharePost = postForSelectedUserArray;
            localStorage.setItem("userPosts", JSON.stringify(postArray));
        }
    });
    markContainer.style.display = "none";
}
