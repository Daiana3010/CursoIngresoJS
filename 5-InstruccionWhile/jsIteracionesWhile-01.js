/*
Ejercicio 1
La Premier League de Inglaterra necesita un sistema capaz de reunir las estadisticas de los 
jugadores que la integran.
Para ellos se pide realizar una app.

Se debe ingresar por cada jugador

-nombreIngresado del jugador
-nacionalidadIngresado
-Posición (Arquero, Defensor, Mediocampista o Delantero)
-Cantidad de Tarjetas Rojas recibidas
-Goles  
 Se necesita saber

a)El goleador del torneo
b)El jugador Argentino con menos rojas recibidas.
c)El porcentaje de jugadores Ingleses de la liga

NOTA: Deben poder ingresarse todos números positivos, no se deben pueden ingresar números negativos.
.*/

function mostrar() 
{
	let nombreJugadorIngresado;
	let nacionalidadIngresada;
	let posicionIngresada;
	
	let respuesta;
	
	let recordDeGolesDelCampeonato = 0;
	let goleadorDelCampeonato = "";
	
	let recordMenosTarjetasRojas = 0;
	let jugadorConMenosTarjetasRojas =  "";
	let flagPrimerArgentino = false;
	
	let contadorJugadores = 0;
	let contadorIngleses = 0;
	let porcentajeIngleses;
	
	let mensaje;
	let expression;
	
	
	do {
		//*********INICIO INGRESO DE DATOS */
		//-----------------------------------		
		do{
			nombreJugadorIngresado = prompt("Ingrese el nombre del jugador");
			//isNaN = Indica que si el valor ingresado es un texto (true) o NO (False)
			expression = !(nombreJugadorIngresado != null && isNaN(nombreJugadorIngresado));
			//El While para que siga iterando debe ser true y para Salir del while la expression debe ser false, Por eso la negación
		}while(expression);
		
		do{
			nacionalidadIngresada = prompt("Ingrese la nacionalidad de " + nombreJugadorIngresado + " (argentino, ingles, otro...) ");
			expression = !(nacionalidadIngresada != null && isNaN(nacionalidadIngresada));
		}while(expression);
		
		do{
			posicionIngresada = prompt("Ingrese la posicion de " + nombreJugadorIngresado + " (arquero, defensor, mediocampista o delantero)" );
			expression = !(
							posicionIngresada != null &&
						   (posicionIngresada == "arquero" ||  posicionIngresada == "defensor" || posicionIngresada == "mediocampista" ||  posicionIngresada == "delantero")
						  );
		}while(expression);

		do{
			cantidadTarjetasRojasIngresada = parseInt(prompt("Ingrese cantidad de tarjetas rojas"));
			expression = cantidadTarjetasRojasIngresada == null ||  isNaN(cantidadTarjetasRojasIngresada) || cantidadTarjetasRojasIngresada < 0;
		}while(expression); 
		
		do{
			cantidadGolesIngresada = parseInt(prompt("Ingrese los goles"));
			contadorJugadores++;
			expression = cantidadGolesIngresada == null || isNaN(cantidadGolesIngresada) || cantidadGolesIngresada < 0;
		}while(expression); 		
		//*********FIN INGRESO DE DATOS */
		
		//***************INICIO LOGICA************
		//a)El goleador del torneo
		if (cantidadGolesIngresada > recordDeGolesDelCampeonato){
		    recordDeGolesDelCampeonato = cantidadGolesIngresada;
		    goleadorDelCampeonato = nombreJugadorIngresado; 
		}
		else{
			if (cantidadGolesIngresada == recordDeGolesDelCampeonato){
				goleadorDelCampeonato = goleadorDelCampeonato + ", " + nombreJugadorIngresado;
			}
		}
		
		//b)El jugador Argentino con menos rojas recibidas.
		if (nacionalidadIngresada == "argentino") 
		{
			if(flagPrimerArgentino == false){
				flagPrimerArgentino = true;
				recordMenosTarjetasRojas = cantidadTarjetasRojasIngresada;
				jugadorConMenosTarjetasRojas = nombreJugadorIngresado;
			}
			else {
				if (cantidadTarjetasRojasIngresada < recordMenosTarjetasRojas){
					recordMenosTarjetasRojas = cantidadTarjetasRojasIngresada;
					jugadorConMenosTarjetasRojas = nombreJugadorIngresado; 
				}
				else{
					if (cantidadTarjetasRojasIngresada == recordMenosTarjetasRojas){
						jugadorConMenosTarjetasRojas = jugadorConMenosTarjetasRojas + ", " + nombreJugadorIngresado;
					}
				}	
			}
		} 
		else{
			if (nacionalidadIngresada == "ingles") {
				contadorIngleses++;
			}
		}
		
		
		//c)El porcentaje de jugadores Ingleses de la liga
		porcentajeIngleses = (contadorIngleses * 100) / contadorJugadores;
		//***************FIN LOGICA************
		
		respuesta = confirm("Desea ingresar otro jugador?");
		
	} while (respuesta);
	
	mensaje = "El/los goleador/es del campeonato es/son: " + goleadorDelCampeonato + "<br>";
	mensaje += "El jugador Argentino con menos tarjetas rojas es: " + jugadorConMenosTarjetasRojas + "<br>";
	mensaje += "El porcentaje de ingleses es: " + porcentajeIngleses + "<br>";
	
	document.write(mensaje);
	
}

//FIN DE LA FUNCIÓN