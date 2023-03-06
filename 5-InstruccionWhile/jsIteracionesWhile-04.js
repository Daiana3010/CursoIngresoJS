/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numeroIngresado;

	do {
		numeroIngresado = prompt("Ingrese un numero de 0 a 9 inclusive");		
 	
	} while (numeroIngresado < 0 || numeroIngresado > 9 );
		txtIdNumero.value = numeroIngresado;

	 
		
	

}//FIN DE LA FUNCIÓN