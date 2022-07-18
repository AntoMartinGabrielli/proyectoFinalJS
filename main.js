/* TEMPERATURA */

let inputTemp = parseFloat(prompt("Numero a convertir"));

/* ACA INTENTE CON LA FORMA QUE ME DIJISTE Y DE OTRA FORMA QUE MOSTRO LA PROFE EN UNA DE LASC CLASES Y NO ME FUNCIONA */
/* if(inputTemp.toString() == "NaN"){
    alert("Numero invalido.");
    parseFloat(prompt("Por favor ingresar numero valido a convertir"));
} */

let deTemp = prompt("Temperatura a convertir. Elegir entre C (celcius), F (Fahrenheit) y K (Kelvin).").toUpperCase();

if ((deTemp != "C") && (deTemp !=  "F") && (deTemp != "K")){
    alert("No es una medida existente. Por favor ingresar medida valida.");
    deTemp = prompt(" Ingresar temperatura a convertir valida. Elegir entre C (celcius), F (Fahrenheit) y K (Kelvin).").toUpperCase();
}

let aTemp = prompt("Temperatura deseada. Elegir entre C (celcius), F (Fahrenheit) y K (Kelvin).").toUpperCase();

if ((aTemp != "C") && (aTemp !=  "F") && (aTemp != "K")){
    alert("No es una medida existente. Por favor ingresar medida valida.");
    aTemp = prompt(" Ingresar temperatura deseada valida. Elegir entre C (celcius), F (Fahrenheit) y K (Kelvin).").toUpperCase();
}

function convertirTemp(){
    /* celcius a fahrenheit */
    if (deTemp == "C" && aTemp == "F"){
        outputTemp = (inputTemp*1.8)+32;
    } /* celcius a kelvin */
    else if (deTemp == "C" && aTemp == "K"){
        outputTemp = inputTemp + 273.15;
    } /* fahrenheit a celcius */
    else if (deTemp == "F" && aTemp == "C"){
        outputTemp = (inputTemp-32)/1.8;
    }/* fahrenheit a kelvin */
    else if (deTemp == "F" && aTemp == "K"){
        outputTemp = 5/9*(inputTemp-32)+273.15;
    } /* kelvin a celcius */
    else if (deTemp == "K" && aTemp == "C"){
        outputTemp = inputTemp-273.15;
    }/* kelvin a fahrenheit */
    else if (deTemp == "K" && aTemp == "F"){
        outputTemp = 1.8*(inputTemp-273.15)+32;
    } /* celcius a celcius, kelvin a kelvin, fahrenheit a fahrenheit */
    else {
        outputTemp = inputTemp;
    }
    console.log(outputTemp);
}
convertirTemp()

/* VOLUMEN */

let inputVol = parseFloat(prompt("Numero a convertir"));

let deVol = prompt("Volumen a convertir. Elegir entre L (Litro), ML (Mililitro), CC (Centimetro Cubico) y MC (Metro Cubico).").toUpperCase();

let aVol = prompt("Volumen deseado. Elegir entre L (Litro), ML (Mililitro), CC (Centimetro Cubico) y MC (Metro Cubico).").toUpperCase();

function convertirVol (){
    /* litro a mililitro */
    if (deVol == "L" && aVol == "ML"){
        outputVol = inputVol*1000;
    } /* litro a centimetro cubico */
    else if (deVol == "L" && aVol == "CC"){
        outputVol = inputVol*1000;
    } /* litro a metro cubico */
    else if (deVol == "L" && aVol == "MC"){
        outputVol = inputVol*0.001;
    } /* mililitro a litro */
    else if (deVol == "ML" && aVol == "L"){
        outputVol = inputVol/1000;
    } /* mililitro a centimetro cubico */
    else if (deVol == "ML" && aVol == "CC"){
        outputVol = inputVol*1;
    } /* mililitro a metro cubico */
    else if (deVol == "ML" && aVol == "MC"){
        outputVol = inputVol/1000000;
    } /* centimetro cubico a litro */
    else if (deVol == "CC" && aVol == "L"){
        outputVol = inputVol/1000;
    } /* centimetro cubico a mililitro */
    else if (deVol == "CC" && aVol == "ML"){
        outputVol = inputVol*1;
    } /* centimetro cubico a metro cubico */
    else if (deVol == "CC" && aVol == "MC"){
        outputVol = inputVol/1000000;
    } /* metro cubico a litro */
    else if (deVol == "MC" && aVol == "L"){
        outputVol = inputVol*1000;
    } /* metro cubico a mililitro */
    else if (deVol == "MC" && aVol == "ML"){
        outputVol = inputVol*1000000;
    } /* metro cubico a centimetro cubico */
    else if (deVol == "MC" && aVol == "CC"){
        outputVol = inputVol*1000000;
    } /* L a L, ML a ML, CC a CC y MC a MC */
    else {
        outerVol = inputVol;
    } 

    console.log(outputVol);
}
convertirVol()


class conversor{
    constructor(medida){
        this.medida = medida;
    }
}

let listaMedidas = [{medida:"temperatura"}, {medida:"volumen"}, {medida:"longitud"}, {medida:"masa"}]

let agregarMedida = () => {
    let medida = prompt("¿Que medida le gustaría que agregaramos en nuestra página?");

    let medidaNueva = new conversor (medida);
    listaMedidas.push(medidaNueva);
    console.log(listaMedidas)
    alert(`Usted agrego ${medidaNueva} a la lista de conversores de la pagina. Muchas gracias.`)
}

agregarMedida()


/* ESTO QUE ESTA COMENTADO ABAJO NO SE SI SERVIRA DE ALGO, INTENTE HACER PERO NO SE COMO CONECTARLO CON OTRAS COSAS, FUNCIONES, ETC */
/* class conversor2{
    constructor (temperatura, volumen, masa, longitud){
        this.temperatura = temperatura;
        this.volumen = volumen;
        this.masa = masa;
        this.longitud = longitud;
    }
}

let medidas = [
    {
    temp1:"Celcius",
    temp2:"Kelvin",
    temp3:"Farenheit"
    },
    {
    vol1:"Litro",
    vol2:"Mililitro",
    vol3:"Metro cubico",
    vol4:"Centimetro Cubico"
    }
] */
