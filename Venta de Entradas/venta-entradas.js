const calcularPrecio = () => {
    let edad = parseInt(document.getElementById("edad").value);
    let resultado = document.getElementById("resultado");
    
    if (!edad || edad <= 0) {
        resultado.innerText = "Por favor, ingrese una edad válida.";
        return;
    }
    
    let precio = edad < 12 ? "Gratis" : edad <= 18 ? "$5 - Precio reducido" : "$10 - Precio completo";
    resultado.innerText = `El precio de su entrada es: ${precio}`;
};
