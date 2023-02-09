/*
Se ingresará por id el valor de una compra de productos para el hogar.
Se deberá agregar el iva (21%) y  luego se deberá restar el 5% en concepto de compra mayorista.
  
El programa deberá mostrar por alert 
importe bruto,
el iva,
el importe con iva, 
el valor del descuento y el total a pagar.

*/

function Sumar() 

{
let importeBruto;
let totalPagar;

importeBruto = txtIdpProductoHogar.value;
importeBruto = parseFloat (precioProducto);

let porcentajeIva21;
porcentajeIva21 = importeBruto * 1.21;

let compraMayorista;
compraMayorista = porcentajeIva21 * 5 / 100;

let precioNeto;
precioNeto = compraMayorista - importeBruto;

alert("el importe bruto es " + importeBruto + " con el descuento del iva del 21% quedan: " + porcentajeIva21 + "al restarle el 5% de precio mayorista queda " + compraMayorista + "total a pagar es " + precioNeto);



}
