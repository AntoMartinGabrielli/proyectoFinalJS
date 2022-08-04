const formUser = document.querySelector("#formUser");
const usernameForm = document.querySelector("#username");
const passwordForm = document.querySelector("#password");
const respuestaForm = document.querySelector("#respuesta");
const irAConversor = document.querySelector("#irAConversor");


let username;
let password;


let usernameStorage = localStorage.getItem('username');
let passwordStorage = localStorage.getItem('password');


const ejecutarRespuesta = () => {
    respuestaForm.innerHTML = `BIENVENIDO ${username}`;
    formUser.style.display = 'none';
    irAConversor.style.opacity = 100;
    irAConversor.addEventListener('click', () => {
        window.location.href = ('./index.html');
    });
}

const ejecutarForm = () => {
    username = usernameForm.value;
    password = passwordForm.value;


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

const verificarStorage = () => {
    if (usernameStorage !== null && passwordStorage !== null){
        username = usernameStorage;
        password = passwordStorage;

        ejecutarRespuesta();
    } else {
        formUser.addEventListener('submit', (e) =>{
            e.preventDefault();
            ejecutarForm();
        });
    }
}


verificarStorage();

