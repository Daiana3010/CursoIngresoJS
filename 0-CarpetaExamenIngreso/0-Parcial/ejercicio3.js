/*
Ejercicio 3:
Apellido: daina	
Nombre: arina
Comisión: F
Tutor: Gaston

3) De una cantidad indeterminada de exámenes de ingreso, se registran y validan los siguientes datos:

Nombre del estudiante
Nombre de la asignatura (“LECTURA”, “MATEMÁTICA”, “PROGRAMACIÓN”)
Tipo de examen (“EXAMEN”, “RECUPERATORIO”)
Calificación

Informar:

A) El nombre de la asignatura con mayor porcentaje de aprobados, cuyo tipo de examen fue EXAMEN.
B) El promedio de estudiantes que aprobaron PROGRAMACIÓN independientemente del tipo de examen.
C) El porcentaje de aprobación por cada asignatura, cuyo tipo de examen es RECUPERATORIO. 

ACLARACIÓN: Aprobado sería una calificación mayor o igual a 6.

En los tres ejercicios, se deberá pedir los datos por prompt y mostrar la información por document.write().

*/

function mostrar()
{	
	//declaracion de variables
	let continua;
	let mensaje="";

	let datosNombre;	
	let datosAsignatura;
	let datosTipoExamen;
	let datosCalificacion;
	
	let contadorAprobadosExamen = 0;
	let contadorAlumnos = 0;	
	let contadorLectura = 0;	
	let contadorMatematica = 0;
	let contadorProgramacion = 0;
	let porcentajeAprobadosLectura = 0;	
	let porcentajeAprobadosMatematica = 0;
	let porcentajeAprobadosProgramacion = 0;

	let contadorAprobadosProgramacion = 0;
	let sumatoriaAprobados = 0;
	let promedioAprobadosProgramacion = 0;

	let contadorAprobadosRecuperatorio = 0;


	let resultadoNombreAsignaturaConMasAprobados = 0;
	let porcentajeAprobadosLecturaRecuperatorio = 0;	
	let porcentajeAprobadosMatematicaRecuperatorio = 0;
	let porcentajeAprobadosProgramacionRecuperatorio = 0;

	do 
	{
		do{
			datosNombre = prompt("Nombre del estudiante");
		}
		while(!isNaN(datosNombre));

		do{
			datosAsignatura = prompt("Nombre de la asignatura (“LECTURA”, “MATEMÁTICA”, “PROGRAMACIÓN”)")
			if (datosAsignatura != null)
			{
				datosAsignatura = datosAsignatura.toLowerCase();
			}			
		}
		while(datosAsignatura != "lectura" && datosAsignatura != "matematica" && datosAsignatura != "programacion");
		
		do{
			datosTipoExamen = prompt("Tipo de examen (“EXAMEN”, “RECUPERATORIO”)")
			if (datosTipoExamen != null)
			{
				datosTipoExamen = datosTipoExamen.toLowerCase();
			}			
		}
		while(datosTipoExamen != "examen" && datosTipoExamen != "recuperatorio");


		do{
			datosCalificacion = prompt("ingrese calificacion (del 1 y 10)");
			datosCalificacion = parseInt(datosCalificacion);
		}
		while(isNaN(datosCalificacion) || datosCalificacion < 1 || datosCalificacion > 10);
		

		// A) El nombre de la asignatura con mayor porcentaje de aprobados, cuyo tipo de examen fue EXAMEN.
		// B) El promedio de estudiantes que aprobaron PROGRAMACIÓN independientemente del tipo de examen.
		// C) El porcentaje de aprobación por cada asignatura, cuyo tipo de examen es RECUPERATORIO. 
		
		// ACLARACIÓN: Aprobado sería una calificación mayor o igual a 6.

		switch (datosAsignatura) {
			case "lectura":
				contadorLectura++;
				break;
			case "matematica":
				contadorMatematica++;
				break;
			case "programacion":
				contadorProgramacion++;
				break;
		}

		contadorAlumnos++;

		if (datosCalificacion >= 6)
		{
			switch (datosTipoExamen) {
				case "examen":
					contadorAprobadosExamen++;
					break;	
				case "recuperatorio":
					contadorAprobadosRecuperatorio++;
					break;						
			}

			sumatoriaAprobados++;
		}

		if (datosCalificacion >= 6 && datosAsignatura == "programacion")
		{
			contadorAprobadosProgramacion++;
		}
		
		continua = confirm("continua si/no");
	}
	while (continua);
	
	porcentajeAprobadosLectura = (contadorLectura * 100) / contadorAprobadosExamen;
	porcentajeAprobadosMatematica = (contadorMatematica * 100) / contadorAprobadosExamen;
	porcentajeAprobadosProgramacion = (contadorProgramacion * 100) / contadorAprobadosExamen;

	porcentajeAprobadosLecturaRecuperatorio = (contadorLectura * 100) / contadorAprobadosRecuperatorio;
	porcentajeAprobadosMatematicaRecuperatorio = (contadorMatematica * 100) / contadorAprobadosRecuperatorio;
	porcentajeAprobadosProgramacionRecuperatorio = (contadorProgramacion * 100) / contadorAprobadosRecuperatorio;

	promedioAprobadosProgramacion = sumatoriaAprobados / contadorAprobadosProgramacion;

	if (porcentajeAprobadosLectura > porcentajeAprobadosMatematica)
	{
		if (porcentajeAprobadosLectura > porcentajeAprobadosProgramacion)
		{
			resultadoNombreAsignaturaConMasAprobados = "Lectura";	
		}
		else
		{
			resultadoNombreAsignaturaConMasAprobados = "Programacion";
		}
	}
	else
	{	
		if (porcentajeAprobadosMatematica > porcentajeAprobadosLectura)
		{
			resultadoNombreAsignaturaConMasAprobados = "Matematica";			
		}
		else
		{
			resultadoNombreAsignaturaConMasAprobados = "Lectura";
		}
	}

	mensaje = "el resultado es </br>";
	mensaje += "A) El nombre de la asignatura con mayor porcentaje de aprobados, cuyo tipo de examen fue EXAMEN. </br>";
	mensaje += resultadoNombreAsignaturaConMasAprobados + " </br>";
	mensaje += " B) El promedio de estudiantes que aprobaron PROGRAMACIÓN independientemente del tipo de examen. </br>";
	mensaje +=  promedioAprobadosProgramacion + " </br>";
	mensaje += " </br>";
	document.write(mensaje);

	
}//FIN DE LA FUNCIÓN