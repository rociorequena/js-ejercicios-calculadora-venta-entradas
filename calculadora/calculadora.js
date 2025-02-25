let pantalla = document.getElementById("pantalla");
let operandoActual = "";
let operandoPrevio = "";
let operacion = null;

function agregarNumero(num) {
    if (num === '.' && operandoActual.includes('.')) return;
    operandoActual += num;
    actualizarPantalla();
}

function operar(op) {
    if (operandoActual === "") return;
    if (operandoPrevio !== "") {
        calcular();
    }
    operacion = op;
    operandoPrevio = operandoActual;
    operandoActual = "";
}

function calcular() {
    if (operandoPrevio === "" || operandoActual === "") return;
    let resultado;
    let num1 = parseFloat(operandoPrevio);
    let num2 = parseFloat(operandoActual);
    
    switch (operacion) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                pantalla.innerText = "Error";
                return;
            }
            resultado = num1 / num2;
            break;
        default:
            return;
    }
    
    operandoActual = resultado.toString();
    operandoPrevio = "";
    operacion = null;
    actualizarPantalla();
}

function borrar() {
    operandoActual = operandoActual.slice(0, -1);
    actualizarPantalla();
}

function borrarTodo() {
    operandoActual = "";
    operandoPrevio = "";
    operacion = null;
    actualizarPantalla();
}

function actualizarPantalla() {
    pantalla.innerText = operandoActual || "0";
}
