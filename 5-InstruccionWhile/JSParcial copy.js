

/*
/*
"Un grupo de jugadores del muy conocido juego League Of Legends apodados ""la banda de Gio"",
registran de sus 
partidas distintos parametros.
Para eso vamos a necesitar un programa que pida a cada uno de los jugadores:
Nombre
Campeón/ personaje recurrente (Riven, Jinx, Jax, Darius)
Cantidad de partidas ganadas (No debe ser negativo)
Cantidad de partidas perdidas (No debe ser negativo)
Queremos informar:
A) Porcentaje de victorias del personaje Jinx, sobre el total de partidas ganadas.
B) El nombre del jugador con mas derrotas.
C) Cuantos jugadores ganaron mas de 5 partidas y perdieron menos de 3 (en un mismo ingreso) jugando con Darius o 
Riven
"*/
function mostrar()
{
let campeon; //(Riven, Jinx, Jax, Darius)
let cantidadPartidasGanadas; //(No debe ser negativo)
let cantidadPartidasPerdidas; //(No debe ser negativo)
let condicion;

condicion = false;
do 
{   do 
	{
		campeon = promp("Ingrese al campeon");
		if (campeon == null)
		{
			campeon = tolowercase();
		}
	
	} while (campeon != "riven" && campeon != "jinx" && campeon != "jax" != campeon != "darius");
	
	
	
	
	
	
	
} while (condicion == false);
	
	
	
	
	
}//FIN DE LA FUNCIÓN