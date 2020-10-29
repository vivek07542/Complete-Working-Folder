 // alert("connected");
let btnGet = document.querySelector("button");
let myTable = document.querySelector("#tableBox");
let table = document.getElementById("tblData");

let person = [
    {name:"Jim",age:"21",mobile:9425811123,email:"jim21@gmail.com",address:"United State"},
    {name:"Resham",age:"21",mobile:9425811123,email:"jim21@gmail.com",address:"United State"},
    {name: "charles", age: 21, mobile: 9425832221, email: "jim21@yahoo.com", address: "UnitedState"},
     {name: "Steve", age: 25, mobile: 9426589256, email: "steve25@gmail.com", address: "Spain"} ,
     {name: "Roger", age: 18, mobile: 7666111456, email: "roger18@gmail.com", address: "Argentina"} ,
     {name: "Mak", age: 27, mobile: 9993356264, email: "mak27@gmail.com", address: "Brazil"} ,
     {name: "Lily", age: 22, mobile: 9973274664, email: "lily22@gmail.com", address: "Canada"} ,
     {name: "Albert", age: 32, mobile: 9975671664, email: "alb32@gmail.com", address: "NewYork"} ,
     {name: "Kelly", age: 26, mobile: 8345661224, email: "kelly26@yahoo.com", address: "South California"},
    {name: "Brat", age: 30, mobile: 8125789890, email: "brat30@gmail.com", address: "Australia"},
    {name: "Peter", age: 33, mobile: 8198713498, email: "peter33@gmail.com", address: "Austria"} ,
    {name: "Carlos", age: 37, mobile: 8148296758, email: "carlos37@gmail.com", address: "Moscow"},
    {name:"Jim",age:"21",mobile:9425811123,email:"jim21@gmail.com",address:"United State"},
    {name:"Resham",age:"21",mobile:9425811123,email:"jim21@gmail.com",address:"United State"},
    {name: "charles", age: 21, mobile: 9425832221, email: "jim21@yahoo.com", address: "UnitedState"},
     {name: "Steve", age: 25, mobile: 9426589256, email: "steve25@gmail.com", address: "Spain"} ,
     {name: "Roger", age: 18, mobile: 7666111456, email: "roger18@gmail.com", address: "Argentina"} ,
     {name: "Mak", age: 27, mobile: 9993356264, email: "mak27@gmail.com", address: "Brazil"} ,
     {name: "Lily", age: 22, mobile: 9973274664, email: "lily22@gmail.com", address: "Canada"} ,
     {name: "Albert", age: 32, mobile: 9975671664, email: "alb32@gmail.com", address: "NewYork"} ,
     {name: "Kelly", age: 26, mobile: 8345661224, email: "kelly26@yahoo.com", address: "South California"},
    {name: "Brat", age: 30, mobile: 8125789890, email: "brat30@gmail.com", address: "Australia"},
    {name: "Peter", age: 33, mobile: 8198713498, email: "peter33@gmail.com", address: "Austria"} ,
    {name: "Carlos", age: 37, mobile: 8148296758, email: "carlos37@gmail.com", address: "Moscow"},
    {name:"Jim",age:"21",mobile:9425811123,email:"jim21@gmail.com",address:"United State"},
    {name:"Resham",age:"21",mobile:9425811123,email:"jim21@gmail.com",address:"United State"},
    {name: "charles", age: 21, mobile: 9425832221, email: "jim21@yahoo.com", address: "UnitedState"},
     {name: "Steve", age: 25, mobile: 9426589256, email: "steve25@gmail.com", address: "Spain"} ,
     {name: "Roger", age: 18, mobile: 7666111456, email: "roger18@gmail.com", address: "Argentina"} ,
     {name: "Mak", age: 27, mobile: 9993356264, email: "mak27@gmail.com", address: "Brazil"} ,
     {name: "Lily", age: 22, mobile: 9973274664, email: "lily22@gmail.com", address: "Canada"} ,
     {name: "Albert", age: 32, mobile: 9975671664, email: "alb32@gmail.com", address: "NewYork"} ,
     {name: "Kelly", age: 26, mobile: 8345661224, email: "kelly26@yahoo.com", address: "South California"},
    {name: "Brat", age: 30, mobile: 8125789890, email: "brat30@gmail.com", address: "Australia"},
    {name: "Peter", age: 33, mobile: 8198713498, email: "peter33@gmail.com", address: "Austria"} ,
    {name: "Carlos", age: 37, mobile: 8148296758, email: "carlos37@gmail.com", address: "Moscow"},
]



let headers = ["Name","Age","Mobile","Email-Id","Address"];  

btnGet.addEventListener("click",function(){
    let tableHead = document.createElement("thead");

    let headerRow = document.createElement("tr");
    // headerRow.setAttribute("scope","row")
    headers.forEach(headerText => {
        let header = document.createElement("th");        
        header.setAttribute("scope","col")
        let textNode = document.createTextNode(headerText);        
        header.appendChild(textNode);
        headerRow.appendChild(header);
        tableHead.appendChild(headerRow);
    });
    table.appendChild(tableHead);
    let tableBody = document.createElement("tbody");
    person.forEach(per =>{
        let row = document.createElement("tr");
        row.setAttribute("scope","row")
        Object.values(per).forEach(text => {
            let cell =document.createElement("td");
            // cell.setAttribute("scope","col")
            let textNode=document.createTextNode(text);
            cell.appendChild(textNode);
            row.appendChild(cell);
            tableBody.appendChild(row);
        })
        table.appendChild(tableBody);
    })
    myTable.appendChild(table);
});