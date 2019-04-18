var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");
var del = document.getElementsByClassName("delete");

function inputLength() {
	return input.value.length;
}

function createListElement(e) {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete"));
	li.appendChild(btn);
	li.onclick = toggleOnClick;
	btn.onclick = removeListAfterClick;
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function removeListAfterClick(e){
	 e.target.parentNode.remove();
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleOnClick(e) {
	e.target.classList.toggle("done");
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

for(var i=0;i<li.length;i++)
	li[i].addEventListener("click",toggleOnClick);

for(var i=0;i<del.length;i++)
	del[i].addEventListener("click", removeListAfterClick);