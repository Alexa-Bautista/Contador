let time= document.getElementById("time")

let result= document.getElementById("result") 

let readyPlayer1= document.getElementById("readyPlayer1")
let readyPlayer2= document.getElementById("readyPlayer2")

let inputJugador= document.getElementById("inputJugador")

let btnSuma= document.getElementById("btnSuma")
let btnResta= document.getElementById("btnResta")

let resultPlayer1= document.getElementById("resultPlayer1")
let resultPlayer2= document.getElementById("resultPlayer2")


let Jugador1= document.getElementById("Jugador1")
let Jugador2= document.getElementById("Jugador2")

let reset=document.getElementById("reset")

let alert=document.getElementById("alerta")

let recibirResultadoJugador1=localStorage.getItem("ResultadoJugador1")
let recibirResultado= localStorage.getItem("Resultado")
let recibirResultadoJugador2=localStorage.getItem("Resultadojugador2")

let contador= recibirResultado
let contadorSuma=recibirResultadoJugador1
let contador2= recibirResultadoJugador2

result.textContent= recibirResultado
resultPlayer1.textContent=recibirResultadoJugador1
resultPlayer2.textContent=recibirResultadoJugador2



    btnSuma.addEventListener("click", () => {
        contador ++   
        contadorSuma ++
        result.textContent=contador
        resultPlayer1.textContent=contadorSuma
        guardarValores()
    })


    function minuend (){
    contador2 ++
    contador --
    result.textContent=contador
    resultPlayer2.textContent=contador2
    guardarValores()
}

// Jugador1.textContent= prompt("Ingrese nombre jugador 1")
// Jugador2.textContent=prompt("Ingrese nombre jugador 2")

function guardarValores(){
    localStorage.setItem("Resultado", contador)
    localStorage.setItem("ResultadoJugador1", contadorSuma)
    localStorage.setItem("Resultadojugador2", contador2)  
}

function reiniciarContadores(){
    
    let pasword = "Ale23"
    let paswordUsuario= prompt("Ingrese pasword")
    if (pasword===paswordUsuario){
        contador = 0
        contadorSuma= 0
        contador2= 0
                
        localStorage.setItem("Resultado", contador)
        localStorage.setItem("ResultadoJugador1", contadorSuma)
        localStorage.setItem("Resultadojugador2", contador2)  
        result.textContent=contador
        resultPlayer1.textContent=contadorSuma
        resultPlayer2.textContent=contador2
    }else
    alert ("CONTRASEÑA ERRADA")
}

readyPlayer2.addEventListener("change", updatePlayer)
readyPlayer1.addEventListener("change", updatePlayer)
function updatePlayer(event) {
    let saveP2= event.target.value

console.log(event);
console.log(saveP2);
console.log(saveP2.length);

// si saveP1 <=1 entonces debe ingresar un nombre que contenga más de 3 caracteres
// modal = Pop UP informando que la estoy cagando MEJOR QUE UN ALERT
if (saveP2.length>1){
    Jugador2.textContent=saveP2;
    localStorage.setItem("P2",saveP2)
}else{
    alerta.classList.toggle("hidden")
}
}
Jugador2.textContent= localStorage.getItem("P2")

function updatePlayer(event) {
    let saveP1= event.target.value

console.log(event);
console.log(saveP1);
console.log(saveP1.length);

// si saveP1 <=1 entonces debe ingresar un nombre que contenga más de 3 caracteres
// modal = Pop UP informando que la estoy cagando MEJOR QUE UN ALERT
if (saveP1.length>1){
    Jugador1.textContent=saveP1;
    localStorage.setItem("P1",saveP1)
}else{
    alerta.classList.toggle("hidden")
}
}
Jugador1.textContent= localStorage.getItem("P1")







// console.log(Date());
// function controlHora (){
    
//     //Solicitando la hora en que se detendra el juego
//     let horaFinalJuego = new Date ("May 13, 2024 3:37:00");
//     let horaFinal = horaFinalJuego.getHours();
//     let minutoFinal = horaFinalJuego.getMinutes();
//     let horaActual= Date();

//     // Estoy solicitando horas y minutos actuales
//     let horaHoy= new Date (horaActual);
//     let horaNow= horaHoy.getHours();
//     let minutosAhora=horaHoy.getMinutes();
    

    
    
//     // console.log(hora, minuto, horaActual, horaHoy,horaNow,minutosAhora);   
//     if (horaNow=== horaFinal && minutosAhora===minutoFinal){
//         btnSuma.disabled=true
//         btnResta.disabled=true

//     }
// console.log(Date.parse(horaFinalJuego));
// console.log(Date.parse(horaActual));
// }
// controlHora()



