/*
    VANILLA I JAVASCRIPT

    1. Declara 2 variables numéricas (con el valor que desees)
    e indica cual es mayor de los dos. Si son iguales indicarlo también. 
    Ves cambiando los valores para comprobar que funciona.

*/

let numero1 = 1;
let numero2 = 2;

if (numero1 > numero2) {
  console.log("El numero1 es mayor que el numero2");
} else if (numero2 === numero1) {
  console.log("Los dos números son iguales");
} else {
  console.log("El numero2 es mayor que el numero1");
}

//Forma Alternativa

numero1 === numero2 
    ? console.log("Iguales")
    : numero1 > numero2 
        ? console.log("Numero1 es el mayor")
        : console.log("Numero2 es el mayor")

//////////////////////////////////////////////////////////



/*
   2. Declara un String que contenga tu nombre, 
   después muestra un mensaje de bienvenida
   por consola. Por ejemplo: si introduzco “Fernando”, 
   me aparezca “Bienvenido Fernando”.
*/

let nombre = "Pablo"

console.log("Bienvenido " + nombre);

//Formas Alternativas 

console.log("Bienvenido",nombre);
console.log(`Bienvenido ${nombre}`); // --> Interpolación.

//////////////////////////////////////////////////////////

/* 

    3. Modifica la aplicación anterior, para que nos pida el nombre 
    que queremos introducir (recuerda usar prompt).

*/


let nombreDos = prompt("Dime tu nombre")

console.log("Bienvenido", nombreDos)


/*

    4. Haz una aplicación que calcule el área de un círculo (pi*R2). 
    El radio se pedirá por teclado (recuerda pasar de String a double con parseDouble). Usa la constante PI.

*/

let radio = parseFloat(prompt("Dime el radio del círculo"));
let resultado = 2 * Math.PI * radio;
console.log("el resultado es " + resultado);

/*
    5. Lee un número por teclado e indica si es divisible entre 2 (resto = 0). 
    Si no lo es, también debemos indicarlo.

*/

let numero = prompt("INTRODUCE UN NUMERO");
if (numero % 2 === 0) {
    console.log("EL NUMERO ES DIVISIBLE DE FORMA EXACTA")
} else {
    console.log("EL NUMERO NO ES DIVISIBLE DE FORMA EXACTA")
}

