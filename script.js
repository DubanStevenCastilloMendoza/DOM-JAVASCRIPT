
let bd = [
    {
        email:"stv@gmail.com",
        password:"123456",
        user: "stv56",
        active: true
    },
    {
        email:"stva@gmail.com",
        password:"123456",
        user: "sta52",
        active: true
    },    
    {
        email:"stve@gmail.com",
        password:"123456",
        user: "stq58",
        active: false
    }
]

function sayHi(){

    let username = document.querySelector("#user").value //selecciona el id del elemento como si fuera un elemento css
    let password = document.querySelector("#pass").value//value guarda el valor que yo ponga dentro del input
    

    let encontro = false
    for(i= 0; i < bd.length; i++){
        if (bd[i].user == username && bd[i].password == password && bd[i].active) {
            encontro = true
        }
    }

    if (encontro) {
        alert("correcto")
    }else{
        alert("usuario no encontrado")
    }
    
}
//ver contraseña
function viewpass() {

    let type = document.querySelector("#pass").type
    if (type === "password") {
        document.querySelector("#pass").type = "text"
    }else{
        document.querySelector("#pass").type = "password"
    }
    
}

    // let json = {
    //     //carracteristicas del json 
    //     // la llave y el valor de la llave, trae objetos del mundo real al mundo virtual
    //     llave: valor
    // }

    // let persona ={
    //     name: "Duban",
    //     lastname: "Castillo",
    //     age: 20,
    //     id: 1012,
    //     tel: 3203334107
    // }
    // let carro = {
    //     color: "amarillo",
    //     marca: "cheverolet",
    //     asientos: 5,
    //     prede:true,
    //     encendido: () => {},
    //     taxista: persona.name
    // }
    // console.log(persona.name)

    //para imprimir solo un atributo, llamamos el json y con el punto concatenamos el nombre del atributo

// btn.addEvenListener('click', function () { crear un evento para de esa manera no usar el onclick
    
// })