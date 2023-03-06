//Al seleccionar un destino informar si hace FRIO o CALOR en ese destino


function mostrar()
{
	let destinoIngresado =txtIdDestino.value;
	switch (destinoIngresado){
		case "Bariloche":
		case "Ushuaia":
			alert("Hace frio");
			break;
		case "Cataratas":
		case "Mar del plata":
			alert("Hace calor");
			break;
	}

}//FIN DE LA FUNCIÓN