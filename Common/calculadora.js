// Funciones de operaciones básicas
function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        throw new Error('No se puede dividir por cero');
    }
    return a / b;
}

// Clase calculadora
class Calculadora {
    constructor() {
        this.historial = [];
    }
    
    operar(operacion, a, b) {
        let resultado;
        
        switch(operacion) {
            case 'suma':
                resultado = sumar(a, b);
                break;
            case 'resta':
                resultado = restar(a, b);
                break;
            case 'multiplicacion':
                resultado = multiplicar(a, b);
                break;
            case 'division':
                resultado = dividir(a, b);
                break;
            default:
                throw new Error('Operación no válida');
        }
        
        this.historial.push(`${a} ${operacion} ${b} = ${resultado}`);
        return resultado;
    }
    
    obtenerHistorial() {
        return this.historial;
    }
    
    limpiarHistorial() {
        this.historial = [];
    }
}

// Exportar usando CommonJS
module.exports = {
    sumar,
    restar,
    multiplicar,
    dividir,
    Calculadora
};