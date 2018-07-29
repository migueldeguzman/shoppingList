var button = document.getElementById("enter");
var input = document.getElementById("userinput");
ul = document.querySelector("ul");
function inputLength() {
	return input.value.length;
}	 

function createListELement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value="";
}

function addListAfterClick() {
	if (inputLength()>0){
		createListELement();	
	}
} 

function addListAfterKeypress(event) {
	if (inputLength()>0 && event.keyCode === 13) {
		createListELement();
	}
}

button.addEventListener("click",addListAfterClick); 	

input.addEventListener("keypress", addListAfterKeypress);
	
