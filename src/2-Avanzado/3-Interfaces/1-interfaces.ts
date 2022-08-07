/**
 * Interfaces
 * Básicamente las interfaces son lo mismo que los type pero se arman de una forma diferente, ellas necesitan un cuerpo para ser declaradas mientras que el typo no.
 */

// ejemplo
type userID = string | number;

interface userid {
    id: string | number;
}


// ejemplo 2
type products = {
    name: string;
    sell: Date;
    descriction: string;
}

export interface products2 {
    name: string;
    sell: Date;
    descriction: string;
}

// ===================================================0

export interface personInterface {
    id: number;
    name: string;
    lastname: string;
    birthdate: Date;
    createAt: Date;
    updatedAt: Date;
    deleteAt: Date | null;
}

export interface user {
    id: string | number;
    person: personInterface;
}

const persona: user = {
    id: 1,
    person: {
        id: 1,
        name: 'oscar',
        lastname: 'munoz',
        birthdate: new Date('1991-08-25'),
        createAt: new Date(),
        updatedAt: new Date(),
        deleteAt: null
    }
}

console.log(persona);