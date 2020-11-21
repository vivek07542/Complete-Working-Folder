let userFullName = document.getElementById("userFullName");
var loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
var objectDetailUser = JSON.parse(localStorage.getItem("objectDetailUser"));
var myProfileDiv = document.getElementById("myProfileDiv");
var createPostPopup = document.getElementById("createPostPopup");
var box = document.getElementById("box");
// Nav user Name
userFullName.innerText = loggedInUser.firstname + " " + loggedInUser.lastname;
// SignOut ClickEvent
let dropdownUserSignOut = document.getElementById("dropdownUserSignOut");
dropdownUserSignOut.addEventListener("click", function () {
    if (confirm("Do you want to Signout?")) {
        document.location.href = "blog_post-1.html";
    }
});
// Profile Click Event
function dropdownProfile() {
    getDiv();
    editValueToProfile();
}
// My Profile Click Event Function
function getDiv() {
    let verticalTab = document.getElementById("verticalTab");
    loadingStartAndStop();
    setTimeout(function () { verticalTab.style.display = "flex"; }, 3000);
    if (loggedInUser.role === "user") {
        let userForAdminTab = document.getElementById("userForAdminTab");
        userForAdminTab.style.display = "none";
    }
    document.getElementById("postContentDisplay").style.display = "none";
    document.querySelectorAll(".tabcontent").forEach(e => {
        e.style.display = "none";
    });
}
// Fetching Value Of Logged In User/Admin Form Local Storage As MyProfile Clicked
function editValueToProfile() {
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
// Edit button Click Event On MyProfile
let editProfileBtn = document.getElementById("editProfileBtn");
editProfileBtn.addEventListener("click", function () {
    if (editProfileBtn.innerText === "Save") {
        let editedInputValue = document.querySelectorAll(".textinput");
        if (validation(editedInputValue)) {
            let profileUserValuePlacing = document.querySelectorAll(".UserInfoFromLocalStorage");
            let arrayValuePush = [];
            profileUserValuePlacing[0].innerText = profileUserValuePlacing[0].innerText;
            profileUserValuePlacing[1].innerText = editedInputValue[0].value;
            profileUserValuePlacing[2].innerText = profileUserValuePlacing[2].innerHTML;
            profileUserValuePlacing[3].innerText = editedInputValue[1].value;
            profileUserValuePlacing[4].innerText = editedInputValue[2].value;
            profileUserValuePlacing[5].innerText = editedInputValue[3].value;
            for (i = 0; i < profileUserValuePlacing.length; i++) {
                arrayValuePush.push(profileUserValuePlacing[i]);
            }
            // Value Assign To Local Storage 
            let editObject = {};
            editObject.username = arrayValuePush[0].innerText;
            editObject.password = arrayValuePush[1].innerText;
            editObject.role = arrayValuePush[2].innerText;
            editObject.firstname = arrayValuePush[3].innerText;
            editObject.lastname = arrayValuePush[4].innerText;
            editObject.phonenumber = arrayValuePush[5].innerText;
            localStorage.setItem("loggedInUser", JSON.stringify(editObject));
            let userArray = JSON.parse(localStorage.getItem("objectDetailUser"));
            userArray.forEach(function (e, index) {
                if (e.username === arrayValuePush[0].innerText) {
                    userArray.splice(index, 1);
                    localStorage.setItem('objectDetailUser', JSON.stringify(userArray));
                }
            });
            userArray.push(editObject);
            localStorage.setItem("objectDetailUser", JSON.stringify(userArray));
            editProfileBtn.innerText = "Edit";
        };
    }
    else {
        editProfileBtn.innerText = "Save";
        let profileUserValuePlacing = document.querySelectorAll(".UserInfoFromLocalStorage");
        let passwordValue = `<input class="form-control textinput" name="textinput" value="${profileUserValuePlacing[1].innerHTML}" />`;
        profileUserValuePlacing[0].innerHTML = profileUserValuePlacing[0].innerHTML;
        profileUserValuePlacing[1].innerHTML = passwordValue;
        profileUserValuePlacing[2].innerHTML = profileUserValuePlacing[2].innerHTML;
        for (i = 3; i < profileUserValuePlacing.length; i++) {
            let htmlInput = `<input class="form-control textinput" name="textinput" value="${profileUserValuePlacing[i].innerHTML}" />`;
            profileUserValuePlacing[i].innerHTML = htmlInput;
        }
    }
});
// User Click Function For Admin Only
let userForAdminTab = document.getElementById("userForAdminTab");
userForAdminTab.addEventListener("click", function () {    
    let table = document.getElementById("tblData");
    let list_item1 = JSON.parse(localStorage.getItem("objectDetailUser"));
    let pagination_element3 = document.getElementById("pagination3");
    var current_page = 1;
    let rows = 5;
    let tableApproval = "To the Table";
    table.innerHTML = "";

    if (table.innerHTML === "") {
        displayList(list_item1, table, rows, current_page, tableApproval);
        setupPagination(list_item1, pagination_element3, rows, current_page, table, tableApproval);
    }
});
// Function to generate table on user click
function userTableGenerate(paginatedItem, rows_per_page) {
    let table = document.getElementById("tblData");
    let headers = [{ title: "UserName", isSort: false }, { title: "Password", isSort: false }, { title: "Admin", isSort: false }, { title: "First Name", isSort: true }, { title: "Last Name", isSort: false }, { title: "Mobile Number", isSort: false }, { title: "Edit", isSort: false }, { title: "Delete", isSort: false }]
    let tableHead = document.createElement("thead");
    let headerRow = document.createElement("tr");
    headers.forEach(headerText => {
        let header = document.createElement("th");
        header.setAttribute("scope", "col");
        let title = document.createElement("span");
        title.innerText = headerText.title;
        header.appendChild(title);
        if (headerText.isSort === true) {
            let headerSortButton = document.createElement("button");
            headerSortButton.setAttribute("class", "headerSortButton");
            let desc = false;
            headerSortButton.addEventListener("click", function () {
                let tableApproval = "To the Table";
                let current_page = 1;
                let items = sortArrayBy(paginatedItem,"firstname", desc);
                displayList(items, table, rows_per_page, current_page, tableApproval);
            });
            let buttonSymbol = document.createElement("i");
            buttonSymbol.setAttribute("class", "fa fa-sort-alpha-asc");
            buttonSymbol.setAttribute("aria-hidden", "true");
            headerSortButton.appendChild(buttonSymbol);
            // 2 Decending Button
            let headerSortButton1 = document.createElement("button");
            headerSortButton1.setAttribute("class", "headerSortButton");
            let desc1 = true;
            headerSortButton1.addEventListener("click", function () {
                let tableApproval = "To the Table";
                let current_page = 1;
                let items = sortArrayBy(paginatedItem,"firstname", desc1);
                displayList(items, table, rows_per_page, current_page, tableApproval);
            });
            let buttonSymbol1 = document.createElement("i");
            buttonSymbol1.setAttribute("class", "fa fa-sort-alpha-desc");
            buttonSymbol1.setAttribute("aria-hidden", "true");
            headerSortButton1.appendChild(buttonSymbol1);
            header.appendChild(headerSortButton);
            header.appendChild(headerSortButton1);
        }
        headerRow.appendChild(header);
        tableHead.appendChild(headerRow);
    });
    table.appendChild(tableHead);
    let tableBody = document.createElement("tbody");
    paginatedItem.forEach(per => {
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
    // myTable.appendChild(table);
}
// Delete User Click Event
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
// Create user Click Event
let createNewUserBtn = document.getElementById("createNewUserBtn");
createNewUserBtn.addEventListener("click", function () {
    markContainer.style.display = "flex";
    myProfileDiv.style.display = "block";
    createPostPopup.style.display = "none";
    selectUserPopup.style.display = "none";
});
// PopUp Close Button Click event
closeDynamic.addEventListener("click", function () {
    markContainer.style.display = "none";
});
// Function for Edit
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
// Create User Click Event 
let createdUserDetailSubmitBtn = document.getElementById("createdUserDetailSubmitBtn");
createdUserDetailSubmitBtn.addEventListener("click", function () {
    let newUserInputValue = document.querySelectorAll(".createUserInputData");
    if (validation(newUserInputValue)) {
        createUser(newUserInputValue);
        resetValue(newUserInputValue);
    };
});
// Create User Function
function createUser(newUserInputValue) {
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
}
// Validation for Create User
function validation(element) {
    let trueArray = [];
    let isAllValidationPassed = true;
    element.forEach(e => {
        genericTextboxValidator(e, trueArray);
    });
    isAllValidationPassed = trueArray.every(checkBoolean);
    return isAllValidationPassed;
}
function checkBoolean(elem) {
    return elem === true;
}
function genericTextboxValidator(input, trueArray) {
    let isValid = true;
    if (input.value.trim() === "") {
        input.classList.add("validateRedBorder")
        isValid = false;
    }
    else {
        input.classList.add("validateGreenBorder")
    }
    trueArray.push(isValid);
    return trueArray;
}
// reset Function for Create User
function resetValue(newUserInputValue) {
    for (i = 0; i < newUserInputValue.length; i++) {
        newUserInputValue[i].value = "";
    }
    markContainer.style.display = "none";
    myProfileDiv.style.display = "none";
}
// To Create New Post pop up 
function PopupClickEvent() {
    markContainer.style.display = "flex";
    createPostPopup.style.display = "block";
    myProfileDiv.style.display = "none";
    selectUserPopup.style.display = "none";
}
// Function for Create Post Pop Up by user and admin
let userTextPost = document.getElementById("userTextPost");
function createPost() {
    if (validation1(userTextPost)) {
        createPostArrayObjectCreate();
        resetPost();
    }
}
// Validation for Create Post
function validation1(userTextPost) {
    let isAllValidationPassed = true;
    if (userTextPost.value.trim() === "") {
        userTextPost.classList.add("validateRedBorder")
        isAllValidationPassed = false;
    }
    else {
        userTextPost.classList.add("validateGreenBorder")
    }
    return isAllValidationPassed;
}
// Function to store post in local storage
function createPostArrayObjectCreate() {
    let userTextPost = document.getElementById("userTextPost");
    let postObject = {};
    postObject.post = userTextPost.value;
    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    postObject.date = date + ' ' + time;
    postObject.username = loggedInUser.username;
    if (loggedInUser.role === "admin") {
        postObject.approved = true;
        let createArray = [];
        objectDetailUser.forEach(e => {
            createArray.push(e.username);
        });
        postObject.sharePost = createArray;
    }
    else {
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
}
// Function to reset value and close popUp
function resetPost() {
    userTextPost.value = "";
    markContainer.style.display = "none";
}
// Click Post on Navbar Click Event
let clickPostEvent = document.getElementById("clickPostEvent");
clickPostEvent.addEventListener("click", function () {
    if (loggedInUser.role === "user") {
        let promotionalPost = document.getElementById("promotionalPost");
        promotionalPost.style.display = "none";
    }
    else {
        promotionalPost.style.display = "block";
    }
    document.getElementById("allPost").click();
    document.getElementById("postContentDisplay").style.display = "block";
    verticalTab.style.display = "none";
});
// All Post Click Event
let allPost = document.getElementById("allPost");
allPost.addEventListener("click", function () {
    let postDisplayDivDynamically = document.getElementById("postDisplayDivDynamically");
    let AdminApproval = true;
    let list_item = JSON.parse(localStorage.getItem("postForallPost"));
    let pagination_element1 = document.getElementById("pagination1");
    var current_page = 1;
    let rows = 5;
    postDisplayDivDynamically.innerHTML = "";
    if (postDisplayDivDynamically.innerHTML === "") {
        loadingStartAndStop();
        setTimeout(function () { box.style.display = "block"; }, 3000);
        allPostClick(postDisplayDivDynamically, AdminApproval);
        sortButton(list_item, postDisplayDivDynamically, rows, current_page, AdminApproval);
        displayList(list_item, postDisplayDivDynamically, rows, current_page, AdminApproval);
        setupPagination(list_item, pagination_element1, rows, current_page, postDisplayDivDynamically, AdminApproval);
    }
});
// Pending Post Click Event
let pendingPost = document.getElementById("pendingPost");
pendingPost.addEventListener("click", function () {
    let postDisplayDivDynamicallyForApproval = document.getElementById("postDisplayDivDynamicallyForApproval");
    let userApproval = false;
    let list_item = JSON.parse(localStorage.getItem("postForPending"));
    let pagination_element = document.getElementById("pagination");
    var current_page = 1;
    let rows = 5;
    postDisplayDivDynamicallyForApproval.innerHTML = "";
    if (postDisplayDivDynamicallyForApproval.innerHTML === "") {
        loadingStartAndStop();
        allPostClick(postDisplayDivDynamicallyForApproval, userApproval);
        sortButton(list_item, postDisplayDivDynamicallyForApproval, rows, current_page, userApproval);
        displayList(list_item, postDisplayDivDynamicallyForApproval, rows, current_page, userApproval);
        setupPagination(list_item, pagination_element, rows, current_page, postDisplayDivDynamicallyForApproval, userApproval);
    }
});
// Promotional Post Click Event
let promotionalPost = document.getElementById("promotionalPost");
promotionalPost.addEventListener("click", function () {
    let postDisplayDivForAdmin = document.getElementById("postDisplayDivForAdmin");
    let AdminApproval = "showToAdmin";
    let list_item = JSON.parse(localStorage.getItem("postByAdmin"));
    let pagination_element2 = document.getElementById("pagination2");
    var current_page = 1;
    let rows = 5;
    postDisplayDivForAdmin.innerHTML = "";
    if (loggedInUser.role === "admin" && postDisplayDivForAdmin.innerHTML === "") {
        loadingStartAndStop();
        allPostClick(postDisplayDivForAdmin, AdminApproval);
        sortButton(list_item, postDisplayDivForAdmin, rows, current_page, AdminApproval);
        displayList(list_item, postDisplayDivForAdmin, rows, current_page, AdminApproval);
        setupPagination(list_item, pagination_element2, rows, current_page, postDisplayDivForAdmin, AdminApproval);
    };
});
// sort Button For Sorting And Click Event For Sort Button
function sortButton(list_item, wrapper, rows_per_page, current_page, approval) {
    let arrayList=arrayForDisplay(list_item, wrapper, rows_per_page, current_page, approval);    
    let desc = false;
    let sortButton = document.querySelectorAll(".sorting");
    for (i = 0; i < sortButton.length; i++) {
        sortButton[i].addEventListener("click", function () {
            let items = sortArrayBy(arrayList, "date", desc);
            displayList(items, wrapper, rows_per_page, current_page, approval)
            desc = !desc;
        });
    }
}
// Sort Function for Post Date Vise...
function sortArrayBy(array, sort, desc) {
    array.sort(function (a, b) {
        if (a[sort] < b[sort]) return -1;
        if (a[sort] > b[sort]) return 1;
        return 0;
    });
    if (desc) array.reverse();
    return array;    
}
// Conditions to use selected post and recreate the post as per Pending Post,All Post & Promotional Post
function allPostClick(div, approval) {
    let postArray = JSON.parse(localStorage.getItem("userPosts"));
    pendingPostArray = [];
    approvedPost = [];
    adminPost = [];
    // let arrayForPage=[];  
    if (postArray !== null) {
        postArray.forEach(e => {
            if (e.username === loggedInUser.username || loggedInUser.role === "admin") {
                // Condition For Pending Post
                if (approval === false) {
                    if (e.approved === false) {
                        pendingPostArray.push(e);
                        localStorage.setItem("postForPending", JSON.stringify(pendingPostArray));
                    }
                }
                // Condition For all post
                if (approval === true && approval !== "showToAdmin") {
                    for (i = 0; i < objectDetailUser.length; i++) {
                        if (e.approved === true && objectDetailUser[i].username === e.username && objectDetailUser[i].role !== "admin") {
                            // postCreated(div, e, approval);
                            approvedPost.push(e);
                            localStorage.setItem("postForallPost", JSON.stringify(approvedPost));
                        }
                    }
                }
                // Condition For Promotional Post
                if (approval === "showToAdmin") {
                    for (i = 0; i < objectDetailUser.length; i++) {
                        if (e.approved === true && objectDetailUser[i].username === e.username && objectDetailUser[i].role === "admin") {
                            // postCreated(div, e, approval);
                            adminPost.push(e);
                            localStorage.setItem("postByAdmin", JSON.stringify(adminPost));
                        }
                    }
                }
            }
            else if (e.sharePost !== "") {
                for (i = 0; i < e.sharePost.length; i++) {
                    if (e.sharePost[i] === loggedInUser.username) {
                        for (j = 0; j < objectDetailUser.length; j++) {

                            if (objectDetailUser[j].username === e.sharePost[i]) {

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
}
// Pagination
// Div ceate as per page size and extract detail 
function arrayForDisplay(items, wrapper, rows_per_page, current_page, approval) {
    wrapper.innerHTML = "";
    current_page--;
    let start = rows_per_page * current_page;
    let end = start + rows_per_page;
    var paginatedItem = items.slice(start, end);
    return paginatedItem;
}
function displayList(items, wrapper, rows_per_page, current_page, approval) {
    wrapper.innerHTML = "";
    current_page--;
    let start = rows_per_page * current_page;
    let end = start + rows_per_page;
    var paginatedItem = items.slice(start, end);
    if (approval === "To the Table") {
        userTableGenerate(paginatedItem, rows_per_page);
    }
    else {
        paginatedItem.forEach(e => {
            postCreated(wrapper, e, approval);
        });
    }
}
// Setup for Pagination 
function setupPagination(items, wrapper, rows_per_page, current_page, wrapper1, approval) {
    wrapper.innerHTML = "";
    let page_count = Math.ceil(items.length / rows_per_page);
    let selectPageRow = document.createElement("select");
    selectPageRow.classList.add("select");
    let option0 = document.createElement("option");
    option0.innerText = "Please Select Post Size";
    option0.setAttribute("selected", "selected");
    option0.disabled = true;
    let option1 = document.createElement("option");
    option1.innerText = 5;
    option1.value = 5;
    let option2 = document.createElement("option");
    option2.innerText = 10;
    option2.value = 10;
    let option3 = document.createElement("option");
    option3.innerText = 20;
    option3.value = 20;
    selectPageRow.appendChild(option0);
    selectPageRow.appendChild(option1);
    selectPageRow.appendChild(option2);
    selectPageRow.appendChild(option3);
    wrapper.appendChild(selectPageRow);
    selectPageRow.addEventListener("change", function () {
        allOption = selectPageRow.querySelectorAll("option");
        let rowsPerPage = selectPageRow.value;
        for (i = 0; i < allOption.length; i++) {
            if (selectPageRow.value === allOption[i].value) {
                allOption[i].setAttribute("selected", "selected");
            }
            break;
        }
        rows_per_page = rowsPerPage;
        displayList(items, wrapper1, rows_per_page, current_page, approval);
        setupPagination(items, wrapper, rows_per_page, current_page, wrapper1, approval)
    });
    let firstBtn = document.createElement("button");
    firstBtn.innerText = "First";
    firstBtn.classList.add("pageButton")
    wrapper.appendChild(firstBtn);
    firstBtn.addEventListener("click", function () {
        current_page = 1;
        btnClick(items, wrapper1, rows_per_page, current_page, firstBtn, approval,wrapper,page_count);
    });
    let nextBtn = document.createElement("button");
    nextBtn.innerText = "Next";
    nextBtn.classList.add("pageButton")
    wrapper.appendChild(nextBtn);
    nextBtn.addEventListener("click", function () {
        current_page = current_page + 1;
        btnClick(items, wrapper1, rows_per_page, current_page, nextBtn, approval,wrapper,page_count);
    });
    for (let i = 1; i < page_count + 1; i++) {
        let btn = paginationButton(i, items, current_page, rows_per_page, wrapper1, page_count, wrapper, approval);
        wrapper.appendChild(btn);
    }
    let previousBtn = document.createElement("button");
    previousBtn.innerText = "Prev";
    previousBtn.classList.add("pageButton");
    wrapper.appendChild(previousBtn);
    previousBtn.addEventListener("click", function () {
        current_page = current_page - 1;
        btnClick(items, wrapper1, rows_per_page, current_page, previousBtn, approval,wrapper,page_count);
    });
    let lastBtn = document.createElement("button");
    lastBtn.innerText = "Last";
    lastBtn.classList.add("pageButton");
    wrapper.appendChild(lastBtn);
    lastBtn.addEventListener("click", function () {
        current_page = page_count;
        btnClick(items, wrapper1, rows_per_page, current_page, lastBtn, approval,wrapper,page_count);
    });
    conditionForButtons(current_page, page_count, wrapper);
}
// Condition For Buttons when to active and remove...
function conditionForButtons(current_page, page_count, wrapper) {
    let buttonCondition = wrapper.querySelectorAll(".pageButton");
    let allButton = wrapper.querySelectorAll("button");
    for (i = 0; i < buttonCondition.length; i++) {
        if (current_page === 1 && current_page !== page_count) {
            buttonCondition[0].disabled = true;
            buttonCondition[2].disabled = true;
            buttonCondition[1].disabled = false;
            buttonCondition[3].disabled = false;
            if (buttonCondition[i].disabled === true) {
                buttonCondition[i].style.backgroundColor = "rgb(204,204,204)";
            }
            else {
                buttonCondition[i].style.backgroundColor = "#44AAEE";
            }
        }
        else if (current_page === page_count && current_page !== 1) {
            buttonCondition[0].disabled = false;
            buttonCondition[2].disabled = false;
            buttonCondition[1].disabled = true;
            buttonCondition[3].disabled = true;
            if (buttonCondition[i].disabled === true) {
                buttonCondition[i].style.backgroundColor = "rgb(204,204,204)";
            }
            else {
                buttonCondition[i].style.backgroundColor = "#44AAEE";
            }
        }
        else if (current_page === page_count && current_page === 1) {
            buttonCondition[i].disabled = true;
            if (buttonCondition[i].disabled === true) {
                buttonCondition[i].style.backgroundColor = "rgb(204,204,204)";
            }
        }
        else {
            buttonCondition[i].disabled = false;
            if (buttonCondition[i].disabled === false) {
                buttonCondition[i].style.backgroundColor = "#44AAEE";
            }
        }
    }
    for (j = 0; j < allButton.length; j++) {
        if (current_page == allButton[j].innerText) {
            allButton[j].classList.add("active");
        }
        else {
            allButton[j].classList.remove("active");
        }
    }
}
// Loop for Button create for Pagination
function paginationButton(page, items, current_page, rows_per_page, wrapper1, page_count, wrapper, approval) {
    let button = document.createElement('button');
    button.innerText = page;
    if (current_page == page) button.classList.add('active');
    button.addEventListener('click', function () {
        current_page = page;
        btnClick(items, wrapper1, rows_per_page, current_page, button, approval,wrapper,page_count);
    });
    return button;
}
// all Function Button Click
function btnClick(items, wrapper1, rows_per_page, current_page, clickBtn, approval,wrapper,page_count) {
    conditionForButtons(current_page, page_count, wrapper);
    loadingStartAndStop();
    displayList(items, wrapper1, rows_per_page, current_page, approval);
    clickBtn.classList.add('active');
};
// To Create Post Dynamically For Pending Post,All Post & Promotional Post
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
    postFromLocalByUsers.textContent = str.substring(0, 100) + ".....";
    readMore(seeMoreBtn, postFromLocalByUsers, str);
    let userPostDetail = document.createElement("div");
    userPostDetail.setAttribute("class", "userPostDetail");
    if (approval === false && loggedInUser.role === "admin") {
        let adminApprovalCheckBox = document.createElement("input");
        adminApprovalCheckBox.setAttribute("type", "checkbox");
        adminApprovalCheckBox.setAttribute("class", "adminApprovalCheckBox");
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
// Read More function for Paragraph tag or for the post to show Read More/Read Less on Click Event
function readMore(seeMoreBtn, postFromLocalByUsers, str) {
    seeMoreBtn.addEventListener("click", function () {
        if (seeMoreBtn.innerHTML == "Read More") {
            postFromLocalByUsers.textContent = str;
            seeMoreBtn.textContent = "Read Less";
        }
        else {
            postFromLocalByUsers.textContent = str.substring(0, 200) + ".....";
            seeMoreBtn.innerHTML = "Read More";
        }
    });
}
// To Set Limit & function for input Count in Create Post Popup
function limitText(limitField, limitCount, limitNum) {
    if (limitField.value.length > limitNum) {
        limitField.value = limitField.value.substring(0, limitNum);
    } else {
        limitCount.value = limitNum - limitField.value.length;
    }
}
// Function if admin clicked checkbox
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
}
// User Select for Post By Admin Submit Btn Click Event
let userSelectedBtn = document.getElementById("userSelectedBtn");
userSelectedBtn.addEventListener("click", function () {
    let selCheckBox = document.querySelectorAll(".selCheckBox");
    let postForSelectedUserArray = [];
    for (i = 0; i < selCheckBox.length; i++) {
        if (selCheckBox[i].checked === true) {
            postForSelectedUserArray.push(selCheckBox[i].nextSibling.innerText);
        }
    }
    appendArrayToLocalStorage(postForSelectedUserArray);
});
// To set the user to sharePost of selected post to local Storage
function appendArrayToLocalStorage(postForSelectedUserArray) {
    let postArray = JSON.parse(localStorage.getItem("userPosts"));
    let userNameOfSelectedPost = document.querySelectorAll(".adminApprovalCheckBox");
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
// Function for Tab
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
    verticalTab.style.display = "none";
    avoidCreatePostToAdmin();
}
//   function to stop Admin to create Post
function avoidCreatePostToAdmin() {
    if (loggedInUser.role === "admin") {
        document.getElementById("createNewPostBtn1").style.display = "none";
        document.getElementById("createNewPostBtn2").style.display = "none";
    }
}
// Function For Loading Div
function loadingStartAndStop() {
    setTimeout(loadingWait, 0010)
    setTimeout(stopLoadWait, 3000)
}
// Function To Display Load Div
function loadingWait() {
    let loadingDiv = document.getElementById("loadingDiv");
    loadingDiv.style.display = "flex";
}
// Function To Hide Load Div
function stopLoadWait() {
    let loadingDiv = document.getElementById("loadingDiv");
    loadingDiv.style.display = "none";
}
document.getElementById("clickPostEvent").click();