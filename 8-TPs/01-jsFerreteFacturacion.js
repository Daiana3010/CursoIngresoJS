/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

{
    precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);
   
}
function Sumar () 
{ 
  let precio1;
  let precio2;
  let precio3;
  let sumatoria;

  precio1 = txtIdPrecioUno.value;
  precio2 = txtIdPrecioDos.value;
  precio3 = txtIdPrecioTres.value;

  precio1 = parseInt (precio1);
  precio2 = parseInt (precio2);
  precio3 = parseInt (precio3);
  
  sumatoria = precio1 + precio2 + precio3;
  alert ("el resultado de la suma es " + sumatoria); 
	
}
function Promedio () 
{ 
  let precio1;
  let precio2;
  let precio3;
  let promedio;

  precio1 = txtIdPrecioUno.value;
  precio2 = txtIdPrecioDos.value;
  precio3 = txtIdPrecioTres.value;
  
  precio1 = parseInt (precio1);
  precio2 = parseInt (precio2);
  precio3 = parseInt (precio3);
  
  promedio = (precio1 + precio2 + precio3) / 3;

  alert ("el resultado del promedio es " + promedio);

}
function PrecioFinal () 
{
  let precio1;
  let precio2;
  let precio3;
  let porcentajeIva;

  precio1 = txtIdPrecioUno.value;
  precio2 = txtIdPrecioDos.value;
  precio3 = txtIdPrecioTres.value;
  
  precio1 = parseInt (precio1);
  precio2 = parseInt (precio2);
  precio3 = parseInt (precio3);
    
  porcentajeIva = (precio1 + precio2 + precio3) * 1.21;

  alert ("el precio final es " + porcentajeIva);
	
}