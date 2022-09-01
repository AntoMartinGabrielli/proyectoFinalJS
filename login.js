const formUser = document.querySelector("#formUser");
const usernameForm = document.querySelector("#username");
const passwordForm = document.querySelector("#password");


let username;
let password;


let usernameStorage = localStorage.getItem('username');
let passwordStorage = localStorage.getItem('password');


const ejecutarRespuesta = () => {
    Swal.fire({
        title: `BIENVENIDO ${username}`,
        confirmButtonText:`<a href="./index.html" class="irAConversor" >IR A CONVERSOR</a>`,
        confirmButtonColor: `black`,
        color:`black`,
        background:`rgba(107, 201, 166)`,  
    })
}

const ejecutarForm = () => {
    username = usernameForm.value;
    password = passwordForm.value;

    if (username == "" && password ==""){
        Swal.fire({
            title: `Usted no está logueado, por favor volver a intentar`,
            color:`black`,
            confirmButtonColor: `black`,
            background:`rgba(107, 201, 166)`,  
        })
    } else if (username == ""){
        Swal.fire({
            title: `Usuario no ingresado, por favor volver a intentar`,
            color:`black`,
            confirmButtonColor: `black`,
            background:`rgba(107, 201, 166)`,  
        })
    } else if (password == ""){
        Swal.fire({
            title: `Contraseña no ingresada, por favor volver a intentar`,
            confirmButtonColor: `black`,
            color:`black`,
            background:`rgba(107, 201, 166)`,  
        })
    }
    else {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    let user = {
        username: localStorage.getItem('username'), 
        password: localStorage.getItem('password'),
    } 
    
    localStorage.setItem('Usuario', JSON.stringify(user)); 

    let storage = JSON.parse(localStorage.getItem('Usuario'));
    console.log(storage);

    ejecutarRespuesta();
    } 
    
}

const verificarStorage = () => {
    if (usernameStorage && passwordStorage){
        username = usernameStorage;
        password = passwordStorage;

        ejecutarRespuesta();
    }
    else {
        formUser.addEventListener('submit', (e) =>{
            e.preventDefault();
            ejecutarForm();
        });
    }
}


verificarStorage();