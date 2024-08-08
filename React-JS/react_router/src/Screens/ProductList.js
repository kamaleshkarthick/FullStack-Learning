import React from "react";
import { Link } from "react-router-dom";

const ProductList = ({ id, title, price, category }) => {
  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{title}</td>
        <td>{price}</td>
        {/* <td>{category}</td> */}
        <td> <Link to={`product/love/${id.toString()}`}>{ category}</Link> </td>
      </tr>
    </>
  );
};

export default ProductList;
