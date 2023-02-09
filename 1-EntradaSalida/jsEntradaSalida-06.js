/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let num1;
	let num2;
	let resultado;

	num1 = txtIdNumeroUno.value;
	num2 = txtIdNumeroDos.value;

	num1 = parseInt(num1);
	num2 = parseInt(num2);

	resultado = num1 + num2;

	alert(" la suma es " + resultado);


	//num1= parseInt (document.getElementById("txtIdNumeroUno").value);
	//num2= parseInt (document.getElementById("txtIdNumeroDos").value);
 
}

