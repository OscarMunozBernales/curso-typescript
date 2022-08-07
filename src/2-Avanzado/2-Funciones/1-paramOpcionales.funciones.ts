/**
 * Parámetros opcionales y nullish-coalescing
 */

export const createProduct = (
    id: (number | string),
    stock: number,
    isNew?: boolean //los parametros opcionales siempre van al final
) => {
    return {
        id,
        stock,
        isNew: isNew ?? true
    }
}

console.log(createProduct(1, 300));
console.log(createProduct(1, 400, false));