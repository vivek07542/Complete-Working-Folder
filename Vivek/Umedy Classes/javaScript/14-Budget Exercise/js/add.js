var oldExpenditureValue=0;
// Setting the value of Input Budget Value to the Budget Display
console.log("Connected budget File");
let budgetInput=document.getElementById("budgetText");
let btnSubmit=document.getElementById("budgetSubmit");

btnSubmit.addEventListener("click",function(){
  let budgetValue=document.getElementById("budgetValue");
  let spnBalance=document.getElementById("spnBalance");
  budgetValue.innerHTML=Number(budgetInput.value);  
  spnBalance.innerHTML=Number(budgetInput.value);  
});['']

// Now Second form type where data is being stored in Table Form 
let btnExpense=document.getElementById("expenditureSubmit");
let inputAmount = document.getElementById("txtExpense");
let inputText=document.getElementById("txtExpenseType");
let expenditureValue = document.getElementById("expenditureValue");

// Click Event For 2 Form in Button
btnExpense.addEventListener("click",function(){
  let isCreatedTr=true;
  // let selTr=tblData.getElementsByTagName("tr");
  // console.log(selTr);
  //   selTr.forEach(function(element){
  //   if(element.style.backgroundColor==="yellow"){
  //     console.log("Ye Edited Value hai");
  //     let selectedTds=selectedTr.getElementsByTagName("td");
  //     selectedTds[0].textContent=inputText.value;
  //     selectedTds[1].textContent=inputAmount.value;
  //     selectedTr.removeAttribute("style");
  
  //     let newexpenditureValue=Number(expenditureValue.innerHTML)-Number(oldExpenditureValue)+Number(inputAmount.value);
  //     // console.log(newexpenditureValue);
  //     expenditureValue.textContent=newexpenditureValue;
  //     // console.log(expenditureValue.innerHTML  );
  //     spnBalance.innerHTML=Number(budgetValue.innerHTML)-Number(expenditureValue.textContent);
  //   }else{
  //     console.log("Ye fresh Value Hai");
  //     expenditureValue.textContent = Number(expenditureValue.textContent) + Number(inputAmount.value);
  //     spnBalance.innerHTML=Number(budgetValue.innerHTML)-Number(expenditureValue.textContent);
  //     generateTr();   
  //   }
  // });
  let selectedTr;
    for(let i=0;i<selTr.length;i++){
      if(selTr[i].style.backgroundColor==="yellow"){
        selectedTr=selTr[i];
        isCreatedTr=false;
        break;
      }
    }
  if(isCreatedTr){
    expenditureValue.textContent = Number(expenditureValue.textContent) + Number(inputAmount.value);
    spnBalance.innerHTML=Number(budgetValue.innerHTML)-Number(expenditureValue.textContent);
    generateTr(); 
  }   
  else{
    console.log(oldExpenditureValue);
    console.log(inputAmount.value)
    let selectedTds=selectedTr.getElementsByTagName("td");
    selectedTds[0].textContent=inputText.value;
    selectedTds[1].textContent=inputAmount.value;
    selectedTr.removeAttribute("style");

    let newexpenditureValue=Number(expenditureValue.innerHTML)-Number(oldExpenditureValue)+Number(inputAmount.value);
    // console.log(newexpenditureValue);
    expenditureValue.textContent=newexpenditureValue;
    // console.log(expenditureValue.innerHTML  );
    spnBalance.innerHTML=Number(budgetValue.innerHTML)-Number(expenditureValue.textContent);
  }      
  
    // Value to display Blank After Click
   inputAmount.value=" ";
   inputText.value=" ";
});

// Function For Table Formation After Every Click
function generateTr(){
  let tblData=document.getElementById("tbldata");
  let tbody=document.getElementById("tbody");
  let trTable=document.createElement("tr");

  let tdText=document.createElement("td");
    tdText.innerHTML=inputText.value;
    tdText.style.color="red";
  let tdAmount=document.createElement("td");
    tdAmount.innerHTML=Number(inputAmount.value);
    tdAmount.style.color="red";
  let tdAction=document.createElement("td");
  let aEdit=document.createElement("a");
    aEdit.id="edit";
    aEdit.setAttribute("class","fa fa-pencil-square-o");
    aEdit.style.color="#03668d";
    // Edit Property
    aEdit.addEventListener("click",function(){
      console.log("hey you have Clicked Edit Option");
        let parentTr=aEdit.parentNode.parentNode;  
        inputText.value=parentTr.children[0].innerHTML;
        inputAmount.value=parentTr.children[1].innerHTML;
        parentTr.style.backgroundColor="yellow";  
        oldExpenditureValue=parentTr.children[1].innerHTML;
        // console.log(inputAmount.value);  
        // console.log(inputText.value);   
        // console.log(parentTr);
    });
    let aSeprate=document.createElement("a");
    aSeprate.textContent="  ";
  let aDelete=document.createElement("a");
    aDelete.setAttribute("class","fa fa-trash-o");
    aDelete.style.color="red";
    // Delete property
    aDelete.addEventListener("click",function(){
      console.log("hey you have Clicked Delete Option");
      let parentTr=aEdit.parentNode.parentNode;
      parentTr.parentNode.removeChild(parentTr);
      spnBalance.innerHTML=Number(spnBalance.innerHTML)+Number(parentTr.children[1].innerHTML);
      expenditureValue.innerHTML=Number(expenditureValue.textContent)-Number(parentTr.children[1].innerHTML);
    });

    trTable.appendChild(tdText);
    trTable.appendChild(tdAmount);
    trTable.appendChild(tdAction);
    tdAction.appendChild(aEdit);
    tdAction.appendChild(aSeprate)
    tdAction.appendChild(aDelete);
    tbody.appendChild(trTable);   
}

