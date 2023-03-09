/******************************************************************************
Ejercicio 2:

Apellido: Arina
Nombre: Daiana
Comisión: F
Tutor: Gaston


*******************************************************************************/

function mostrar()
{
	//declaracion de variables
	let continua;
	let mensaje="";

	let datosNombre;	
	let datosMonto;	
	let datosProducto;	

	let contadorCantidadVentas = 0;
	let sumadorMontoTotalVendido = 0;
	
	let contadorTelefono = 0;
	let contadorTablet = 0;
	let contadorTV = 0;

	let porcentajeVentasTelefono = 0;
	let porcentajeVentasTablet = 0;
	let porcentajeVentasTV = 0;

	let sumatoriaMontoTelefono = 0;

	let productoMasVendido = "";
	let productoMenosVendido = "";
	let flagPrimerProducto = 1;

	do 
	{
		do{
			datosNombre = prompt("ingrese nombre de cliente (texto)");
		}
		while(!isNaN(datosNombre))

		do{
			datosMonto = prompt("ingrese Monto (numérico)");	
			datosMonto = parseInt(datosMonto);
		}
		while(isNaN(datosMonto));


		do{
			datosProducto = prompt("ingrese producto (“TELEFONO”, “TABLET”, “TV”)")
			if (datosProducto != null)
			{
				datosProducto = datosProducto.toLowerCase();
			}			
		}
		while(datosProducto != "telefono" && datosProducto != "tablet" && datosProducto != "tv");
		
		contadorCantidadVentas++;
		sumadorMontoTotalVendido += datosMonto;

		switch (datosProducto) {
			case "telefono":
				contadorTelefono++;
				break;
			case "tablet":
				contadorTablet++;
				break;
			case "tv":
				contadorTV++;
				break;
		}

		if (flagPrimerProducto == 1)
		{
			flagPrimerProducto = 0
			productoMasVendido = datosProducto;
			productoMenosVendido = datosProducto
		}
		else
		{
			if (contadorTelefono > contadorTablet)
			{
				if (contadorTelefono > contadorTV)
				{
					productoMasVendido = "Telefono";	
				}
				else
				{
					productoMasVendido = "TVs";
				}
			}
			else
			{	
				if (contadorTablet > contadorTV)
				{
					productoMasVendido = "Tablets";			
				}
				else
				{
					productoMasVendido = "TVs";
				}

			}

			if (contadorTelefono < contadorTablet)
			{
				if (contadorTelefono < contadorTV)
				{
					productoMenosVendido = "Telefono";	
				}
				else
				{
					productoMenosVendido = "TVs";
				}
			}
			else
			{	
				if (contadorTablet < contadorTV)
				{
					productoMenosVendido = "Tablets";			
				}
				else
				{
					productoMenosVendido = "TVs";
				}
			}
		}

		
		continua = confirm("continua si/no");
	}
	while (continua);

	porcentajeVentasTelefono = (contadorTelefono * 100) / contadorCantidadVentas;
	porcentajeVentasTablet = (contadorTablet * 100) / contadorCantidadVentas;
	porcentajeVentasTV = (contadorTV * 100) / contadorCantidadVentas;

	mensaje = "el resultado es </br>";
	mensaje += "A) Cantidad de ventas: " + contadorCantidadVentas + " - Monto total vendido. " + sumadorMontoTotalVendido + " </br>" ;
	mensaje += "B) Porcentaje de ventas de cada uno de los tipos de productos. </br>";
	mensaje += " 	Porcentaje de ventas teléfonos :" + porcentajeVentasTelefono +"</br>";
	mensaje += " 	Porcentaje de ventas tablets   :" + porcentajeVentasTablet +"</br>";
	mensaje += " 	Porcentaje de ventas TVs      :" + porcentajeVentasTV +"</br>";
	mensaje += " C) Producto que más y que menos se vendió.</br>";
	mensaje += " 	mas vendido: "+ productoMasVendido +"</br>";
	mensaje += " 	menos vendido:"+productoMenosVendido +" </br>";
	
	document.write(mensaje);

	
}//FIN DE LA FUNCIÓN