
import React,{BrowserRouter,Routes, Route} from 'react-router-dom'

import Home from './page/Home'
import ProductDetails from './page/ProductDetails'

 const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<ProductDetails/>}/>
        </Routes>
        
      </BrowserRouter>
    </>
  )
}


export default App
