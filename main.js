let inputTemp = parseFloat(prompt("Numero a convertir"));

let deTemp = prompt("Temperatura a convertir. Elegir entre C (celcius), F (Fahrenheit) y K (Kelvin).").toUpperCase();

let aTemp = prompt("Temperatura deseada. Elegir entre C (celcius), F (Fahrenheit) y K (Kelvin).").toUpperCase();



function convertirTemp(){
    const C = 30;
    const F = 86;
    const K = 303.15;
    
    let outputTemp = resultadoTemp;
    
    /* celcius a fahrenheit */
    if (deTemp == C && aTemp == F){
        outputTemp = inputTemp*F/C;
    } /* celcius a kelvin */
    else if (deTemp == C && aTemp == K){
        outputTemp = inputTemp*K/C;
    } /* fahrenheit a celcius */
    else if (deTemp == F && aTemp == C){
        outputTemp = inputTemp*C/F;
    }/* fahrenheit a kelvin */
    else if (deTemp == F && aTemp == K){
        outputTemp = inputTemp*K/F;
    } /* kelvin a celcius */
    else if (deTemp == K && aTemp == C){
        outputTemp = inputTemp*C/K;
    }/* kelvin a fahrenheit */
    else if (deTemp == K && aTemp == F){
        outputTemp = inputTemp*F/K;
    } /* celcius a celcius, kelvin a kelvin, fahrenheit a fahrenheit */
    else {
        outputTemp = inputTemp;
    }
}
console.log(outputTemp);

