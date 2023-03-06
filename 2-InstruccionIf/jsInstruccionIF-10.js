function mostrar()
{
	let notaExamen;
	notaExamen = Math.random()*10;
	notaExamen = Math.floor (notaExamen) +1;
	console.log = notaExamen;

	if ( notaExamen >= 9 ) {
		alert("Excelente"); 
	} else if(notaExamen < 4 ) {
		alert ("Vamos la proxima se puede");

	} else {
		alert ("aprobado");
	}

		
	}

