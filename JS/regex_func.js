/**
 * 
 */

var arr=[];   
var adder=0;
var del_j=0;

function remove1()
{
	if((adder != 0) && (adder > del_j))
	{
		var h=document.getElementById("div_id");   //Local variable
		var del = document.getElementById(arr[del_j]);	
		h.removeChild(del);
		del_j++;
	}
	else
		alert("add entry!!!");
}

function add()
{
	var input = prompt("Enter share name and Quantity: "); //Local variable	
	var itemName = /[a-zA-Z]+/.exec(input);
	var itemQty = /[0-9]+/.exec(input);
	var x = document.createElement("P");
	x.setAttribute('id',itemName);
	arr[adder]=itemName;
    var t = document.createTextNode("You need to buy " + itemQty + " " + itemName +" shares. Sir!!!");
    x.appendChild(t);
    document.getElementById("div_id").appendChild(x);
    adder++;
}