/*
Ejercicio 2:

Apellido:
Nombre:
Comisión:
Tutor:

"Cines ""crupulos"" tiene control sobre cada uno de los tickes de los clientes que 
ingresan a las salas dia a dia.
Para ello se tiene en cuenta los siguientes parametros:
Edad (debe ser mayor a 12)
Género(M - F - NB)
Tipo pelicula (Terror - Heroes - Romance)
datoHorario (entre 8 y 23)
No sabemos cuántos clientes entran durante el día.
Se debe informar al usuario:
A) Horario promedio de concurrencia.
B) El porcentaje de clientes por género
C) Nombre y genero del cliente de menor edad que haya visto una pelicula de Heroes.
D) El tipo de pelicula mas concurrida"*/

function mostrar()
{

	//declaracion de variables
	let resultadoHorarioPromedioConcurrencia;
	let resultadoPorcentajeClientePorGeneroFemenino = 0;
	let resultadoPorcentajeClientePorGeneroMasculino = 0;
	let resultadoPorcentajeClientePorGeneroNoBinario = 0; 
	let resultadoClienteMenorConPeliculaHeroes = "";		
	let resultadoEdadClienteMenorConPeliculaHeroes = 0;
	let esPrimerCliente = true;
	let resultadoTipoPeliculaMasConcurrida = "";
	let resultadoMensaje;
	let contadorClientes = 0;
	let contadorFemenino = 0;
	let contadorMasculino = 0;
	let contadorNoBinario = 0;
	let sumatoriaHorarios = 0;
	
	let contadorHeroes = 0;
	let contadorTerror = 0;
	let contadorRomance = 0;

	let continua;
	
	let datoNombreCliente;	
	let datoEdad;	
	let datoGenero;	
	let datoTipoPelicula;
	let datoHorario;

	do 
	{	
		//****Inicio validacion */
		datoNombreCliente = prompt("ingrese nombre");

		//Edad (debe ser mayor a 12)
		do{
			datoEdad = prompt("ingrese edad (debe ser mayor a 12)");	
			datoEdad = parseInt(datoEdad);
		}
		while(isNaN(datoEdad) || datoEdad < 12);

		//Género(M - F - NB)
		do{
			datoGenero = prompt("ingrese genero (f, m, nb)");
			if (datoGenero != null)
			{
				datoGenero = datoGenero.toLowerCase();
			}			
		}
		while(datoGenero != "f" &&  datoGenero != "m" && datoGenero != "nb");
		
		//Tipo pelicula (Terror - Heroes - Romance)
		do{
			datoTipoPelicula = prompt("ingrese tipo pelicula (terror, heroes, romance)")
			if (datoTipoPelicula != null)
			{
				datoTipoPelicula = datoTipoPelicula.toLowerCase();
			}			
		}
		while(datoTipoPelicula != "terror" && datoTipoPelicula != "heroes" && datoTipoPelicula != "romance");
		
		//datoHorario (entre 8 y 23)
		do{
			datoHorario = prompt("ingrese Horario (entre 8 y 23hs)");
			datoHorario = parseInt(datoHorario);
		}
		while(isNaN(datoHorario) || datoHorario < 8 || datoHorario > 23);

		//****Fin validaciones */

		 switch (datoGenero) {
			case "f":
				contadorFemenino++;
				break;
			case "m":
				contadorMasculino++;
				break;
			case "nb":
				contadorNoBinario++;
				break;
		}
		contadorClientes++;
		sumatoriaHorarios += datoHorario;
		
		if (esPrimerCliente || datoEdad < resultadoEdadClienteMenorConPeliculaHeroes)
		{
			esPrimerCliente = false;
			resultadoClienteMenorConPeliculaHeroes = datoNombreCliente + " y su genero es: " + datoGenero ;			
			resultadoEdadClienteMenorConPeliculaHeroes = datoEdad;
		}

		switch (datoTipoPelicula) {
			case "heroes":
				contadorHeroes ++;
				break;
			case "romance":
				contadorRomance++;
				break;
			case "terror":
				contadorTerror++;
				break;
		}


		continua = confirm("continua si/no");
	}
	while (continua);


	resultadoHorarioPromedioConcurrencia = sumatoriaHorarios / contadorClientes;
	resultadoPorcentajeClientePorGeneroFemenino = (contadorFemenino * 100) / contadorClientes;
	resultadoPorcentajeClientePorGeneroMasculino = (contadorMasculino * 100) / contadorClientes;
	resultadoPorcentajeClientePorGeneroNoBinario = (contadorNoBinario * 100) / contadorClientes;


	if (contadorHeroes > contadorRomance){
		if (contadorHeroes > contadorTerror){
			resultadoTipoPeliculaMasConcurrida = "Heroes";
		}
		else {
			if (contadorRomance > contadorTerror){
				resultadoTipoPeliculaMasConcurrida = "Romance";
			}
			else{
				resultadoTipoPeliculaMasConcurrida = "Terror";
			}
		}
	}
	else {
		if (contadorRomance > contadorTerror){
			resultadoTipoPeliculaMasConcurrida = "Romance";
		}
		else{
			resultadoTipoPeliculaMasConcurrida = "Terror";
		}
	}
	
 
	 resultadoMensaje = "A) Horario promedio de concurrencia." + resultadoHorarioPromedioConcurrencia + "</br>";
	 resultadoMensaje += "B) El porcentaje de clientes por género </br>";
	 resultadoMensaje += "   Porcentaje Femenino  - " + resultadoPorcentajeClientePorGeneroFemenino +  "</br>";
	 resultadoMensaje += "   Porcentaje Masculino - " + resultadoPorcentajeClientePorGeneroMasculino + "</br>";
	 resultadoMensaje += "   Porcentaje NoBinario - " + resultadoPorcentajeClientePorGeneroNoBinario + "</br>";
	 resultadoMensaje += "C) Nombre y genero del cliente de menor edad que haya visto una pelicula de Heroes." + resultadoClienteMenorConPeliculaHeroes + "</br>";
	 resultadoMensaje += "D) El tipo de pelicula mas concurrida" + resultadoTipoPeliculaMasConcurrida + "</br>";

	document.write(resultadoMensaje);
	
	
	
}//FIN DE LA FUNCIÓN