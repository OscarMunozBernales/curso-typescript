/**
 * Readonly
 * A este lo vamos a utilizar cuando queramos que cierta propiedad solamente sea de lectura y no se la pueda modificar o sobreescribir a lo largo de nuestro programa.
 */

 export interface baseInterface {
    readonly id: 12345, // SOLO LECTURA
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date | null
}
