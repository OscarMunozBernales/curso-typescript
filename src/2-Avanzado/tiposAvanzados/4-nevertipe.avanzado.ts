/**
 * Never Type
 * El tipo de dato never, más que todo sirve para tipar a una función que nunca va a finalizar o sencillamente que pueda terminar el programa en el caso de lanar 
 * una excepción.
 * Un ejemplo de ello es cuando queremos manejar un error o cuando ejecutamos un loop infinito, como por ejemplo una validación de un token de cada x’s segundos, 
 * que es una función que se ejecuta constantemente, ya que lanzas la función, esta envía el token lo valida, y comienza el timer para hacer el refresh de ese 
 * token, si hay un error lanza una excepción y si no continúa con la validación y el timer…
 */

// esta funcion no tiene un punto final ya que dispara una excepcion
function error(mensaje: string): never {
    throw new Error(mensaje);
}

// esta funcion no tiene un punto final ya que dispara un error
function fallo(): never {
    return error("Reportar fallo");
}

// esta funcion no finaliza ya que posee un loop infinito
function loopInfinito() : never {
    while(true){}
}