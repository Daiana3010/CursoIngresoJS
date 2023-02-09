/*
Tenemos que crear un programa que verifique si el usuario puede subirse a una montaña rusa,
para esto el usuario deberá ingresar los siguientes datos por prompt: Altura y edad. 
Si el usuario mide menos de 120 cm debemos indicar que no puede subirse a la montaña rusa,
en cambio sí tiene la altura correspondiente debemos preguntar su edad y mostrarle al usuario por alert el monto a pagar.
El monto a pagar:
200$: para menores de edad y mayores de 80
400$: Mayores de edad menores a 80
A tener en cuenta: Si preguntamos la altura del usuario y no puede subir no deberíamos preguntarle la edad.

*/
function mostrar()
{
	let altura;
	let edad;	

	altura = prompt ("indique su altura");

	if (altura < 120) {
		alert("no puede subir a la montaña rusa");		
	} else { 
		edad = prompt("indique su edad");
		edad = parseInt(edad);
	    
		if (edad <= 17 || edad >= 80){
			alert("El precio de la entrada es: $200");
		}
		else{
			alert("El precio de la entrada es: $400");
		}
	}

	// if (altura >= 120) {
	// 	edad = prompt("indique su edad");
	// 	edad = parseInt(edad);
	    
	// 	if (edad <= 17 || edad >= 80){
	// 		alert("El precio de la entrada es: $200");
	// 	}
	// 	else{
	// 		alert("El precio de la entrada es: $400");
	// 	}
	// }
	// else{
	// 	alert("no puede subir a la montaña rusa");
	// }	
}