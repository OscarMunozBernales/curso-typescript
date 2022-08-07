/**
 * ¿Qué es parámetros rest?
 * Se apoya en la flexibilidad que tenemos en JavaScript de enviar parámetros sin ningún problema, que no tienen un fin.
 * Rest parameters nos permite mandar un conjunto de argumentos a nuestra función y ella los recibe como un arreglo.
 * Spread operator
 * A demás de usarlo en poder copiar objetos, también podemos usarlo para poder recibir N parámetros en una función, 
 * además vamos a recibir esos parámetros como un array de argumentos.
 */

// JS
/*
function functionName (...parameters) {
	statements
}
*/

// TS

function functionName (...parameters: string[]) {
	return parameters;
}

// console.log(functionName(["asd", "adasdasd"]));
// 