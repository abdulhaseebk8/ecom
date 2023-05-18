import { ProductProperties } from '../Components/product';
import { ApiConsts } from './app.constant';
import axios from 'axios';

// we can also add an api caller according to our requirements if needed.

export const getAllProductsData = () => {
  return axios
    .get(`${ApiConsts.BASE_URL}/products${ApiConsts.PRODUCTS}`)
    .then((response: Array<ProductProperties>) => response.data)
    .catch(error => {
      console.error(error);
      throw error;
    });
};
