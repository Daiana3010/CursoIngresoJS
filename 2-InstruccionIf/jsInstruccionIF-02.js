function mostrar()
{
	let edad;
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt (edad);
		
	if (edad >= 18) {
		alert ("sos mayor de edad")
	}
}