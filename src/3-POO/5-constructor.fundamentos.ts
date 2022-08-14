/**
 * Constructor
 * Es el constructor en el que construimos la instancia y mandamos los parámetros por 
 * defecto por el cual queremos que se inicialice esa instancia a un objeto.
 */

export class triangulo {
    constructor(
        private ladoA : number,
        private ladoB : number,
        private hipotenusa : number
    ){}

    public toString() {
        console.log(this.hipotenusa, this.ladoA, this.ladoB);
    }
}

const t = new triangulo(1,2,3);
t.toString();