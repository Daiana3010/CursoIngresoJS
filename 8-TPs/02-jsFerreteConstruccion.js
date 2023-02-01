/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
let largodelTerreno;
let AnchodelTerreno;
let RadiodelTerreno;
let totaldeAlambre;
let cantidaddeHilos;
let metros;
let cemento2bolsas;
let cantidadCementonecesaria;
let cal3Bolsas;
function Rectangulo () 
{ 
largodelTerreno = parseFloat(document.getElementById("txtIdLargo").value);
AnchodelTerreno = parseFloat(document.getElementById("txtIdAncho").value);

cantidaddeHilos = 3;
totaldeAlambre = ((largodelTerreno + AnchodelTerreno) * 2) * cantidaddeHilos;

alert ("el total de alambre es " + totaldeAlambre + " para el rectangulo ");
}

function Circulo () 
{
	RadiodelTerreno = parseFloat(document.getElementById("txtIdRadio").value);

    cantidaddeHilos = 3;
    // para calcular la circunferencia de un terreno circular es
    // 2 por pi por el radio, y lo multiplico por la cantidad de hilos (3).
    totaldeAlambre = 2 * 3.1416 * RadiodelTerreno * cantidaddeHilos; 
    alert ("el total de alambre es " + totaldeAlambre + " para el circulo ");
}
function Materiales () 
{
	metros = largodelTerreno * AnchodelTerreno;

    cemento2bolsas = 2;
    cantidadCementonecesaria = metros * cemento2bolsas;

    cal3Bolsas = 3;
    cantidadCementonecesaria = metros * cal3Bolsas;

    alert ("se necesitan " + cemento2bolsas + "y " + cal3Bolsas + "para el contrapiso ");
}

    




