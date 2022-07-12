let inputTemp = parseFloat(prompt("Numero a convertir"));

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
