import axios from 'axios';
import { Product } from './../util/model/product.model';
(async ()=> {

  async function getProductsAsync() : Promise<Product[]>{
    const { data } = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products');
    return data;
  }

  const productsv2 = await getProductsAsync();
  console.log(productsv2.map(item => `${item.id} - ${item.title}`));
})();
