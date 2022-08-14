/**
 * Herencia ¿Qué es?
 * Como su palabra lo dice, las propiedades y métodos de una clase son heredadas por otra para evitar la redundancia de código en nuestro proyector.
 * 
 * Super
 * Es una palabra reservada para llamar las propiedades y métodos de la clase padre.
 * Al usar esta palabra reservada en el constructor de la clase hija, estamos invocando al constructor de la clase padre.
 */


 export class Animal {
    constructor(
        public name: string
    ) {}

    move() {
        console.log("Moving along!");
    }

    gretting() {
        return `Hello, I'm ${this.name}`;
    }
}

export class Dog extends Animal {
    constructor(
        public owener: string, 
        name: string
    ) {
        super(name);
    }

    woof(times: number): void {
        for (let i = 0; i < times; i++) {
            console.log("Woof!");
        }
    }
}

const fifi = new Animal("Fifi");
fifi.move();
console.log(fifi.gretting());

const cheis = new Dog("Cheis", "Galeed");
cheis.move();
console.log(cheis.gretting());
cheis.woof(5);