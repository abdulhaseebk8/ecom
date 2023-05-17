export const getAllProductsData = () => {
    return fetch('https://my-json-server.typicode.com/benirvingplt/products/products')
      .then(response => response.json())
      .then(json => {
        return json
      })
      .catch(error => {
        console.error(error);
      });
  };