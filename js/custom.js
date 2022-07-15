"use strict"
let userPassword = prompt("ENTER PASSWORD FOR ACCESS");
let myWindow = window.open("", "MsgWindow", "width=500, height=500");

if ( userPassword == "m@sud2022" ) {
	
	alert("CONGRATULATION ACCESS GRANTED");
	
	document.write(`<h1 style="color:#4cd137; text-align:center;  background: #FFF; font-size: 50px; height:200px; position:absolute; top:0; left:0; width: 100%;font-family: 'Roboto', sans-serif;">CONGRATULATION ACCESS GRANTED</h1>`);
	
	document.write(`<p style="color:#9c88ff; text-align:center;  background: #FFF; font-size: 25px; position:absolute; top:50px; left:0; width: 100%;font-family: 'Roboto', sans-serif;">CLICK THIS BUTTON FOR CHECK MY FORM</p>`);
	
	document.write(`<a href="pages/form.html" target="_self" style="color:#FFF; text-align:center;  background: #9b59b6; font-size: 40px; position:absolute; top:120px; left:45%; width: 8%; font-family: 'Roboto', sans-serif; text-decoration: none; border-radius:8px; ">GO </a>`);
	
	myWindow.document.write(`<h1 style="color:#4cd137; text-align:center; font-family:'Roboto', sans-serif;">ACCESS SUCSSEFULLY GRANTED</h1><p style="color:#40407a; text-align: center;">PLEASE FOLLOW ACCESS PAGE AND CLICK GO FOR CHECK ASSIGNMENT</p>`);
	
}else if ( userPassword == null ) {
	alert("YOU DONT GIVE ANY PASSWORD");
	
	myWindow.document.write(`<h1 style="color:#ff3838; text-align: center;">ACCESS DENIED</h1><p style="color:#40407a; text-align: center;">YOU DONT GIVE ANY PASSWORD</p>`);
	
}else if ( userPassword == "" ) {
	alert("SORRY YOU GIVE BLANK PASSWORD");
	
	myWindow.document.write(`<h1 style="color:#ff3838; text-align: center;">ACCESS DENIED</h1><p style="color:#40407a; text-align: center;">SORRY YOU GIVE BLANK PASSWORD </p>`);
	
}else {
	alert("WRONG PASSWORD TRY AGAIN");
	
	myWindow.document.write(`<h1 style="color:#ff3838; text-align: center;">ACCESS DENIED</h1><p style="color:#40407a; text-align:center;">WRONG PASSWORD TRY AGAIN </p>`);
};
