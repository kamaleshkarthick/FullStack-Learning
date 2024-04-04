import { createContext } from "react";
import { useState, useEffect } from "react";

export const ProductsContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  console.log(products);

  useEffect(() => {
    const fetchapiProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    };
    fetchapiProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductProvider;
