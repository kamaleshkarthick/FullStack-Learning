import React from 'react'
import {  useLoaderData } from 'react-router-dom'


const ProductDetail = () => {
  // const { id } = useParams();
  // console.log(id);
  const Productitems = useLoaderData();
  console.log(Productitems);
  return (
      <>
      <h1> Product-Detail</h1>
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
              <tr>
                  <td>{ Productitems.id}</td>
                  <td>{ Productitems.title}</td>
                  <td>{Productitems.price}</td>
                  <td>{ Productitems.category}</td>
                </tr>
        </tbody>
      </table>
   
      </>
  )
}

export const Productitem = async ({params}) => {
  const { id } = params;
  // console.log(params)
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await res.json();
  return data;
  
}

export default ProductDetail;