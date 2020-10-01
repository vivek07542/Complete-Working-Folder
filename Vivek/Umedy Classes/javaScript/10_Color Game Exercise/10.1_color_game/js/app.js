var numSquares=6;

var colors=generateRandomColors(numSquares);

var squares= document.querySelectorAll(".square");

var winColor=winedColor();

var colorDisplay=document.getElementById("colorDisplay");

var messageDisplay=document.getElementById("message");

colorDisplay.textContent = winColor;

var headDisplay=document.querySelector("h1");

var resetButton=document.getElementById("reset");

var easyBtn=document.getElementById("easyButton");

var hardBtn=document.getElementById("hardButton");

// Easy Button Function

easyBtn.addEventListener("click",function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares=3;
	colors=generateRandomColors(numSquares);
	winColor=winedColor();
	colorDisplay.textContent = winColor;
	for(var i= 0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.backgroundColor=colors[i];
		}else{
			squares[i].style.display="none";
		}
	}
		// To Change the Message Display of the Content
		messageDisplay.textContent="";
			headDisplay.style.backgroundColor="steelblue";
});

// Hard Button Function
hardBtn.addEventListener("click",function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares=6;
	colors=generateRandomColors(numSquares);
	winColor=winedColor();
	colorDisplay.textContent = winColor;
	for(var i= 0;i<squares.length;i++){
			squares[i].style.backgroundColor=colors[i];
			squares[i].style.display="block";		
	}
		// To Change the Message Display of the Content
		messageDisplay.textContent="";
		headDisplay.style.backgroundColor="steelblue";
});

// Reset Component For New Color.
resetButton.addEventListener("click",function(){
	colors=generateRandomColors(numSquares);
	winColor= winedColor();
	colorDisplay.textContent = winColor;
	for(var i = 0; i < squares.length ; i++ ){
		squares[i].style.backgroundColor=colors[i];
	}		
	headDisplay.style.backgroundColor="steelblue";	
	// To Change the Message of reset to Play Again
	resetButton.textContent="New Colors";
	// To Change the Message Display of the Content
	messageDisplay.textContent="";
});

// To Play On Normal Mode 
// To Put Color to each Squares.
for(var i = 0; i < squares.length ; i++ ){
	squares[i].style.backgroundColor=colors[i];	
	squares[i].addEventListener("click", function(){
		  // To Extract Color While Clicking.
		var selectColor = this.style.backgroundColor;	
		if(selectColor === winColor ){
			// To display the message in messageDisplay.
			messageDisplay.textContent="Correct..!!";
			// To set the Color of square to corrected one.
			changeColor(selectColor);		
			// To Change Background Color for Heading
			headDisplay.style.backgroundColor=winColor;
			// To Change the Message of reset to Play Again
			resetButton.textContent="Play Again?";
		}else{
			// To hide the squares.
			this.style.backgroundColor="#232323";
			// To display the message in messageDisplay.
			messageDisplay.textContent="Try Again..!!";
		}
	});
}

// Function
// To set the color of square after Correct square.
function changeColor(x){
	for(var i=0;i< squares.length;i++){
	squares[i].style.backgroundColor= x;
	}
}
// To set the value of winColor that changes every time.
function winedColor(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}
// To set the Function Of Random Color.
function generateRandomColors(num){
	// Create an array.
	var arr=[];
	// Loop the Value N number of times.
	for(var i=0;i< num;i++){
	// generate Random Colour and Add on The Color in it.
		arr.push(randomColor());
	}
	// return the array
	return arr;
}
// To Set the function for randomColor().
function randomColor(){
	// Create Random Red Color
	var r=Math.floor(Math.random()* 256);
	// Create Random Green Color
	var g=Math.floor(Math.random()* 256);
	// Create Random Blue Color
	var b=Math.floor(Math.random()* 256);
	// Creating a Code by Clubing all Value	
	return "rgb(" + r + ", " + g + ", " + b +")";
}
