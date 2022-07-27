class conversor{
    constructor(medida){
        this.medida = medida;
    }
}

let listaMedidas = [{medida:"temperatura", unidades:"C, K y F"}, {medida:"volumen", unidades:"L, ML, CC y MC"}, {medida:"longitud", unidades:"MM, CM, M, KM, IN, FT y MI"}, {medida:"masa", unidades:"KG, G, OZ, LB y T"}]


/* let busquedaMedidaUsuario = prompt("¿Qué medida desea convertir?").toLowerCase();
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
} */


/* TEMPERATURA */

const inputTemp = document.getElementById('inputTemp');
const outputTemp = document.getElementById('outputTemp');
const deTemp = document.getElementById('deTemp');
const aTemp = document.getElementById('aTemp');
let deTempValue,aTempValue;

inputTemp.addEventListener("keyup", convertirTemp);
deTemp.addEventListener("change", convertirTemp);
aTemp.addEventListener("change", convertirTemp);


function convertirTemp(){
    deTempValue = deTemp.value;
    aTempValue = aTemp.value;

    /* celcius a fahrenheit */
    if (deTempValue == "C" && aTempValue == "F"){
       outputTemp.value = Math.round((inputTemp.value*1.8)+32);
    }/* celcius a kelvin */
    else if (deTempValue == "C" && aTempValue == "K"){
        outputTemp.value = Math.round(Number(inputTemp.value)+273.15);
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

const inputVol = document.getElementById('inputVol');
const outputVol = document.getElementById('outputVol');
const deVol = document.getElementById('deVol');
const aVol = document.getElementById('aVol');
let deVolValue,aVolValue;

inputVol.addEventListener("keyup", convertirVol);
deVol.addEventListener("change", convertirVol);
aVol.addEventListener("change", convertirVol);

function convertirVol (){
    deVolValue = deVol.value;
    aVolValue = aVol.value;

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

let tiposConversiones = [
    {
        tipo: "TEMPERATURA",
        opciones: [
            {
                id: 'C',
                nombre: 'CELCIUS',
            },
            {
                id: 'F',
                nombre: 'FAHRENHEIT',
            },
            {
                id: 'K',
                nombre: 'KELVIN',
            },
        ]
    }, 
    {
        tipo: "VOLUMEN",
        opciones: [
            {
                id: 'L',
                nombre: 'LITRO',
            },
            {
                id: 'ML',
                nombre: 'MILILITRO',
            },
            {
               id: 'CC',
               nombre: 'CENTIMETRO CUBICO',
            },
            {
               id: 'MC',
               nombre: 'METRO CUBICO',
           },
        ]
    },
    {
       tipo: "MASA",
       opciones: [
           {
               id: 'KG',
               nombre: 'KILOGRAMO',
           },
           {
               id: 'G',
               nombre: 'GRAMO',
           },
           {
               id: 'OZ',
               nombre: 'ONZA',
           },
           {
               id: 'LB',
               nombre: 'LIBRA',
           },
           {
               id: 'T',
               nombre: 'TONELADA',
           },
       ]
   },
   {
       tipo: "LONGITUD",
       opciones: [
           {
               id: 'MM',
               nombre: 'MILIMETRO',
           },
           {
               id: 'CM',
               nombre: 'CENTIMETRO',
           },
           {
               id: 'M',
               nombre: 'METRO',
           },
           {
               id: 'KM',
               nombre: 'KILOMETRO',
           },
           {
               id: 'IN',
               nombre: 'PULGADA',
           },
           {
               id: 'FT',
               nombre: 'PIE',
           },
           {
               id: 'MI',
               nombre: 'MILLA',
           },
       ]
   },
] 

tiposConversiones.forEach(obj => {
    if(obj.tipo === "TEMPERATURA"){
        let deTemp = document.getElementById('deTemp')

        obj.opciones.forEach(elemento => {
        let optionTemp = document.createElement('option')
        optionTemp.value = elemento.id
        optionTemp.innerText = elemento.nombre
        deTemp.append(optionTemp)
        });
   } else if(obj.tipo === 'VOLUMEN'){
        let deVol = document.getElementById('deVol')

        obj.opciones.forEach(elemento => {
        let optionVol = document.createElement('option')
        optionVol.value = elemento.id
        optionVol.innerText = elemento.nombre
        deVol.append(optionVol)
       });
   } else if(obj.tipo === 'MASA'){
       let deMasa = document.getElementById('deMasa')

       obj.opciones.forEach(elemento => {
       let optionMasa = document.createElement('option')
       optionMasa.value = elemento.id
       optionMasa.innerText = elemento.nombre
       deMasa.append(optionMasa)
      });
   } else if(obj.tipo === 'LONGITUD'){
       let deLong = document.getElementById('deLong')

       obj.opciones.forEach(elemento => {
       let optionLong = document.createElement('option')
       optionLong.value = elemento.id
       optionLong.innerText = elemento.nombre
       deLong.append(optionLong)
      });
   }
});
