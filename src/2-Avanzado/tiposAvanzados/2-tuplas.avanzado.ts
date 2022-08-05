/**
 * TUPLAS
 * Las tuplas nos sirven para hacer un array fuertemente tipado especificando el tipo de dato de cada elemento del array así como la cantidad de elementos.
 * Para hacer una tupla lo hacemos de la siguiente manera
*/




// ASÍ ES COMO SE DECLARA UN ARRAY NORMAL
const prices: (number | string)[] = [1,2,3,4, '', ''];
prices.push('1');

// ÁSI SE DECLARAN LAS TUPLAS
const user: [string, number] = ['oscar', 30];
const [username, age] = user;
console.log(username);
console.log(age);
