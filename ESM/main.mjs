// Importar usando ES Modules
import Calculadora, { sumar, restar, multiplicar, dividir } from './calculadora.mjs';

console.log('=== CALCULADORA CON ES MODULES ===\n');

// Usar funciones individuales
console.log('Funciones individuales:');
console.log('5 + 3 =', sumar(5, 3));
console.log('10 - 4 =', restar(10, 4));
console.log('6 × 7 =', multiplicar(6, 7));
console.log('15 ÷ 3 =', dividir(15, 3));

console.log('\n-------------------\n');

// Usar la clase Calculadora
console.log('Usando la clase Calculadora:');
const calc = new Calculadora();

console.log('20 + 15 =', calc.operar('suma', 20, 15));
console.log('50 - 18 =', calc.operar('resta', 50, 18));
console.log('8 × 9 =', calc.operar('multiplicacion', 8, 9));
console.log('100 ÷ 4 =', calc.operar('division', 100, 4));

console.log('\nHistorial de operaciones:');
calc.obtenerHistorial().forEach((operacion, index) => {
    console.log(`${index + 1}. ${operacion}`);
});