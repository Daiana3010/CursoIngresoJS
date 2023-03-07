/*
Ejercicio 1:
Apellido: Daiana 
Nombre: Arina
Comisión: F
*/

// Para ello se tiene en cuenta los siguientes parametros:
// Edad (debe ser mayor a 12)
// Género(M - F - NB)
// Tipo pelicula (Terror - Heroes - Romance)
// Horario (entre 8 y 23)
// No sabemos cuántos clientes entran durante el día.

function mostrar()
{
	//declaracion de variables
	let continua;
	let mensaje="";

	let edadIngresada;	
	let generoIngresada;	
	let tipoPelicula;
	let horario;
	let digitovalidador;

	do 
	{	
		//Edad (debe ser mayor a 12)
		do{
			edadIngresada = prompt("ingrese edad (debe ser mayor a 12)");	
			edadIngresada = parseInt(edadIngresada);
		}
		while(isNaN(edadIngresada) || edadIngresada < 12);

		//Género(M - F - NB)
		do{
			generoIngresada = prompt("ingrese genero (M - F - NB)");
			if (generoIngresada != null)
			{
				generoIngresada = generoIngresada.toLowerCase();
			}			
		}
		while(generoIngresada != "f" &&  generoIngresada != "m" && generoIngresada != "nb");
		
		//Tipo pelicula (Terror - Heroes - Romance)
		do{
			tipoPelicula = prompt("ingrese tipo pelicula (Terror - Heroes - Romance)")
			if (tipoPelicula != null)
			{
				tipoPelicula = tipoPelicula.toLowerCase();
			}			
		}
		while(tipoPelicula != "terror" && tipoPelicula != "heroes" && tipoPelicula != "romance");
		
		//Horario (entre 8 y 23)
		do{
			horario = prompt("ingrese horario (entre 8 y 23)");
			horario = parseInt(horario);
		}
		while(isNaN(horario) || horario < 8 || horario > 23);


		//Ingrese digito validador (numero debe ser menor a 5 y mayor que 12)
		do{
			digitovalidador = prompt("Ingrese digito validador (numero debe ser menor a 5 y mayor que 12)");	
			digitovalidador = parseInt(digitovalidador);
		}
		while(isNaN(digitovalidador) || (edadIngresada > 5 && edadIngresada < 12));
		
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