var user1 = "Player 1";
var user2 = "Player 2";
var totmoves = 9;
var currmove = 1;
var turn = true;
var cell = document.querySelectorAll(".col-sm-4");

const play = () => {	
	if(cell.value == "" && turn){
		if((currmove%2) == 1)
			cell.value.append("X");
		else
			cell.value.append("O");			
		currmove++;
		
		
				

for(var i=0;i<cell.length;i++)
	cell[i].addEventListener("click",play);			


	