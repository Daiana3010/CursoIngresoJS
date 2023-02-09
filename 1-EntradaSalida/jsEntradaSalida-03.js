/*
al presionar el botón 'mostrar',
Debemos lograr tomar un dato por ID.value
y luego mostrarlo por 'alert()'

*/
function mostrar()
{
	let nombre;
	nombre = document.getElementById("txtIdNombre").value;
	alert ("su nombre es " + nombre);
}