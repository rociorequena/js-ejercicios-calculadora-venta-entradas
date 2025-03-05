let pantalla = document.getElementById("pantalla"), operandoActual = "", operandoPrevio = "", operacion = null;

const actualizarPantalla = () => (pantalla.innerText = operandoActual || "0");

const agregarNumero = num => {
    if (operandoActual.length < 10 && !(num === '.' && operandoActual.includes('.'))) {
        operandoActual += num;
        actualizarPantalla();
    }
};

const operar = op => {
    if (!operandoActual) return (pantalla.innerText = "Error");
    if (operandoPrevio) calcular();
    operacion = op;
    operandoPrevio = operandoActual;
    operandoActual = "";
};

const calcular = () => {
    let num1 = parseFloat(operandoPrevio), num2 = parseFloat(operandoActual);
    if (!num1 || !num2 || (operacion === '/' && num2 === 0)) return (pantalla.innerText = "Error");
    operandoActual = String(eval(`${num1} ${operacion} ${num2}`)).slice(0, 10);
    operandoPrevio = operacion = null;
    actualizarPantalla();
};

const borrar = () => (operandoActual = operandoActual.slice(0, -1), actualizarPantalla());
const borrarTodo = () => (operandoActual = operandoPrevio = "", operacion = null, actualizarPantalla());
