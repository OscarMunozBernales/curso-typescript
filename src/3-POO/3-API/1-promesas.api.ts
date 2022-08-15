/**
 * Axios
 * Es una forma interesante de hacer request y conectarnos a servicios web, nos va a servir para hacer 
 * peticiones desde el frontend como en el backend.
 * 
 * Asincronismo y TypeScript
 * Podemos correr promesas y código asíncrono con TypeScript de la misma forma que lo haríamos con JavaScript.
 * 
 * Tipado y promesas
 * En el caso de no colocar el tipo de dato de retorno de nuestra función asíncrona, TypeScript supondrá que es 
 * una promesa, pero no sabe el tipo de dato que retorna esa promesa.
 * Podemos tipar a una promesa con genéricos
 * 
 * Fetch con NODE v18
 * Podemos utilizar nodejs para poder realizar peticiones fetch pero solo lo podemos hacer con la versión 18, es una 
 * feature no estable así que puede tener sus errores.
 */


import axios from 'axios';

(async ()=> {

  function delay (time: number) {
    const promise = new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve('string');
      }, time);
    });
    return promise;
  }

  function getProducts() {
    const promise = axios.get('https://api.escuelajs.co/api/v1/products');
    return promise;
  }

  async function getProductsAsync() {
    const rta = await axios.get('https://api.escuelajs.co/api/v1/products');
    return rta.data;
  }

  console.log('---'.repeat(10));
  const rta = await delay(3000);
  console.log(rta);
  console.log('---'.repeat(10));
  const products = await getProducts();
  console.log(products.data);
  const productsv2 = await getProductsAsync();
  console.log(productsv2);
})();