/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	let respuesta;
	let numeroIngresado;
    let sumaNegativos = 0;
	let contadorPositivos = 0;
	let contadorNegativos = 0;
	let contadorCero = 0;
	let contadorNumerosPares = 0;
	let sumaPositivos = 0;
	let promedioPositivos = 0;
	let promedioNegativos = 0;
	let diferenciaPositivosNegativos = 0;
	let mensaje;
	let condicion;
	

	respuesta = true;

	while(respuesta == true)
	{
		do {
			numeroIngresado = parseInt(prompt("Ingrese un numero"));
			condicion = isNaN(numeroIngresado);
		} while (condicion);
		
		if (numeroIngresado < 0) 
		{
			//1-Suma de los negativos.		    
		    sumaNegativos = sumaNegativos + numeroIngresado;
		    //4-Cantidad de negativos.
		    contadorNegativos++;
		}
		else  
		{
			if (numeroIngresado > 0) {
				//2-Suma de los positivos.
				sumaPositivos = sumaPositivos + numeroIngresado;
				//3-Cantidad de positivos.
				contadorPositivos++;
			} else {
				//5-Cantidad de ceros.
				contadorCero++;		
			}			
		}
		//6-Cantidad de números pares.
		if (numeroIngresado % 2 == 0)
		{ 
		     contadorNumerosPares++;		
		}
		
		respuesta = confirm("continuar?");
		
		
	}//fin del while
	
	//7-Promedio de positivos.
	if (contadorPositivos > 0)
	{
		promedioPositivos = sumaPositivos / contadorPositivos;
	}
	
	//8-Promedios de negativos.
	if (contadorNegativos > 0)
	{
		promedioNegativos = sumaNegativos / contadorNegativos;
	}
		
	//9-Diferencia entre positivos y negativos, (positvos-negativos). 
	diferenciaPositivosNegativos = sumaPositivos - sumaNegativos;
	
	
	mensaje = "1-Suma de los negativos. " + sumaNegativos + "<br>";
	mensaje += "2-Suma de los positivos. " + sumaPositivos + "<br>";
	mensaje += "3-Cantidad de positivos. " + contadorPositivos + "<br>";
	mensaje += "4-Cantidad de negativos. " + contadorNegativos + "<br>";
	mensaje += "5-Cantidad de ceros. " + contadorCero + "<br>";
	mensaje += "6-Cantidad de números pares. " + contadorNumerosPares + "<br>";
	mensaje += "7-Promedio de positivos. " + promedioPositivos + "<br>";
	mensaje += "8-Promedios de negativos. " + promedioNegativos + "<br>";
	mensaje += "9-Diferencia entre positivos y negativos, (positvos-negativos). " + diferenciaPositivosNegativos + "<br>";

	document.write(mensaje);
}//FIN DE LA FUNCIÓN