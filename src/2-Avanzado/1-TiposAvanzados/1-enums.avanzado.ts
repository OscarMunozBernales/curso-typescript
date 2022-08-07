/**
 * Enums 
 * Los enums funcionan como listas en las que podemos agregar llaves y valores. Esto lo que nos permite es tener un set de opciones predefinidas, 
 * evitando pasar un argumento invalido, ya que solo vamos a tener las opciones dentro del enum. Estos se usan de la siguiente manera
 */

enum ROLES {
    ADMIN = 'admins',
    SELLER = 'seller',
    CUSTOMER = 'customer'
}

type User = {
    username: string;
    role: ROLES
}

const user: User = {
    username: 'omunoz',
    role: ROLES.ADMIN
}

export {
    user,
    User,
    ROLES
}

console.log(user);