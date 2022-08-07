/**
 * Problema con el retorno de funciones
 * Cuando tenemos una función que retorna más de un solo tipo de dato y a ese resultado lo queremos utilizar en otra parte de nuestro programa, 
 * no vamos a poder usarlo como tal, ya que TypeScript no sabe que tipo de dato se retornó realmente.
 * 
 * TypeScript al no saber el tipo de dato que se retornó en una función que puede retornar más de un tipo de dato, somos nosotros los responsables 
 * en decirle el tipo de dato resultante de la función para así poder operar con el resultado de forma normal.
 * 
 * Uso de la sobrecarga de funciones
 * Se suele emplear mucho en librerías, pero depende mucho de tu proyecto y de las ventajas que te puede llegar a dar.
 * La sobre carga de funciones únicamente suelen darse con las funciones declarativas con la palabra reservada
 */

function parseStr(input: string | string[]): string | string[]{
    return Array.isArray(input) ? input.join('') : input.split('');
}

console.log(parseStr('OSCAR'));
console.log(parseStr(['O', 'S', 'C', 'A', 'R']));