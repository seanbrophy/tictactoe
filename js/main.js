// JavaScript Document

//this is how you typically setup your javascript files

//self exectuing anonymous function - use this. prevents global variables.. use paranthesis () for anonymous below

(function() {
	"use strict";
	console.log("Yep the SEAF Fired");
	
	//Variables
	var buttons = document.querySelectorAll("button");
	var counter = 0;
	
	//Functions
	function changeButton(e){
		//console.log(buttons[8].textContent);
		//this changes the button text to "x" or "o"
		if(counter===0){
			document.getElementById(e.target.id).textContent = "X";
			counter = 1;
		}
		else
		{
			document.getElementById(e.target.id).textContent = "O";
			counter = 0;
		}
		//win conditions
		//horizontal
		if(buttons[0].textContent==="X" && buttons[1].textContent==="X" && buttons[2].textContent==="X" || 
		buttons[3].textContent==="X" && buttons[4].textContent==="X" && buttons[5].textContent==="X" || 
		buttons[6].textContent==="X" && buttons[7].textContent==="X" && buttons[8].textContent==="X" ||
		//vertical
		buttons[0].textContent==="X" && buttons[3].textContent==="X" && buttons[6].textContent==="X" ||
		buttons[1].textContent==="X" && buttons[4].textContent==="X" && buttons[7].textContent==="X" || 
		buttons[2].textContent==="X" && buttons[5].textContent==="X" && buttons[8].textContent==="X" ||
		//diagonally 
		buttons[0].textContent==="X" && buttons[4].textContent==="X" && buttons[8].textContent==="X" || 
		buttons[2].textContent==="X" && buttons[4].textContent==="X" && buttons[6].textContent==="X" )
		{
			alert("The Winner is X");
			location.reload();
		}
		//horizontal
		else if(buttons[0].textContent==="O" && buttons[1].textContent==="O" && buttons[2].textContent==="O" ||
		buttons[3].textContent==="O" && buttons[4].textContent==="O" && buttons[5].textContent==="O" ||
		buttons[6].textContent==="O" && buttons[7].textContent==="O" && buttons[8].textContent==="O" ||
		//vertical
		buttons[0].textContent==="O" && buttons[3].textContent==="O" && buttons[6].textContent==="O" ||
		buttons[1].textContent==="O" && buttons[4].textContent==="O" && buttons[7].textContent==="O" ||
		buttons[2].textContent==="O" && buttons[5].textContent==="O" && buttons[8].textContent==="O" ||
		//diagonally
		buttons[0].textContent==="O" && buttons[4].textContent==="O" && buttons[8].textContent==="O" ||
		buttons[2].textContent==="O" && buttons[4].textContent==="O" && buttons[6].textContent==="O" )
		{
			alert("The Winner is O");
			location.reload();
		}
		
	}
	
	//Listeners
	
	for(var i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener("click", changeButton, false);
	}
})();