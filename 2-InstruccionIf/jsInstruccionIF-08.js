function mostrar()
{
//tomo la edad  Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
//pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.'
	alert("ok");
	
	let edad;
	let estadoCivil;
	
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt (edad);
	estadoCivil = document.getElementById("estadoCivi").value;

	if (edad >= 18 && estadoCivil == "soltero") {
		alert ("es soltero y no es menor ");
	}

}//FIN DE LA FUNCIÓN