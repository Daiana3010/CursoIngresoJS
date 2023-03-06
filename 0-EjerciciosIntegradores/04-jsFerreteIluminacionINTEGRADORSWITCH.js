function CalcularPrecio() 
{
    let marca;
    let cantidadLamparas;
    let precioLampara;
    let precioTotalLamparas;
    let descuento;
    let importeFinalConDescuento;
    let ingresosBrutos;

    precioLampara = 35;
    cantidadLamparas = document.getElementById("txtIdCantidad").value;
    cantidadLamparas = parseInt(cantidadLamparas);
    marca = document.getElementById("Marca").value;
    precioTotalLamparas = cantidadLamparas * precioLampara;

    descuento = 0;
    switch (cantidadLamparas) 
    {
        case 5:
            switch (marca) 
            {
                case "ArgentinaLuz":
                    descuento = 0.40;
                    break;
                default:
                    descuento = 0.30;
                    break;
            }
            break;
        case 4:
            switch (marca) 
            {
                case "ArgentinaLuz":
                case "FelipeLamparas":
                    descuento = 0.25;
                    break;
                default:
                    descuento = 0.20;
                    break;
            }
            break;
        case 3:
            switch (marca) 
            {
                case "ArgentinaLuz":
                    descuento = 0.15;
                    break;
                case "FelipeLamparas":
                    descuento = 0.10;
                    break;
                default:
                    descuento = 0.05;
                    break;
            }
            break;
        default:
            if (cantidadLamparas > 5) 
            {
                descuento = 0.50;
            }
            break;
    }
    
    importeFinalConDescuento = precioTotalLamparas - precioTotalLamparas * descuento;

    if (importeFinalConDescuento > 120) 
    {
        ingresosBrutos = importeFinalConDescuento * 0.10;
        importeFinalConDescuento = importeFinalConDescuento + ingresosBrutos;
        alert("Usted pago $" + ingresosBrutos + " de IIBB");
    }

    document.getElementById("txtIdprecioDescuento").value = importeFinalConDescuento;
}
