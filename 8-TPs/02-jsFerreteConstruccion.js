/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/


function Rectangulo () 
{ 
    let anchoDelTerreno;
    let largoDelTerreno;
    let cantidadDeAlambre;
    let perimetro;

    anchoDelTerreno = txtIdAncho.value;
    largoDelTerreno = txtIdLargo.value;

    anchoDelTerreno = parseFloat(anchoDelTerreno);
    largoDelTerreno = parseFloat(largoDelTerreno);

    perimetro = (largoDelTerreno + anchoDelTerreno) * 2;

    cantidadDeAlambre = perimetro * 3;

    alert("Se necesitan: " + cantidadDeAlambre + " metros");

}

function Circulo () 
{
    let radioDelCirculo;
    let cantidadDeAlambre;
    let perimetroDelCirculo;

    radioDelCirculo = txtIdRadio.value;

    radioDelCirculo = parseFloat(radioDelCirculo);

    // perimetro = 2 * pi * r
    perimetroDelCirculo = 2 * Math.PI * radioDelCirculo;
    cantidadDeAlambre = perimetroDelCirculo * 3;

    alert("La cantidad de alambre que se debe comprar es de: " + cantidadDeAlambre.toFixed(2) + " metros");

	/*RadiodelTerreno = parseFloat(document.getElementById("txtIdRadio").value);

    cantidaddeHilos = 3;
    // para calcular la circunferencia de un terreno circular es
    // 2 por pi por el radio, y lo multiplico por la cantidad de hilos (3).
    totaldeAlambre = 2 * 3.1416 * RadiodelTerreno * cantidaddeHilos; 
    alert ("el total de alambre es " + totaldeAlambre + " para el circulo ");*/
}
function Materiales () 
{
    let anchoDelTerreno;
    let largoDelTerreno;

    anchoDelTerreno = txtIdAncho.value;
    largoDelTerreno = txtIdLargo.value;

    anchoDelTerreno = parseFloat(anchoDelTerreno);
    largoDelTerreno = parseFloat(largoDelTerreno);

    let metros;
	metros = largoDelTerreno * anchoDelTerreno;

    let cantidadCemento;
    cantidadCemento = metros * 2

    let cantidadCal;
    cantidadCal = metros * 3;

    alert ("se necesitan " + cantidadCemento + " bolsas de cemento y " + cantidadCal + " bolsa de cal para el contrapiso ");
}

    




