// "La carnicería barrial ""Paul Mc Carne"" 
//quiere crear su propia página web para poder realizar ventas a domicilio. Para esto nos piden hacer un programa para que los clientes realicen compras y la carnicería gestione los pedidos con eficiencia.

// Se le pide al usuario agregar productos a su ""carrito"" hasta que el desee: 

// · Productos (Asado, Vacío, Achuras, Pollo)
// · Cantidad de kilos. (No puede ser negativo o mayor a 20 por stock)
// · País del cual proviene (Argentina, Italia, Japón, Uruguay)

// Aclaraciones:
// - Si compro achuras, se agrega un 15%  porque están escaseando en el país.
// - Si el producto no proviene de la producción interna del país se le cobra un 
//   20% de interés sobre el precio
// bruto de ese producto
// - Si la cantidad de kilos total supera los 10 Kg se debe cobrar un interés del 25% Sobre el precio bruto.
// - Si compró todos los items de la lista (Asado, vacio, achuras y pollo), el cliente recibira un 10% de descuento.

// Se le informa: 
// A) Producto más requerido (Sin importar su peso).
// B) Porcentaje de cortes de carne (Asado, Vacío, Pollo) solicitado sobre el total de compras.
// C) Promedio de achuras sobre el total de kilos de todos los productos.
// D) Cuánto pagará el cliente incluyendo descuentos e intereses.
function mostrar()
{

	// Lista e precios
	let producto = ""; //(Asado, Vacío, Achuras, Pollo)
	let cantidadDeKilos; //(No puede ser negativo o mayor a 20 por stock)
	let paisProveniente; //(Argentina, Italia, Japón, Uruguay)
	let precioProducto;
	let descuento = 0;
	let aumento = 0;
	do
	{
		do 
		{ 
			producto = prompt("Ingrese producto:(Asado, Vacío, Achuras, Pollo)");
			if (producto == null)
			{
				producto = producto.toLowerCase();
			}
		
		} while (producto != "asado" && producto != "vacio" && producto != "achuras" && producto != "pollo");
		
		do 
		{
			cantidadDeKilos = prompt("Ingrese la cantidad de kilos");
			if (cantidadDeKilos == null)
			{
				cantidadDeKilos = cantidadDeKilos.toLowerCase();	
			}
			
		} while (cantidadDeKilos < 0 && cantidadDeKilos > 20);
		
		do 
		{   
			paisProveniente = prompt("Ingrese pais de origen");
			if (paisProveniente == null)
			{
				paisProveniente = paisProveniente.toLowerCase();
			}
			
		} while (paisProveniente != "argentina" && paisProveniente != "italia" && paisProveniente != "Japón" && paisProveniente != "uruguay");
	
		// - Si compro achuras, se agrega un 15%  porque están escaseando en el país.
		if (producto == "achuras")
		{   
			
		} else {
			
		}
		// - Si el producto no proviene de la producción interna del país se le cobra un 20% de interés sobre el precio
		// bruto de ese producto
		// - Si la cantidad de kilos total supera los 10 Kg se debe cobrar un interés del 25% Sobre el precio bruto.
		// - Si compró todos los items de la lista (Asado, vacio, achuras y pollo), el cliente recibira un 10% de descuento.
	
	
	
	
	
	
		condicion = confirm("Desea continuar?");
	} while (condicion == false);
	
	 
	 
	
	
	
	
	
}//FIN DE LA FUNCIÓN