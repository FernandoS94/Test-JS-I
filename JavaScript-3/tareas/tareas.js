// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  return array[0];
}//OK

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length-1];
}//OK

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return  array.length;
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:

 return array.map(elem => elem + 1);
}//OK

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  //return array.map(array => array.push(elemento));
  array.push(elemento);
  return array;
 
 
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  
  //return array.map(array,elemento=>array.unshift(elemento));
  array.unshift(elemento);
  return array;
}//FALTA



function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  return palabras.reduce((acum, valor)=> acum +' '+ valor);
}//OK

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
 //return array.filter(elemento => elemento === elemento)
 //return array.indexOf(elemento);
 for (let i = 0; i < array.length; i++) {
  if(array[i]===elemento){
    return true;
  }
    
 }return false;
}//OK

function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  
  return numeros.reduce((acum,valor)=>acum + valor);

}//OK


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  //return (resultadosTest.reduce((acumulador, resultado)=>acumulador + resultado, 0)/resultadosTest.lenght);
  var acu=0;
  for (let i = 0; i < resultadosTest.length; i++) {
    acu=acu+resultadosTest[i];
      }
  return acu/resultadosTest.lenght;
 
  
}//FALTA

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var max = 0;
  for (let i = 0; i < numeros.length; i++) {
    if(numeros[i]>max){
      max=numeros[i];
    }    
  }
  return max;
}//OK

function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 19.
  //Escribe tu código aquí
  var acu =0;
  for (let i = 0; i < arreglo.length; i++) {
    if(arreglo[i]>18){
      acu=acu+1;

    }
    
  }
  return acu;
}

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  //let dias =['lunes','martes','miercoles','jueves','viernes','sabado','domingo'];
  
  if (numeroDeDia == 1 || numeroDeDia == 7 ){
    return 'Es fin de semana';

  } else {
    return 'Es dia Laboral';}
} //OK

function empiezaConNueve(n) {
   //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  return String(n)[0]==9;
}

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
 for (let i = 0; i < arreglo.length; i++) {
  if(arreglo[i]===arreglo[i+1]){
    return true;
  }else{
    return false;
  }
  
 }
  
} 

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
 var meses = [];

 for (let i = 0; i < array.length; i++) {
  if (array[i]==='Marzo'||array[i]==='Noviembre'||array[i]==='Enero') {
    meses.push(array[i]);
  }else{
    return 'No se encontraron los meses pedidos';
  }
  
 }
 return meses;


  
}

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  return array.filter(numero => numero > 100);
}//OK

// No modificar nada debajo de esta línea, de lo contrario no correrán los test.
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
};
