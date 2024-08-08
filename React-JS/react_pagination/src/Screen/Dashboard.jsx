import { useState, useEffect } from "react"


const Dashboard = () => {

  const [Product, setProduct] = useState();

  // console.log("work");
  useEffect(() => {
    const fetchData =async () => {
      try {
        const respon = await fetch("https://fakestoreapi.com/carts");
        const data = await respon.json();
        console.log(data);
        setProduct(data);
      } catch (e) {
        return e;
      }
    }
    fetchData()
    console.log("work");

  }, []);

  console.log(Product)
  
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>USER ID</th>
            <th>DATE</th>
            <th>PRODUCTS</th>
          </tr>
         
        </thead>
        <tbody>
          {Product && Product.map((p, i) => (
            <tr key={i}>
              <td>{p.id}</td>
              <td>{p.userId}</td>
              <td>{p.date}</td>
              {/* <td>{p.products.map((pr, i) => (
                <table key={i}>
                <tr >
                     <td>{pr.productId}</td>
                     <td>{pr.quantity}</td>
                  </tr>
                  </table>
              
              ))}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Dashboard