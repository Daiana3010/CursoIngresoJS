/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let numerodividiendo;
	let numerodivisor;
	let resto;

	numerodividiendo = parseInt (document.getElementById("txtIdNumeroDividendo").value);
	numerodivisor = parseInt (document.getElementById("txtIdNumeroDivisor").value);

	resto = numerodividiendo % numerodivisor ;

	alert ("el resto es " + resto);

}
