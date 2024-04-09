import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductList from "./ProductList";

const Product = () => {
  const productdata = useLoaderData();
  console.log(productdata);
  return (
    <>
      <h1>Product List Area</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>category</th>
          </tr>
        </thead>
        <tbody>
          {productdata &&
            productdata.map((product, i) => (
              <ProductList
                key={i}
                id={product.id}
                title={product.title}
                price={product.price}
                category={product.category}
              />

              // <tr key={i}>
              //     <td>{ product.id}</td>
              //     <td>{ product.title}</td>
              //     <td>{product. price}</td>
              //     <td>{ product.category}</td>
              //   </tr>
              //
            ))}
        </tbody>
      </table>
    </>
  );
};

// Router loader Api calling when route render
// export const Productloader = async () => {
//   try {
//     const res = await fetch("https://fakestoreapi.com/products");
//     let data = await res.json();
//     return data
//   } catch (err) {
//    return err
//   }
 
// };

export const Productloader = async () => {

    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    return data
}

export default Product;
