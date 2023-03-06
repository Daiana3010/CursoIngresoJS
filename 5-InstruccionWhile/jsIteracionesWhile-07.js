/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	contador=0;
	acumulador=0;
	respuesta="si";
	
	while (respuesta == "si") 
	{
		numeroIngresado = parseInt(prompt("Ingrese un numero"));
		acumulador = acumulador + numeroIngresado;
		contador++;     	
		respuesta = prompt ("Desea ingresar otro numero si/no");
	}
	
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;

	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;

}//FIN DE LA FUNCIÓN