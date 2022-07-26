class conversor{
    constructor(medida){
        this.medida = medida;
    }
}

let listaMedidas = [{medida:"temperatura", unidades:"C, K y F"}, {medida:"volumen", unidades:"L, ML, CC y MC"}, {medida:"longitud", unidades:"MM, CM, M, KM, IN, FT y MI"}, {medida:"masa", unidades:"KG, G, OZ, LB y T"}]


let busquedaMedidaUsuario = prompt("¿Qué medida desea convertir?").toLowerCase();
let buscarMedida = listaMedidas.find(med => med.medida == busquedaMedidaUsuario);

if (listaMedidas.some(med => med.medida == busquedaMedidaUsuario)){
    alert(`La medida buscada es ${buscarMedida.medida} y sus unidades a disposicion para convertir son ${buscarMedida.unidades}.`)
}else{
    alert(`No poseemos esa medida para su conversion.`);
    let agregarMedida = () => {
        let medida = prompt("¿Que medida le gustaría que agregaramos en nuestra página?");
    
        let medidaNueva = new conversor (medida);
        listaMedidas.push(medidaNueva);
        console.log(listaMedidas)
        alert(`Usted agrego ${medidaNueva.medida} a la lista de conversores de la pagina. Muchas gracias.`)
    }
    agregarMedida()
}


/* TEMPERATURA */


/* let inputTemp = parseFloat(prompt("TEMPERATURA: Numero a convertir")); */

/* ACA INTENTE CON LA FORMA QUE ME DIJISTE Y DE OTRA FORMA QUE MOSTRO LA PROFE EN UNA DE LASC CLASES Y NO ME FUNCIONA */
/* if(inputTemp.toString() == "NaN"){
    alert("Numero invalido.");
    parseFloat(prompt("Por favor ingresar numero valido a convertir"));
} */

/* let deTemp = prompt("Temperatura a convertir. Elegir entre C (celcius), F (Fahrenheit) y K (Kelvin).").toUpperCase();

if ((deTemp != "C") && (deTemp !=  "F") && (deTemp != "K")){
    alert("No es una medida existente. Por favor ingresar medida valida.");
    deTemp = prompt(" Ingresar temperatura a convertir valida. Elegir entre C (celcius), F (Fahrenheit) y K (Kelvin).").toUpperCase();
}

let aTemp = prompt("Temperatura deseada. Elegir entre C (celcius), F (Fahrenheit) y K (Kelvin).").toUpperCase();

if ((aTemp != "C") && (aTemp !=  "F") && (aTemp != "K")){
    alert("No es una medida existente. Por favor ingresar medida valida.");
    aTemp = prompt(" Ingresar temperatura deseada valida. Elegir entre C (celcius), F (Fahrenheit) y K (Kelvin).").toUpperCase();
} */


const inputTemp = document.getElementById('inputTemp');
const outputTemp = document.getElementById('outputTemp');
const deTemp = document.getElementById('deTemp');
const aTemp = document.getElementById('aTemp');
let deTempValue,aTempValue;

inputTemp.addEventListener("keyup", convertirTemp);
deTemp.addEventListener("change", convertirTemp);
aTemp.addEventListener("change", convertirTemp);

deTempValue = deTemp.value;
aTempValue = aTemp.value;


function convertirTemp(){
    deTempValue = deTemp.value;
    aTempValue = aTemp.value;

    /* celcius a kelvin */
    if (deTempValue == "C" && aTempValue == "K"){
        outputTemp.value = Math.round(inputTemp.value+273.15);
    }/* celcius a fahrenheit */
    else if (deTempValue == "C" && aTempValue == "F"){
        outputTemp.value = Math.round((inputTemp.value*1.8)+32);
    } /* fahrenheit a celcius */
    else if (deTempValue == "F" && aTempValue == "C"){
        outputTemp.value = Math.round((inputTemp.value-32)/1.8);
    }/* fahrenheit a kelvin */
    else if (deTempValue == "F" && aTempValue == "K"){
        outputTemp.value = Math.round(5/9*(inputTemp.value-32)+273.15);
    } /* kelvin a celcius */
    else if (deTempValue == "K" && aTempValue == "C"){
        outputTemp.value = Math.round(inputTemp.value-273.15);
    }/* kelvin a fahrenheit */
    else if (deTempValue == "K" && aTempValue == "F"){
        outputTemp.value = Math.round(1.8*(inputTemp.value-273.15)+32);
    } /* celcius a celcius, kelvin a kelvin, fahrenheit a fahrenheit */
    else {
        outputTemp.value = inputTemp.value;
    }
    
}
convertirTemp();

/* VOLUMEN */

/* let inputVol = parseFloat(prompt("VOLUMEN: Numero a convertir"));

let deVol = prompt("Volumen a convertir. Elegir entre L (Litro), ML (Mililitro), CC (Centimetro Cubico) y MC (Metro Cubico).").toUpperCase();

let aVol = prompt("Volumen deseado. Elegir entre L (Litro), ML (Mililitro), CC (Centimetro Cubico) y MC (Metro Cubico).").toUpperCase(); */

const inputVol = document.getElementById('inputVol');
const outputVol = document.getElementById('outputVol');
const deVol = document.getElementById('deVol');
const aVol = document.getElementById('aVol');
let deVolValue,aVolValue;

inputVol.addEventListener("keyup", convertirVol);
deVol.addEventListener("change", convertirVol);
aVol.addEventListener("change", convertirVol);

deVolValue = deVol.value;
aVolValue = aVol.value;

function convertirVol (){
    /* litro a mililitro */
    if (deVolValue == "L" && aVolValue == "ML"){
        outputVol.value = inputVol.value*1000;
    } /* litro a centimetro cubico */
    else if (deVolValue == "L" && aVolValue == "CC"){
        outputVol.value = inputVol.value*1000;
    } /* litro a metro cubico */
    else if (deVolValue == "L" && aVolValue == "MC"){
        outputVol.value = inputVol.value*0.001;
    } /* mililitro a litro */
    else if (deVolValue == "ML" && aVolValue == "L"){
        outputVol.value = inputVol.value/1000;
    } /* mililitro a centimetro cubico */
    else if (deVolValue == "ML" && aVolValue == "CC"){
        outputVol.value = inputVol.value*1;
    } /* mililitro a metro cubico */
    else if (deVolValue == "ML" && aVolValue == "MC"){
        outputVol.value = inputVol.value/1000000;
    } /* centimetro cubico a litro */
    else if (deVolValue == "CC" && aVolValue == "L"){
        outputVol.value = inputVol.value/1000;
    } /* centimetro cubico a mililitro */
    else if (deVolValue == "CC" && aVolValue == "ML"){
        outputVol.value = inputVol.value*1;
    } /* centimetro cubico a metro cubico */
    else if (deVolValue == "CC" && aVolValue == "MC"){
        outputVol.value = inputVol.value/1000000;
    } /* metro cubico a litro */
    else if (deVolValue == "MC" && aVolValue == "L"){
        outputVol.value = inputVol.value*1000;
    } /* metro cubico a mililitro */
    else if (deVolValue == "MC" && aVolValue == "ML"){
        outputVol.value = inputVol.value*1000000;
    } /* metro cubico a centimetro cubico */
    else if (deVolValue == "MC" && aVolValue == "CC"){
        outputVol.value = inputVol.value*1000000;
    } /* L a L, ML a ML, CC a CC y MC a MC */
    else {
        outputVol.value = inputVol.value;
    } 

}
convertirVol();



