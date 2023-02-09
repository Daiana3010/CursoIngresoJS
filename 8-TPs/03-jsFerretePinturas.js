/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let fahrenheit; 
    let temperatura;
    let gradosCentigrados;

    // 1 grado celcius equivale a 33,8 faherenheit
    fahrenheit = 33.8;

    //temperatura = document.getElementById("txtIdTemperatura").value;
    temperatura = txtIdTemperatura.value;
    temperatura = parseFloat (temperatura);

    gradosCentigrados = temperatura * 1 /fahrenheit;

    alert (temperatura  + " fahrenheit " + "equivale a " + gradosCentigrados.toFixed(2) + " grados centigrados " );

}

function CentigradosFahrenheit () 
{
    let fahrenheit;
    let temperatura;
    let gradosFahrenheit;

    fahrenheit = 33.8;

    temperatura = txtIdTemperatura.value;
    temperatura = parseFloat (temperatura);

    gradosFahrenheit = temperatura * fahrenheit;

    alert (temperatura + " grados centigrados " + "equivale a " + gradosFahrenheit.toFixed(2) + " fahrenheit " );


}
