import React, { useState, useEffect } from "react";

const Store = () => {
  const [data, setData] = useState();

  useEffect(() => {
    getDataStore();
  }, []);

  // --- Fetch Api
  const getDataStore = () => {
    fetch("https://fakestoreapi.com/products?limit=5")
      // fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((Data) => setData(Data))
      .catch((err) => console.log(`Error for the API ${err}`));
  };

  return (
    <>
      <h1> Store-Data</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>TITLE</th>
            <th>PRICE</th>
            <th>CATEGORY</th>
            <th>DESCRIPTION</th>
            <th>IMAGE</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((Store, index) => (
              <tr key={index}>
                <td>{Store.id} </td>
                <td>{Store.title} </td>
                <td>{Store.price} </td>
                <td>{Store.category} </td>
                <td>{Store.description} </td>
                    <td><img src={Store.image}/></td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};
export default Store;
