/**
 * Set
 * Es parecido a un get, solo que este no retorna nada, es un método void, 
 * pero no hace falta colocarle lo que retorna, ya que va a dar error.
 * A set lo podemos usar para tener reglas de modificación para nuestros parámetros.
 */

 export class triangulo {
    constructor(
        private ladoA : number,
        private ladoB : number,
        private hipotenusa : number
    ){}

    get _ladoA() : number{ return this.ladoA }
    get _ladoB() : number{ return this.ladoB }
    get _hipotenusa() : number{ return this.hipotenusa }

    set _ladoA( lado : number ){ this.ladoA = lado }
    set _ladoB( lado : number ){ this.ladoB = lado }
    set _hipotenusa( lado : number ){ this.hipotenusa = lado }
}

const t = new triangulo(111,22,3221212);
t._ladoA = 200;
t._ladoB = 300;
t._hipotenusa = 500;
console.log(t._ladoA);
console.log(t._ladoB);
console.log(t._hipotenusa);