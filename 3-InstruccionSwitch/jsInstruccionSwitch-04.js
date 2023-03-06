/*al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.*/


function mostrar()
{
	//tomo el mes
	let mesDelAno =txtIdMes.value;
	switch (mesDelAno){
		case "Febrero":
			alert("tiene 28 dias");
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("tiene 30 dias");
			break;
		default:
			alert("tiene 31 dias");
	}
	
	



}//FIN DE LA FUNCIÓN