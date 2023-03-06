/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;

	//iniciar variables
	banderaDelPrimero="es el primero";
	respuesta="si";	

	while(respuesta=="si")
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		if (banderaDelPrimero == "es el primero") 
		{
			banderaDelPrimero = "";
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;	
		}
		else
		{
			if (numeroIngresado > numeroMaximo) 
			{
				numeroMaximo = numeroIngresado;
			}
			if (numeroIngresado < numeroMinimo)
			{
				numeroMinimo = numeroIngresado;				
			}
		}
				
		respuesta=prompt("desea continuar? si/no ");
	}
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;
}//FIN DE LA FUNCIÓN