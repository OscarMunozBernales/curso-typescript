export const createProduct = (
    id: (number | string),
    stock: number,
    isNew: boolean = false // esto es un ejemplo de parametros por defecto.
) => {
    return {
        id,
        stock,
        isNew: isNew ?? true
    }
}

console.log(createProduct(1, 300));
console.log(createProduct(1, 400, false));