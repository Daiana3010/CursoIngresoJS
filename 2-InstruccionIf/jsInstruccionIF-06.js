function mostrar()
{
	let edad;
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt (edad);

	if (edad >= 13) {
		if (edad >= 18) {
			alert ("usted es mayor de edad");
		}
	else {
			alert ("usted es adolescente");
		}	
	}
else {
	alert ("usted es niño");
}
}                     
