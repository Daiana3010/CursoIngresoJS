/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	
	let importe;
	let resultado;
	let importedescuento;

	importe = txtIdImporte.value;
	importe = parseInt (importe);

	resultado = txtIdResultado.value;
	resultado = parseInt (resultado);

	//importe = parseInt(document.getElementById("txtIdImporte").value); 
	//resultado = parseInt (document.getElementById("txtIdResultado").value); 

    //para calcular el descuento, se divide el porcentaje por 100 y eso se multiplica por el precio original.
	
    //importedescuento = 25 / 100 * importe;

    importedescuento = 0.25 * importe;

    document.getElementById("txtIdResultado").value = importedescuento;

}

