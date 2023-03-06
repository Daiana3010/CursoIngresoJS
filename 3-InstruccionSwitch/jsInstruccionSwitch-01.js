//al seleccionar un mes informar.
//si es Enero: "que comiences bien el año!!!."
//si es Marzo: "a clases!!!."
//si es Julio: "se vienen las vacaciones!!!."
//si es Diciembre: "Felices fiesta!!!."



function mostrar()


{
	//tomo el mes
	var mesDelAño;
	mesDelAño = document.getElementById("txtIdMes").value;

	if (mesDelAño == "Enero") {
		alert("Que comience bien el año");		
	}else if (mesDelAño == "Marzo"){
		alert("a clases");
	}else if (mesDelAño == "Julio") {
		alert("se vienen las vacaciones");
	}else if (mesDelAño == "Diciembre") {
		alert("felices fiestas");
	}
}//FIN DE LA FUNCIÓN