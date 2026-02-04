const nombres = ['ana', 'carlos', 'elena', 'fernando', 'joseline'];
console.log('Arreglo inicial:');
console.log(nombres);
console.log('-------------------');

//for (inicio;condicion;incremento)
console.log('largo de Arreglo:', nombres.length);
for (i = 0; i < nombres.length; i++) {
  console.log('index:', i);
  console.log('nombre:', nombres[i]);
  console.log('----------------------');
}
// forEach es un metodo de JS
// forEach(arg...)
// forEach(()=>{}) o forEach(()=>)
// function nombredefunction(props...) --> (props)=>{}
// (props* cuando son mas de una se pasan entre comas)
nombres.forEach((n, i) => {
  console.log('indice desde ForEach:', i);
  console.log('nombre desde ForEach:', n);
});

<<<<<<< HEAD
nombres.push('antonio');
console.log('nuevo nombre ingresado mediante el metodo push:', nuevo_nombre);
=======
// se agrega
// el método push() es un método de JS
// agrega uno o mas elementos a un array
// retorna el nuvo largo del arr
console.log('**************************');
console.log('Se agrega un nuevo nombre al arreglo');
nombres.push('antonio');
console.log('El arreglo original con el nuevo nombre agregado');
console.log(nombres);

/* console.log('El nuevo nombre ingresado mediante el método push es:', nuevo_nombre); */
// el método pop() elimina el ultimo elemento del arreglo
// no requiere argumentos
// el index del elemento eliminado
console.log('uso del metodo pop() ');
nombres.pop();

console.log('el nuevo arreglo resultante');
console.log(nombres);

// El metodo splice elimina uno o varios elementos desde una posicion inicial como primer argumento y el segundo argumento indica la cantidad de elementos del arreglo a eliminar
nombres.splice(3, 1);
console.log(nombres);
>>>>>>> ea55961ba07f1ac9782af20e8bce815b7bcf9807
