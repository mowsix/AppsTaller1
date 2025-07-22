const Entrada = document.getElementById("textInput");
const Salida = document.getElementById("textOutput");

function contarPalabras() {
    const Texto = Entrada.value;
    const Palabras = Texto.split(" ");
    if (Texto.trim() === "") {
        Salida.value = 0;
        return;
    }
    let Contador = 0;
    Contador = Palabras.length;
    Salida.value = Contador;
    mostrarPalabras();
}

function mostrarPalabras() {
    Salida.value = Contador;
}

document.getElementById("countButton").addEventListener("click", contarPalabras);
