/*
Ejercicio 3:
Apellido: Daiana 
Nombre: Arina
Comisión: F
*/

function mostrar()
{	
	//declaracion de variables
	let continua;
	let mensaje="";

	let datosNombre;	
	let datosGenero;	

	
	do 
	{
		datosNombre = prompt("ingrese nombre");
		datosGenero = prompt("ingrese genero");
		
		continua = confirm("continua si/no");
	}
	while (continua);
	

	mensaje = "el resultado es </br>";
	mensaje += " </br>";
	mensaje += " </br>";
	mensaje += " </br>";
	mensaje += " </br>";
	document.write(mensaje);

	
}//FIN DE LA FUNCIÓN