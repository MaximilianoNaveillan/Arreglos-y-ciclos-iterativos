/* let arreglo1 = ['a', 'b', 'c'];

//     index        0         1         2          3
let arreglo3 = ['manzana', 'banana', 'cereza', 'durazno'];

console.log(arreglo1);
console.log(arreglo3);

console.table(arreglo3);

console.log(arreglo3.length);
console.log(arreglo3[1]);
console.log(arreglo3[arreglo3.length - 1]);

arreglo3.push('kiwi'); // se argega uno o mas elemento al final y retorna la nueva longitud del arreglo

arreglo3.push('pera', 'mango');
console.log('***************');
console.log(arreglo3);

arreglo3.pop(); // eliimina el ultimo elemento y retorna el elemento eliminado
console.log(arreglo3);
console.log('******* slice() **********');

let nuevoArreglo = arreglo3.slice(1, 4); //  Permite elimar elementos de un arreglo y retorna los elementos eliminados trabajando con una copia del arreglo original el primer argumento es el indice inicial el segundo el indice final limite (no incluido)
console.log(nuevoArreglo);
console.log(arreglo3);

console.log('******* Ejemplos ***********');

let mascota = ['Perro', 'Gato', 'Pájaro'];

mascota.push('Conejo');

console.log(mascota);

mascota.pop();

console.log(mascota);

let nuevoArregloMascota = mascota.splice(1, 2, 'Hamster');

console.log(nuevoArregloMascota);
console.log(mascota); */

// ITERAR SOBRE ARREGLOS
let productos = ['camisa', 'pantalón', 'Zapatos', 'gorra', 'medias'];
console.table(productos);

// ciclo for tradicional
// for (1°var index "desde donde") + ; + 2° hasta donde (condición) + ; + 3 °incremento + 4° bloque de código

//        1°               2°             3°
/* for (let i = 0; i < largo; i++) {
  console.log(i);
} */

/* for (let i = 0; i < productos.length; i++) {
  console.log(productos[i]);
} */

// ciclo while
/* let i = 0;
while (i < productos.length) {
  console.log(productos[i]);
  i++;
} */

/* productos.forEach((producto) => {
  console.log(producto);
});

let index = 0;
console.log(index++);
console.log(index); */

let a = [1, 2, 3];
let b = [3, 4, 5];

let union = a.concat(b);
console.log(union);

/* Método Filter */
let numeros = a.filter((e) => e < 3);
console.log(numeros);
let interseccion = a.filter((e) => b.includes(e));
console.log(interseccion);
let diferencia = a.filter((e) => !b.includes(e));
console.log(diferencia);

/* let animales = ['Perro', 'gato', 'elefante', 'tigre', 'lobo', 'oso'];
console.log(animales.filter((e) => e.toLowerCase() === 'perro')); */

// Matrices
matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.table(matriz);

console.log(matriz[1][2]);
