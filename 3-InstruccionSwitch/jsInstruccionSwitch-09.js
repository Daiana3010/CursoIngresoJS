//una agencia de viajes debe sacar las tarifas de los viajes , 
//se cobra $15.000 por cada estadia como base, 
//se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final
//en Invierno: bariloche tiene un aumento del 20% cataratas y
// Cordoba tiene un descuento del 10%
// Mar del plata tiene un descuento del 20%

function mostrar()
{
	let estacionIngresada = document.getElementById("txtIdEstacion").value;
	let destino = document.getElementById("txtIdDestino").value;
	let estadia;
	estadia = 15000;
	let precioFinal;


	switch(estacionIngresada){
		case "Invierno":
			switch (destino){
				case "Bariloche":
					precioFinal = estadia * 1.20;
				break;
				case "Cataratas":
		        case "Cordoba":
					precioFinal = estadia * 0.90;
		      	break;
				case "Mar del plata":
					precioFinal = estadia * 0.80;
				break;
			}
		break;	
		case "Verano":
			switch(destino){
				case "Bariloche":
					precioFinal = estadia * 0.80;
					break;
				case "Cataratas":
				case "Cordoba":
					precioFinal = estadia * 1.10;
					break;
			}
		break;
		case "Otoño":
		case "Primavera":
			switch(destino){
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					precioFinal = estadia * 1.10;
					break;
				default:
					alert("precio sin descuento");
					break
			
			}
		break;
	}

	alert("El total a pagar es " + precioFinal);

}//FIN DE LA FUNCIÓN