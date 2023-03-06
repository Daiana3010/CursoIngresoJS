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
Horario (entre 8 y 23)
No sabemos cuántos clientes entran durante el día.
Se debe informar al usuario:
A) Horario promedio de concurrencia.
B) El porcentaje de clientes por género
C) Nombre y genero del cliente de menor edad que haya visto una pelicula de Heroes.
D) El tipo de pelicula mas concurrida"*/

function mostrar()
{

	let mensaje;	
	let edadIngresada;
	let generoIngresada;
	let tipoPelicula;
	let horario;
	let continua="";
	
	let horarioPromedioConcurrencia;
	let sumatoriaHorarios=0;
	let contador=0;
	let contadorF=0;
	let contadorM=0;
	let contadorNB=0;
	let porcentajeF=0;
	let porcentajeM=0;
	let porcentajeNB=0;
	
	
	do 
	{
		
		do{
			edadIngresada = prompt("ingrese edad");
		}
		while(edadIngresada < 12);
		
		do{
			generoIngresada = prompt("ingrese genero").toLowerCase();
			switch (generoIngresada) {
				case "F":
					contadorF++;
					break;
				case "M":
					contadorM++;
					break;
				case "NB":
					contadorNB++;
					break;
			}
		}
		while(generoIngresada != "f" &&  generoIngresada != "m" && generoIngresada != "nb");
		
		do{
			tipoPelicula = prompt("ingrese tipo pelicula").toLowerCase();
		}
		while(tipoPelicula != "terror" && tipoPelicula != "heroes" && tipoPelicula != "romance");
		
		do{
			horario = prompt("ingrese horario");
		}
		while(!(horario > 7 && horario < 24));
		
		sumatoriaHorarios += horario;
		contador++;
		
		continua = prompt("continua si/no");
	}
	while (continua.toLowerCase() == "si")
	
	horarioPromedioConcurrencia = sumatoriaHorarios / contador;
	porcentajeF = contador / contadorF;
	porcentajeM = contador / contadorM;
	porcentajeNB = contador / contadorNB;
//	Se debe informar al usuario:
// A) Horario promedio de concurrencia.
// B) El porcentaje de clientes por género
// C) Nombre y genero del cliente de menor edad que haya visto una pelicula de Heroes.
// D) El tipo de pelicula mas concurrida"*/

	 mensaje = " A) Horario promedio de concurrencia " + horarioPromedioConcurrencia + "</br>";
	 mensaje += "B) El porcentaje de clientes por género </br>";
	 mensaje += "F = " + porcentajeF + "<br>";
	 mensaje += "M = " + porcentajeM + "<br>";
	 mensaje += "NB = " + porcentajeNB + "<br>";
	 
	 
	
	document.write(mensaje)
	
	
	
}//FIN DE LA FUNCIÓN