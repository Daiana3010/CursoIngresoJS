/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total*/

function mostrar()
{
	
	let contadorProducto = 0;
	let tipoIngresado;
	let condicion;
	let numeroProducto;
	let precioIngresado;
	let cantidadUnidadesIngresada;
	let marcaIngresada;
	let fabricanteIngresado;
	let precioMasBaratoAlcohol;
	let precioAlcohol;
	let flagPrimerAlcohol = true;
	let cantidadUnidadesAlcoholBarato;
	let fabricanteAlcoholBarato;
	let unidadJabon;
	let productoConMasUnidades;
	let sumatoriaAlcohol;
	let sumatoriaBarbijo;
	let sumatoriaJabon;
	mensaje;
	document.write("Ingreso de 5 productos de prevención de contagio");
	
	while (contadorProducto < 5) 
	{   
		do {
			numeroProducto =  contadorProducto + 1;
			tipoIngresado = prompt("Ingrese producto N° " + numeroProducto + " (barbijo , jabon ó alcohol)");
			if (tipoIngresado != null){
				tipoIngresado = tipoIngresado.toLowerCase();
			}			
			//el tipo (validar "barbijo" , "jabón" o "alcohol") 
			condicion = !(tipoIngresado != null && isNaN(tipoIngresado) && (tipoIngresado == "barbijo" || tipoIngresado == "jabon" || tipoIngresado == "alcohol"));
		} while (condicion);
		
		do {
			precioIngresado = prompt("Ingrese precio, producto N° " + numeroProducto);
			//el precio (validar entre 100 y 300)
			condicion = !(precioIngresado >= 100 && precioIngresado <= 300);
		} while (condicion);
		
		//la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades
		do {
			cantidadUnidadesIngresada = prompt("Ingrese la cantidad del producto N° " + numeroProducto);
			condicion = !(cantidadUnidadesIngresada >= 1 && cantidadUnidadesIngresada <= 1000); 
		} while (condicion);
		
		marcaIngresada = prompt("Ingrese la marca del produco N° " + numeroProducto);
		fabricanteIngresado = prompt("Ingrese el fabricante del producto N° " + numeroProducto);
		
		//fin ingreso datos
		
		switch (tipoIngresado)
		{
			case "alcohol":
			if (flagPrimerAlcohol)
			{
				flagPrimerAlcohol = false;
				precioAlcohol = precioIngresado;
				cantidadUnidadesAlcoholBarato = cantidadUnidadesIngresada;
				fabricanteAlcoholBarato = fabricanteIngresado;
				productoConMasUnidades = cantidadUnidadesIngresada;
				
			}
			else
			{
				if (precioIngresado < precioAlcohol)
				{
					precioMasBaratoAlcohol = precioIngresado;
					cantidadUnidadesAlcoholBarato = cantidadUnidadesIngresada;
					fabricanteAlcoholBarato = fabricanteIngresado;
					productoConMasUnidades = cantidadUnidadesIngresada;
					
				}
			}   
			sumatoriaAlcohol += cantidadUnidadesIngresada;
			break;	
			case "jabon":
				unidadJabon = unidadJabon + cantidadUnidadesIngresada;
				productoConMasUnidades = cantidadUnidadesIngresada;
				jabonAlcohol += cantidadUnidadesIngresada;
			break;
			case "barbijo":
				sumatoriaBarbijo += cantidadUnidadesIngresada;
			default:
			break;
			
		}      
		
		
		
		mensaje = "El alcohol mas barato es " + precioMasBaratoAlcohol + "su marca es " + marcaIngresada + "y la fabrica es " + fabricanteIngresado;
		document.write(mensaje);
		//if (flagPrimerUnidad) 
	//	{
		//	flagPrimerUnidad = false;
		//	productoConMasUnidades = productoConMasUnidades + cantidadUnidadesIngresada;
		//}
		
			//a) Del más barato de los alcohol, la cantidad de unidades y el fabricante 
			
		
		
		//la Marca y el fabricante.
		
		
	
		contadorProducto++;
	}
}
