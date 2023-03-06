/*if extra 
A -realizar un algoritmo para ingresar los datos por promt de una pareja de viajero espaciales, 
necesitamos pedir los nombre s de los dos pasajeros y los pesos corporales de cada uno ,
al final deberemos mostrar un mensaje que diga 
“bienvenidos a Space x JOSE y MARIA , sus pesos son de 60 y 80 kilos cada uno ,
y sumados con 150 kilos”
al algoritmo anterior se le debe agregar el siguiente mensaje si los kilos superan los 250 kilos
entre los dos pasajeros
“ con el peso actual de 280 kilos , ustedes no pueden viajar”*/
function mostrar()
{
let pasajero1;
let pasajero2;
let pesoCorporalpasajero1;
let pesoCorporalPasajero2;
let pesoTotal;

pasajero1 = prompt ("ingrese su nombre pasajero 1");
pesoCorporalpasajero1 = prompt ("ingrese su peso corporal");
pasajero2 = prompt ("ingrese su nombre pasajero 2");
pesoCorporalPasajero2 = prompt ("ingrese su peso corporal");

pesoCorporalpasajero1 = parseInt(pesoCorporalpasajero1);
pesoCorporalPasajero2 = parseInt(pesoCorporalPasajero2);
pesoTotal = pesoCorporalpasajero1 + pesoCorporalPasajero2;

if (pesoTotal > 249) {
	alert (" con el peso actual " + pesoTotal + " usted no puede viajar ");
}else{
	alert ("Bienvenidos a Space " + pasajero1 + " y " + pasajero2 + " sus pesos son de " + pesoCorporalpasajero1 + " y " + pesoCorporalPasajero2 + " cada uno " + " y sumados ambos pesos son " + pesoTotal + " kg ");

}

}