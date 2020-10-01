var btnBudget = document.getElementById("btnBudget");
var inputBudget= document.getElementById("inputBudget");
var displayBudget = document.getElementById("displayBudget");
var displayExpense = document.getElementById("displayExpense");
var displayBalance = document.getElementById("displayBalance");
var txtExpense= document.getElementById("txtExpense");
var amtExpense= document.getElementById("amtExpense");
var btnExpense=document.getElementById("btnExpense");
var tblData= document.getElementById("tblData");

// Budget Input Form

btnBudget.addEventListener("click",function(){
  displayBudget.textContent= 
  inputBudget.value;
  displayExpense.textContent= 0;
  displayBalance.textContent= inputBudget.value;  
});

// Expenditure Input Form

btnExpense.addEventListener("click",function(){
  var expense=Number(amtExpense.value);
  displayExpense.textContent=Number(displayExpense.textContent) + expense;
  displayBalance.textContent=Number(displayBudget.textContent)-expense;

  // Table Row Value
   let tr = document.createElement("tr");
   
   let tdTitle =document.createElement("td");
   tdTitle.textContent=txtExpense.value;  
   tdTitle.style.color="red";

   let tdValue=document.createElement("td"  );
   tdValue.textContent=expense;
   tdValue.style.color="red";

   let tdAction=document.createElement("td");
   let aEdit=document.createElement("a");
   aEdit.setAttribute("class","fa fa-pencil-square-o");
   aEdit.style.color="#03668d";
// Edit Button Function
    aEdit.addEventListener("click",function(){
      txtExpense.value=tdTitle.textContent;
      amtExpense.value=expense;
    });

// Delete Button Function
   let aDelete=document.createElement("a");
   aDelete.setAttribute("class","fa fa-trash-o");
   aDelete.style.color="red";

   tdAction.appendChild(aEdit);
   tdAction.appendChild(aDelete);  
   tr.appendChild(tdTitle);
   tr.appendChild(tdValue);
   tr.appendChild(tdAction);
   tblData.appendChild(tr);

  // Reset Input Value
  txtExpense.value=" ";
  amtExpense.value=" ";
  });
  