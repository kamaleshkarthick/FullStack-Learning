import React,{ createContext } from 'react'
import { useState,useEffect } from 'react'

export const productsContext = createContext()
 
const ProductProvider = (childern) => {
    const [products, setProducts] = useState([])
    useEffect(() => {

        const fetchapiProducts = async () => {
            const res = await fetch('https://fakestoreapi.com/products')
            const data = await res.json()
            setProducts(data)
        }
        fetchapiProducts()
    },[])
    
  return (
      <>
          <productsContext.Provider value={products}>
              {childern}
          </productsContext.Provider>
      </>
  )
}

export default ProductProvider