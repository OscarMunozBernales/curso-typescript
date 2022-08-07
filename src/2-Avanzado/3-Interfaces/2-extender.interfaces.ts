/**
 * ¿Qué es extender interfaces? 
 * Es básicamente la herencia como funciona en la programación orientada a objetos.
 * 
 * Diferencia con type 
 * Al usar interfaces podemos aplicar herencia, pero esto no ocurre con type.
 */


interface baseInterface {
    id: number,
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date | null
}


interface personInterface extends baseInterface {
    name: string,
    lastname: string,
    birthdate: Date,
    
}

const person : personInterface = {
    id: 1,
    name: 'string',
    lastname: 'string',
    birthdate: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
}

console.log(person);