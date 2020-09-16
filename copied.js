
$(document).ready(function(){
  var move = 1;
  var turn = true;
  $("#dashboard tr td").click(function() {
    if ($(this).text()=="" && turn) {
      if ((move%2)==1) { $(this).append("X"); } 
      else { $(this).append("O"); }
      move++;
      if (ForWinner()!=-1 && ForWinner()!="") { 
        if (ForWinner()=="X") { alert("Player 1 wins!"); }
        else { alert("Player 2 wins!"); }
        turn = false; 
      }
    } 
  });
  
  function ForWinner(){
		var col1 = $("#dashboard tr:nth-child(1) td:nth-child(1)").text();
		var col2 = $("#dashboard tr:nth-child(1) td:nth-child(2)").text();
		var col3 = $("#dashboard tr:nth-child(1) td:nth-child(3)").text();
		var col4 = $("#dashboard tr:nth-child(2) td:nth-child(1)").text();
		var col5 = $("#dashboard tr:nth-child(2) td:nth-child(2)").text();
		var col6 = $("#dashboard tr:nth-child(2) td:nth-child(3)").text();
		var col7 = $("#dashboard tr:nth-child(3) td:nth-child(1)").text();
		var col8 = $("#dashboard tr:nth-child(3) td:nth-child(2)").text();
		var col9 = $("#dashboard tr:nth-child(3) td:nth-child(3)").text();
		
		if((col1 == col2) && (col2==col3)) {return col3};
		else if((col4 == col5) && (col5==col6)) {return col6;}
		else if((col7 == col8) && (col8==col9)) {return col9;}
		else if((col1 == col4) && (col4==col7)) {return col7;}
		else if((col2 == col5) && (col5==col8)) {return col8;}
		else if((col3 == col6) && (col6==col9)) {return col9;}
		else if((col1 == col5) && (col5==col9)) {return col9;}
		else if((col3 == col5) && (col5==col7)) {return col7;}
		
		return -1;
	}
});