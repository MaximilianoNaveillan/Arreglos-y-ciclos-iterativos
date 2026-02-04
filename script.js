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

nombres.push('antonio');
console.log('nuevo nombre ingresado mediante el metodo push:', nuevo_nombre);
