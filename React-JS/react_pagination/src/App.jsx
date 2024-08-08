import { RouterProvider } from "react-router-dom"
// import router from "./Router/Router
import {createBrowserRouter,  createRoutesFromElements, Route } from "react-router-dom";
import Rootlayout from "./Layout/Rootlayout";
import About from "./Screen/About";
import Home from "./Screen/Home";
import Dashboard from "./Screen/Dashboard";
import Contact from "./Screen/Contact";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Rootlayout/>}>
//       <Route index element={<Home />} />
//       <Route path="About" element={<About />} />

//     </Route>
//   )
// );

function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Rootlayout/>}>
        <Route index element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<Contact/>}/>
        <Route path="Dashboard" element={<Dashboard/>}/>
  
      </Route>
    )
  );
  


  return (
    <>
    
      <RouterProvider router={router} />
      {/* <h1>hello</h1> */}
    </>
  )
}

export default App
