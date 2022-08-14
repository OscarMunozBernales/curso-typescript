/**
 * Get
 * Con get podemos acceder a una propiedad con un alcance privado, podemos obtener los datos de esa propiedad pero no modificarlos o mutarlos.
 * Lo podemos acceder como si fuese una propiedad más de la instancia. Por definición, todos los getters tienen que retornar algo.
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
}

const t = new triangulo(111,22,3221212);
console.log(t._ladoA);
console.log(t._ladoB);
console.log(t._hipotenusa);