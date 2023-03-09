/******************************************************************************
Ejercicio 1:

Apellido: Arina
Nombre: Daiana
Comisión: F
Tutor: Gaston

*/

function mostrar()
{
	//declaracion de variables
	let continua;
	let mensaje="";

	let datosNombre;	
	let datosEdad;	
	let datosDificultad;	
	let datosScore;	

	let sumadorScore = 0;
	let contadorParticipantes = 0;
	let promedioTotalScore = 0;

	let contadorFacil = 0;
	let contadorMedio = 0;
	let contadorDificil = 0;

	let flagPrimerParticipante = 1;
	let edadParticipanteMasJovenFacil=0;
	let nombreParticipanteMasJovenFacil=0;
	
	do 
	{
		do{
			datosNombre = prompt("ingrese nombre");
		}
		while(!isNaN(datosNombre))

		
		
		do{
			datosEdad = prompt("ingrese edad");	
			datosEdad = parseInt(datosEdad);
		}
		while(isNaN(datosEdad));

		
		do{
			datosDificultad = prompt("ingrese dificultad (“FACIL”, “MEDIO”, “DIFICIL”)");
			if (datosDificultad != null)
			{
				datosDificultad = datosDificultad.toLowerCase();
			}			
		}
		while(datosDificultad != "facil" &&  datosDificultad != "medio" && datosDificultad != "dificil");

		do{
			datosScore = prompt("ingrese score(numerico)");	
			datosScore = parseInt(datosScore);
		}
		while(isNaN(datosScore));

		sumadorScore += datosScore;
		contadorParticipantes++;

		if (flagPrimerParticipante == 1 || (datosEdad < edadParticipanteMasJovenFacil && datosDificultad == "facil"))
		{
			flagPrimerParticipante = 0;
			edadParticipanteMasJovenFacil = datosEdad;
			nombreParticipanteMasJovenFacil = datosNombre;
		}

		switch (datosDificultad) {
			case "facil":
				contadorFacil++;
				break;
			case "medio":
				contadorMedio++;
				break;
			case "dificil":
				contadorDificil++;
				break;
		}

		continua = confirm("continua si/no");
	}	
	while (continua);

	promedioTotalScore = sumadorScore / contadorParticipantes;
	

	

	mensaje = "el resultado es </br>";
	mensaje += "A) Promedio total de scores: " + promedioTotalScore + "</br>";
	mensaje += "B) La cantidad de participantes de cada uno de los niveles de dificultad. </br>";
	mensaje += "    facil: " + contadorFacil + "</br>";
	mensaje += "    medio: " + contadorMedio + "</br>";
	mensaje += "    dificil: " + contadorDificil + "</br>";
	mensaje += "C) El nombre del participante más joven perteneciente al nivel de dificultad facil es: " + nombreParticipanteMasJovenFacil;
	


	document.write(mensaje);

	
}//FIN DE LA FUNCIÓN