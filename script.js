// Main function

function compute()
{
	
	var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
	var years = document.getElementById("years").value;
	var interest = principal * years * rate /100;
	//var year = new Date().getFullYear()+parseInt(years);
	var year = new Date().getFullYear();



	
	 document.getElementById("result").innerHTML="If you deposit <b>"+principal+"</b>,\<br\>at an interest rate of <b>"+rate+"%</b>\<br\>You will receive an amount of <b>"+interest+"</b>,\<br\>in the year <b>"+year+"</b>\<br\>"
	
	
}
  
//method to update Rate
  
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
	
}	  

//method if the amount field is 0 or bellow 0
function validateZero() 
{
     var id = document.getElementById("principal").value;
	 if(id == 0 || id < 0){
		 alert("Enter a positive number");
	 }
	 document.getElementById('principal').style.borderColor = "red";
}	  
