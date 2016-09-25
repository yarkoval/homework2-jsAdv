function validation(){
	var inputList = document.getElementsByTagName('input');
var result ="Ви ввели наступну інформацію: ";
	for (i=0; i<(inputList.length-1); i++){
		if (inputList[i].value ===""){ inputList[i].className += "emptyField"}	
			 else {
			 	
			 	result += "\n" + inputList[i].name + ": " + inputList[i].value
			 }
			 //};
		//alert (inputList[i].value);
										}
	// alert(document.getElementById("quantity").value);



if (result !== "Ви ввели наступну інформацію: " )
	alert(result);
					}

document.getElementById("submit").onclick = validation;
