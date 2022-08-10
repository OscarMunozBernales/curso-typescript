/**
 * ¿Qué es class?
 * JavaScript es un lenguaje orientado a objetos, pero está basado en prototipos.
 * Las clases son una sintaxis más amigable para trabajar con prototipos, las clases internamente son prototipos.
 * La utilizamos para construir instancias de objetos, es como un molde para crear cosas.
 * 
 * Buenas prácticas
 * Es una buena práctica inicializar las propiedades que coloquemos en nuestra clase, ya sea por fuera o dentro de nuestro constructor.
 */

export class MyDate {

    year: number;
    month: number;
    day: number;

    constructor(year: number, month: number, day:number ){
        this.year = year;
        this.month = month;
        this.day = day;
    }

    toString() : string {
        return `${this.year}-${this.month}-${this.day}`;
    }

}


const date = new MyDate(2022, 7, 1);
console.log(date.toString());