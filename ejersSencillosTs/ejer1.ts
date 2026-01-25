
// EJERCICIO 1: Declaración de variables

// Variable de tipo string
const nombre: string = "Jordi";

// Variable de tipo number
const edad: number = 2;

// Variable de tipo boolean
const activo: boolean = true;

console.log("Ejercicio 1:");
console.log(`Nombre: ${nombre}`);
console.log(`Edad: ${edad}`);
console.log(`Activo: ${activo}`);


// EJERCICIO 2: Función calcular área rectángulo

function calcularAreaRectangulo(base: number, altura: number): number {
  return base * altura;
}

// Llamada a la función con valores 5 y 10
const areaResultado = calcularAreaRectangulo(5, 10);
console.log("\nEjercicio 2:");
console.log(`El área del rectángulo es: ${areaResultado}`);


// EJERCICIO 3: Interfaz Persona
// hay que poner ? despues del : si queremos que el campo no sea obligatorio
interface Persona {
  nombre: string;
  edad: number;
  correo: string;
}

// Variable que implementa la interfaz Persona
const usuario: Persona = {
  nombre: "Ana García",
  edad: 28,
  correo: "ana.garcia@email.com"
};

console.log("\nEjercicio 3:");
console.log("Usuario:", usuario);


// EJERCICIO 4: Union Types y Type Guards


// Variable que puede ser string o number
let id: string | number;

id = "ABC123";
id = 456;

// Función que verifica el tipo de id
function verificarTipoId(id: string | number): string {
  if (typeof id === "number") {
    return `El id "${id}" es un número`;
  } else {
    return `El id "${id}" es un texto`;
  }
}

console.log("\nEjercicio 4:");
console.log(verificarTipoId("ABC123"));
console.log(verificarTipoId(456));


// EJERCICIO 5: Ordenar array de números

function ordenarNumeros(numeros: number[]): number[] {
  return numeros.sort((a, b) => a - b);
}

const numerosDesordenados = [34, 7, 23, 32, 5, 62, 12];
const numerosOrdenados = ordenarNumeros([...numerosDesordenados]);

console.log("\nEjercicio 5:");
console.log("Array original:", numerosDesordenados);
console.log("Array ordenado:", numerosOrdenados); 