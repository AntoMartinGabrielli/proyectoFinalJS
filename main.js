class conversor{
    constructor(medida){
        this.medida = medida;
    }
}

let listaMedidas = [{medida:"temperatura", unidades:"C, K y F"}, {medida:"volumen", unidades:"L, ML, CC y MC"}, {medida:"longitud", unidades:"MM, CM, M, KM, IN, FT y MI"}, {medida:"masa", unidades:"KG, G, OZ, LB y T"}]

/* LONGITUD */

const inputLong = document.getElementById('inputLong');
const outputLong = document.getElementById('outputLong');
const deLong = document.getElementById('deLong');
const aLong = document.getElementById('aLong');
let deLongValue,aLongValue;

inputLong.addEventListener("keyup", convertirLong);
deLong.addEventListener("change", convertirLong);
aLong.addEventListener("change", convertirLong);


function convertirLong(){
    deLongValue = deLong.value;
    aLongValue = aLong.value;

    /* metro a milimetro */
    if (deLongValue == "M" && aLongValue == "MM"){
        outputLong.value = inputLong.value*1000;
    }/* metro a centimetro */
    else if (deLongValue == "M" && aLongValue == "CM"){
        outputLong.value = inputLong.value*100;
    } /* metro a kilometro */
    else if (deLongValue == "M" && aLongValue == "KM"){
        outputLong.value = inputLong.value*0.001;
    }/* metro a pulgada */
    else if (deLongValue == "M" && aLongValue == "IN"){
        outputLong.value = inputLong.value*39.370;
    } /* metro a pie */
    else if (deLongValue == "M" && aLongValue == "FT"){
        outputLong.value = inputLong.value*3.2808;
    }/* metro a milla */
    else if (deLongValue == "M" && aLongValue == "MI"){
        outputLong.value = inputLong.value*0.00062137;
    } /* milimetro a centimetro */
    else if (deLongValue == "MM" && aLongValue == "CM"){
        outputLong.value = inputLong.value*0.1;
    }/* milimetro a metro */
    else if (deLongValue == "MM" && aLongValue == "M"){
        outputLong.value = inputLong.value*0.001 ;
    } /* milimetro a kilometro */
    else if (deLongValue == "MM" && aLongValue == "KM"){
        outputLong.value = inputLong.value*0.000001;
    }/* milimetro a pulgada */
    else if (deLongValue == "MM" && aLongValue == "IN"){
        outputLong.value = inputLong.value*0.03937;
    } /* milimetro a pie */
    else if (deLongValue == "MM" && aLongValue == "FT"){
        outputLong.value = inputLong.value*0.00328;
    }/* milimetro a milla */
    else if (deLongValue == "MM" && aLongValue == "MI"){
        outputLong.value = inputLong.value*0.0000006214;
    }  /* centimetro a milimetro */
    else if (deLongValue == "CM" && aLongValue == "MM"){
        outputLong.value = inputLong.value*10;
    }/* centimetro a metro */
    else if (deLongValue == "CM" && aLongValue == "M"){
        outputLong.value = inputLong.value*0.01;
    } /* centimetro a kilometro */
    else if (deLongValue == "CM" && aLongValue == "KM"){
        outputLong.value = inputLong.value*0.00001;
    }/* centimetro a pulgada */
    else if (deLongValue == "CM" && aLongValue == "IN"){
        outputLong.value = inputLong.value*0.3937;
    } /* centimetro a pie */
    else if (deLongValue == "CM" && aLongValue == "FT"){
        outputLong.value = inputLong.value*0.032808;
    }/* centimetro a milla */
    else if (deLongValue == "CM" && aLongValue == "MI"){
        outputLong.value = inputLong.value*0.0000062137;
    } /* kilometro a milimetro */
    else if (deLongValue == "KM" && aLongValue == "MM"){
        outputLong.value = inputLong.value*1000000;
    }/* kilometro a centimetro */
    else if (deLongValue == "KM" && aLongValue == "CM"){
        outputLong.value = inputLong.value*100000;
    } /* kilometro a metro*/
    else if (deLongValue == "KM" && aLongValue == "M"){
        outputLong.value = inputLong.value*1000;
    }/* kilometro a pulgada */
    else if (deLongValue == "KM" && aLongValue == "IN"){
        outputLong.value = inputLong.value*39370.07;
    } /* kilometro a pie */
    else if (deLongValue == "KM" && aLongValue == "FT"){
        outputLong.value = inputLong.value*3280.8;
    }/* kilometro a milla */
    else if (deLongValue == "KM" && aLongValue == "MI"){
        outputLong.value = inputLong.value*0.62137;
    }  /* pulgada a milimetro */
    else if (deLongValue == "IN" && aLongValue == "MM"){
        outputLong.value = inputLong.value*25.4;
    }/* pulgada a centimetro */
    else if (deLongValue == "IN" && aLongValue == "CM"){
        outputLong.value = inputLong.value*2.54;
    } /* pulgada a metro*/
    else if (deLongValue == "IN" && aLongValue == "M"){
        outputLong.value = inputLong.value*0.0254;
    }/* pulgada a kilometro */
    else if (deLongValue == "IN" && aLongValue == "KM"){
        outputLong.value = inputLong.value*0.0000254;
    } /* pulgada a pie */
    else if (deLongValue == "IN" && aLongValue == "FT"){
        outputLong.value = inputLong.value*0.083333;
    }/* pulgada a milla */
    else if (deLongValue == "IN" && aLongValue == "MI"){
        outputLong.value = inputLong.value*0.00001578;
    }/* pie a milimetro */
    else if (deLongValue == "FT" && aLongValue == "MM"){
        outputLong.value = inputLong.value*304.8;
     }/* pie a centimetro */
    else if (deLongValue == "FT" && aLongValue == "CM"){
        outputLong.value = inputLong.value*30.48;
     } /* pie a metro */
    else if (deLongValue == "FT" && aLongValue == "M"){
        outputLong.value = inputLong.value*0.3048;
     }/* pie a kilometro */
    else if (deLongValue == "FT" && aLongValue == "KM"){
        outputLong.value = inputLong.value*0.0003048;
     } /* pie a pulgada */
    else if (deLongValue == "FT" && aLongValue == "IN"){
        outputLong.value = inputLong.value*12;
     }/* pie a milla */
    else if (deLongValue == "FT" && aLongValue == "MI"){
        outputLong.value = inputLong.value*0.00018939;
     }  /* milla a milimetro */
    else if (deLongValue == "MI" && aLongValue == "MM"){
        outputLong.value = inputLong.value*1609344;
     }/* milla a centimetro */
    else if (deLongValue == "MI" && aLongValue == "CM"){
        outputLong.value = inputLong.value*160934.4;
     } /* milla a metro*/
    else if (deLongValue == "MI" && aLongValue == "M"){
        outputLong.value = inputLong.value*1609.344;
     }/* milla a kilometro */
    else if (deLongValue == "MI" && aLongValue == "KM"){
        outputLong.value = inputLong.value*1.609344;
     } /* milla a pulgada */
    else if (deLongValue == "MI" && aLongValue == "IN"){
         outputLong.value = inputLong.value*63360;
     }/* milla a pie*/
    else if (deLongValue == "MI" && aLongValue == "FT"){
         outputLong.value = inputLong.value*5280;
     }/* milimetro a milimetro, centimetro a centimetro, metro a metro, kilometro a kilometro, pulgada a pulgada, pie a pie y milla a milla */
    else {
        outputLong.value = inputLong.value;
    } 
}
convertirLong();


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


/* MASA */

const inputMasa = document.getElementById('inputMasa');
const outputMasa = document.getElementById('outputMasa');
const deMasa = document.getElementById('deMasa');
const aMasa = document.getElementById('aMasa');
let deMasaValue,aMasaValue;

inputMasa.addEventListener("keyup", convertirMasa);
deMasa.addEventListener("change", convertirMasa);
aMasa.addEventListener("change", convertirMasa);

function convertirMasa (){
    deMasaValue = deMasa.value;
    aMasaValue = aMasa.value;

    /* kilogramo a gramo */
    if (deMasaValue == "KG" && aMasaValue == "G"){
        outputMasa.value = inputMasa.value*1000;
    } /* kilogramo a onza */
    else if (deMasaValue == "KG" && aMasaValue == "OZ"){
        outputMasa.value = inputMasa.value*35.27396;
    } /* kilogramo a libra */
    else if (deMasaValue == "KG" && aMasaValue == "LB"){
        outputMasa.value = inputMasa.value*2.20452;
    } /* kilogramo a tonelada */
    else if (deMasaValue == "KG" && aMasaValue == "T"){
        outputMasa.value = inputMasa.value*0.001;
    } /* gramo a kilogramo */
    else if (deMasaValue == "G" && aMasaValue == "KG"){
        outputMasa.value = inputMasa.value*0.001;
    } /* gramo a onza */
    else if (deMasaValue == "G" && aMasaValue == "OZ"){
        outputMasa.value = inputMasa.value*0.352739;
    } /* gramo a libra */
    else if (deMasaValue == "G" && aMasaValue == "LB"){
        outputMasa.value = inputMasa.value*0.0022046;
    }/* gramo a tonelada */
    else if (deMasaValue == "G" && aMasaValue == "T"){
        outputMasa.value = inputMasa.value*0.000001;
    } /* onza a kilogramo */
    else if (deMasaValue == "OZ" && aMasaValue == "KG"){
        outputMasa.value = inputMasa.value*0.028349;
    } /* onza a gramo */
    else if (deMasaValue == "OZ" && aMasaValue == "G"){
        outputMasa.value = inputMasa.value*28.3495;
    } /* onza a libra */
    else if (deMasaValue == "OZ" && aMasaValue == "LB"){
        outputMasa.value = inputMasa.value*0.0625;
    } /* onza a tonelada */
    else if (deMasaValue == "OZ" && aMasaValue == "T"){
        outputMasa.value = inputMasa.value*0.0000283495;
    } /* libra a kilogramo*/
    else if (deMasaValue == "LB" && aMasaValue == "KG"){
        outputMasa.value = inputMasa.value*0.45359;
    } /* libra a gramo */
    else if (deMasaValue == "LB" && aMasaValue == "G"){
        outputMasa.value = inputMasa.value*453.59;
    } /* libra a onza */
    else if (deMasaValue == "LB" && aMasaValue == "OZ"){
        outputMasa.value = inputMasa.value*16;
    } /* libra a tonelada */
    else if (deMasaValue == "LB" && aMasaValue == "T"){
        outputMasa.value = inputMasa.value*0.00045359;
    } /* tonelada a kilogramo */
    else if (deMasaValue == "T" && aMasaValue == "KG"){
        outputMasa.value = inputMasa.value*1000;
    } /* tonelada a gramo */
    else if (deMasaValue == "T" && aMasaValue == "G"){
        outputMasa.value = inputMasa.value*1000000;
    } /* tonelada a onza */
    else if (deMasaValue == "T" && aMasaValue == "OZ"){
        outputMasa.value = inputMasa.value*35273.9619;
    } /* tonelada a libra */
    else if (deMasaValue == "T" && aMasaValue == "LB"){
        outputMasa.value = inputMasa.value*2204.6226;
    } /* kilogramo a kilogramo, gramo a gramo, onza a onza, libra a libra y tonelada a tonelada */
    else {
        outputMasa.value = inputMasa.value;
    } 

}
convertirMasa();

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

/* let tiposConversiones = [
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
]  */

const conversiones = async () => {
    try{
        let response = await fetch("./data2.json");
        let tiposConversiones = await response.json();

        tiposConversiones.forEach(obj => {
            let {tipo, opciones} = obj;

            if(tipo === "TEMPERATURA"){
                let deTemp = document.getElementById('deTemp')

                opciones.forEach(elemento => {
                let optionTemp = document.createElement('option')
                optionTemp.value = elemento.id
                optionTemp.innerText = elemento.nombre
                deTemp.append(optionTemp)
                });
        } else if(tipo === 'VOLUMEN'){
                let deVol = document.getElementById('deVol')

                opciones.forEach(elemento => {
                let optionVol = document.createElement('option')
                optionVol.value = elemento.id
                optionVol.innerText = elemento.nombre
                deVol.append(optionVol)
            });
        } else if(tipo === 'MASA'){
            let deMasa = document.getElementById('deMasa')

            opciones.forEach(elemento => {
            let optionMasa = document.createElement('option')
            optionMasa.value = elemento.id
            optionMasa.innerText = elemento.nombre
            deMasa.append(optionMasa)
            });
        } else if(tipo === 'LONGITUD'){
            let deLong = document.getElementById('deLong')

            opciones.forEach(elemento => {
            let optionLong = document.createElement('option')
            optionLong.value = elemento.id
            optionLong.innerText = elemento.nombre
            deLong.append(optionLong)
            });
        }
        })
    } catch (error){
        console.log(error)
    }
};

/* fetch */
const boton = document.querySelector("#btn");
const contenedor = document.querySelector("#fetch");

const obtenerComentarios = async ()=>{
    try {
        let response = await fetch("./data.json");
        let result = await response.json();
        result.forEach(coment => {
            contenedor.innerHTML +=`
                <div class="coments">
                    <h3 class="tituloComent">COMENTARIO ${coment.id}</h3>
                    <p class="usuarioComent">${coment.usuario}</p>
                    <p class="comentario">${coment.comentario}</p>
                </div>
                `
        })
    } catch (error) {
        console.log(error)
    }

}

boton.onclick = () =>{
    obtenerComentarios();
}